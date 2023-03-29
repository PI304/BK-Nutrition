import { Colors } from '@/styles';
import { Fonts } from '@/styles/fonts';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getPosts, getPostsById } from '../../../api/posts';
import parseSubmitDate from '../../utils/parseSubmitDate';
import Link from 'next/link';
import { svgMenu, svgDownload } from '../../styles/svgs';
import { getDownloadLinkFromS3 } from '../../s3/index';
import { FolderS3 } from '../../constants/folderS3';

export default function View({ id, boardPath }: ViewProps) {
  const [post, setPost] = useState<ResponsePosts.GetById>();

  const fetchPost = async () => {
    const post = await getPostsById(id);
    if (post) setPost(post);
  };

  useEffect(() => {
    if (id) fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, boardPath]);

  return (
    <S.Container>
      <S.Meta>
        <h1>{post?.title}</h1>
        <h2>
          {id} | {post?.author.name} | {parseSubmitDate(post?.created_at + '')}
        </h2>
      </S.Meta>
      {post?.image_file && (
        <S.Img
          src={getDownloadLinkFromS3(FolderS3.images, post?.image_file ?? '')}
          alt='IMG'></S.Img>
      )}
      <S.Content>{post?.content}</S.Content>
      <S.File>
        <h3>첨부파일</h3>
        <div>
          {post?.resources.map((resources, i) => (
            <Link href={getDownloadLinkFromS3(FolderS3.resources, resources.uuid)} key={i}>
              <p>
                {svgDownload}
                {resources.filename}
              </p>
            </Link>
          ))}
        </div>
      </S.File>
      <Link href={boardPath}>
        <S.BoardButton>{svgMenu}목록으로</S.BoardButton>
      </Link>
    </S.Container>
  );
}

namespace S {
  export const Container = styled.div`
    margin-bottom: 5rem;
  `;

  export const Meta = styled.div`
    background-color: ${Colors.gray};
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem;
    padding-bottom: 2rem;
    gap: 2rem;

    > h1 {
      ${Fonts.medium24}
      text-align: center;
    }

    > h2 {
      ${Fonts.light14}
      text-align: right;
    }
  `;

  export const Img = styled.img`
    margin: 2rem 0 0 3rem;
  `;

  export const Content = styled.pre`
    padding: 6rem 3rem;
    line-height: 160%;
  `;

  export const File = styled.div`
    border-top: 0.1rem solid ${Colors.gray};
    border-bottom: 0.1rem solid ${Colors.gray};
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    > h3 {
      ${Fonts.semibold16}
      white-space: nowrap;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > a > p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: 0.5s ease;

        > svg {
          flex-shrink: 0;

          > path {
            transition: 0.5s ease;
          }
        }

        &:hover {
          color: ${Colors.blue500};

          > svg > path {
            fill: ${Colors.blue500};
          }
        }
      }
    }
  `;

  export const BoardButton = styled.button`
    ${Fonts.light14}
    display: flex;
    align-items: center;
    gap: 0.67rem;
    padding: 0.8rem 1.7rem;
    border: 0.1rem solid ${Colors.gray150};
    margin-left: auto;
    margin-top: 3rem;
  `;
}
