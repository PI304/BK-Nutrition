import styled from 'styled-components';
import Arrow from '../../../public/assets/main_arrow.png';
import Image from 'next/image';
import { Colors, Fonts } from '@/styles';
import { getAllPosts, getPosts } from 'api/posts';
import { useEffect, useState } from 'react';
import { Paths, PostsLabel, PostsType } from '@/constants';
import Link from 'next/link';

export const MainBoard = ({ page }: MainContactProps) => {
  const [isCurrent, setIsCurrent] = useState<ResponsePosts.Get>();

  const getBis = async () => {
    const isCurrent = await getAllPosts(PostsType.bis);
    setIsCurrent(isCurrent);
  };

  const getNotice = async () => {
    const isCurrent = await getPosts(PostsType.notice, 0);
    setIsCurrent(isCurrent);
  };

  useEffect(() => {
    page === 'NOTICE' ? getNotice() : page === 'BUSINESS' ? getBis() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      <S.Container>
        <Link
          href={
            page === 'NOTICE' ? Paths.notice : page === 'BUSINESS' ? Paths.achievement : Paths.main
          }>
          <div>{page}</div>
          <Image src={Arrow} alt='arrow'></Image>
        </Link>
        <div>
          {isCurrent?.results?.slice(0, 1).map((isCurrent, i) => (
            <S.ThumbNail href={PostsLabel[isCurrent.type] + isCurrent.id} key={i}>
              <div>
                <img
                  src={page === 'NOTICE' ? 'assets/main_notice.png' : 'assets/main_bis.png'}
                  alt='IMG'
                />
              </div>
              <div>
                <h1>
                  {isCurrent.title.length >= 45
                    ? isCurrent.title.slice(0, 30) + '...'
                    : isCurrent.title}
                </h1>
                <p>
                  {isCurrent.content.length >= 70
                    ? isCurrent.content.slice(0, 80) + '...'
                    : isCurrent.content}
                </p>
                <div>{isCurrent.date}</div>
              </div>
            </S.ThumbNail>
          ))}
          {isCurrent?.results?.slice(1, 5).map((isCurrent, i) => (
            <S.List href={PostsLabel[isCurrent.type] + isCurrent.id} key={i}>
              <div>
                {isCurrent.title.length >= 45
                  ? isCurrent.title.slice(0, 39) + '...'
                  : isCurrent.title}
              </div>
              <div>{isCurrent.date}</div>
            </S.List>
          ))}
        </div>
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-columns: 55rem;
    grid-template-rows: 3rem 1fr;
    margin: 0 auto;
    width: 100vw;
    justify-content: center;

    > a {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${Colors.gray500};
      cursor: pointer;

      > div {
        ${Fonts.bold20};
        color: ${Colors.blue700};
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 35rem;
    }
  `;

  export const ThumbNail = styled(Link)`
    padding: 1.5rem;
    display: flex;
    gap: 2.2rem;

    > div:last-of-type {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h1 {
        ${Fonts.bold20}
        line-height: 115%;
      }

      > p {
        ${Fonts.regular14}
        line-height: 130%;
        text-align: justify;
      }

      > div {
        ${Fonts.medium14}
        color: ${Colors.gray800};
        margin-top: auto;
        margin-bottom: 0.3rem;
      }
    }

    @media (max-width: 1200px) {
      padding: 1rem;
      border-bottom: 0.1rem solid ${Colors.gray500};
      margin-bottom: 3rem;

      > div:first-of-type {
        > img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }

    @media (max-width: 768px) {
      > div:first-of-type {
        > img {
          width: 11rem;
          height: 13rem;
        }
      }

      > div:last-of-type {
        > h1 {
          ${Fonts.bold14}
        }

        > p {
          ${Fonts.regular12}
        }
      }
    }
  `;

  export const List = styled(Link)`
    border-bottom: 0.1rem solid ${Colors.gray300};
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 0;

    :first-of-type {
      border-top: 0.1rem solid ${Colors.gray300};
    }

    > div:first-of-type {
      ${Fonts.medium16};
      color: ${Colors.gray900};
    }

    > div:last-of-type {
      ${Fonts.medium12};
      color: ${Colors.gray900};
    }

    @media (max-width: 1200px) {
      display: none;
    }
  `;
}
