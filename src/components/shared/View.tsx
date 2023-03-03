import { Colors } from '@/styles';
import { Fonts } from '@/styles/fonts';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getPostsById } from '../../../api/posts';
import parseSubmitDate from '../../utils/parseSubmitDate';
import Link from 'next/link';

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
          {id} | 관리자 {post?.author_id} | {parseSubmitDate(post?.created_at + '')}
        </h2>
      </S.Meta>
      <S.Content>{post?.content}</S.Content>
      {/* <S.File>
        <h3>첨부파일</h3>
        <div></div>
      </S.File> */}
      <Link href={boardPath}>
        <S.BoardButton>목록으로</S.BoardButton>
      </Link>
    </S.Container>
  );
}

namespace S {
  export const Container = styled.div``;

  export const Meta = styled.div`
    padding: 2.5rem;
    padding-top: 3.5rem;
    background-color: ${Colors.gray};

    > h1 {
      ${Fonts.medium24}
      text-align: center;
    }

    > h2 {
      ${Fonts.light12}
      text-align: right;
    }
  `;

  export const Content = styled.pre`
    padding: 5.8rem 3rem;
  `;

  export const File = styled.div`
    background-color: ${Colors.gray};
    min-height: 4.9rem;
    padding: 1.5rem 3rem;
    display: flex;
    align-items: flex-start;
    gap: 3rem;

    > h3 {
      ${Fonts.medium16}
      white-space: nowrap;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > p {
        display: flex;
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
          color: ${Colors.blue300};

          > svg > path {
            fill: ${Colors.blue300};
          }
        }
      }
    }
  `;

  export const BoardButton = styled.button``;
}
