import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';
import { Colors, Fonts, BoxShadows } from '@/styles';
import { PageButton, Select } from '@/components/shared';
import { useState, useEffect } from 'react';
import { getPosts } from 'api/posts';
import { PostsType } from '@/constants';
import { PageLimit } from '@/constants/pageLimit';

export const InternationalPage = () => {
  const [international, setInternational] = useState<ResponsePosts.Get>();
  const [page, setPage] = useState(1);
  const onChangePage = (page: number) => setPage(page);

  const getInternational = async () => {
    const international = await getPosts(PostsType.international, PageLimit.limit * (page - 1));
    setInternational(international);
  };

  useEffect(() => {
    getInternational();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      <S.PageBox>
        <S.Page href={Paths.achievement} title={Seo.Title.achievement}>
          연구업적
        </S.Page>
        <S.Page href={Paths.international} title={Seo.Title.international} isCurrent>
          국제 협력
        </S.Page>
        <S.Page href={Paths.industrial} title={Seo.Title.industrial}>
          산학 협력
        </S.Page>
        <Select />
      </S.PageBox>

      <S.BoardBox>
        <table>
          <thead>
            <tr>
              <S.BoardText>제목</S.BoardText>
              <S.BoardText>작성자</S.BoardText>
              <S.BoardText>날짜</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {international?.results?.map((international, i) => (
              <tr key={i}>
                <S.BoardText>
                  <Link href={Paths.international + '/' + international.id}>
                    {international.title.length >= 51
                      ? international.title.slice(0, 50) + '...'
                      : international.title}
                  </Link>
                </S.BoardText>
                <S.BoardText>{international.author.name}</S.BoardText>
                <S.BoardText>{international.date}</S.BoardText>
              </tr>
            ))}
          </tbody>
        </table>
        <PageButton
          totalPage={international?.count ? Math.ceil(international?.count / PageLimit.limit) : 0}
          currentPage={page}
          onChangePage={onChangePage}
          setCurrentPage={setPage}
        />
      </S.BoardBox>
    </>
  );
};

namespace S {
  /* 페이지 & Select */
  export const PageBox = styled.div`
    position: relative;
    display: flex;

    > a:first-of-type {
      border-radius: 1.5rem 0.5rem 0 0;
    }

    > a:nth-child(2) {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    > a:last-of-type {
      border-radius: 0.5rem 1.5rem 0 0;
    }

    > div:last-of-type {
      position: absolute;
      right: 0;
    }

    @media (max-width: 1200px) {
      position: relative;
      display: flex;
      width: 100%;

      > a:first-of-type {
        width: 8rem;
        border-radius: 1.5rem 0.5rem 0 0;
      }

      > a:nth-child(2) {
        width: 8rem;
        border-radius: 0.5rem 0.5rem 0 0;
      }

      > a:last-of-type {
        width: 8rem;
        border-radius: 0.5rem 1.5rem 0 0;
      }

      > div:last-of-type {
        position: absolute;
        right: 0.5rem;
      }
    }
  `;

  export const Page = styled(Link)<IsCurrentType>`
    ${Fonts.semibold18};
    box-shadow: ${BoxShadows.smooth};
    background-color: ${(props) => (props.isCurrent ? Colors.table : Colors.gray)};
    color: ${(props) => (props.isCurrent ? Colors.white : Colors.gray900)};
    width: 15rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
      ${Fonts.semibold16}
    }
  `;

  /* Board */
  export const BoardBox = styled.div`
    > table {
      width: 100%;
      text-align: center;

      > thead {
        background-color: ${Colors.gray};
        height: 4.5rem;
      }

      > tbody {
        > tr {
          border-bottom: 0.3rem solid ${Colors.line};
        }
      }
    }

    > div:last-of-type {
      margin: 6rem 0;
    }

    @media (max-width: 1200px) {
      > table {
        width: 100%;
        text-align: center;

        > thead {
          background-color: ${Colors.gray};
          height: 4.5rem;
        }

        > tbody {
          > tr {
            border-bottom: 0.3rem solid ${Colors.line};
            text-align: left;
          }
        }
      }
      > div:last-of-type {
        margin: 3rem 0;
      }
    }
  `;

  export const BoardText = styled.th`
    width: 10rem;
    padding: 1.5rem;
    white-space: nowrap;

    @media (max-width: 1200px) {
      &:first-child {
        text-overflow: ellipsis;
        white-space: pre-line;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
      &:last-child {
        display: none;
      }
    }
  `;
}
