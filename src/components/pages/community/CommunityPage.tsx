import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from 'constants/paths';
import { Seo } from 'constants/seo';
import { Colors, Fonts, BoxShadows } from '@/styles';
import { PageButton, Select } from '@/components/shared';
import { useState } from 'react';

export const CommunityPage = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const onClick = () => {
    setIsClick(true);
  };
  return (
    <>
      <S.PageBox>
        <S.Page href={Paths.community} title={Seo.Title.community} onClick={onClick}>
          공지사항
        </S.Page>
        <S.Page href={Paths.resource} title={Seo.Title.resource}>
          자료실
        </S.Page>
        <Select />
      </S.PageBox>

      <S.BoardBox>
        <table>
          <thead>
            <tr>
              <S.BoardText>번호</S.BoardText>
              <S.BoardText>제목</S.BoardText>
              <S.BoardText>작성자</S.BoardText>
              <S.BoardText>날짜</S.BoardText>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.BoardText>1</S.BoardText>
              <S.BoardText>
                <Link href='/main'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labo
                </Link>
              </S.BoardText>
              <S.BoardText>관리자</S.BoardText>
              <S.BoardText>2023-02-22</S.BoardText>
            </tr>
          </tbody>
        </table>
        <PageButton />
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

    > a:last-of-type {
      border-radius: 0.5rem 1.5rem 0 0;
    }

    > div:last-of-type {
      position: absolute;
      right: 0;
    }
  `;

  export const Page = styled(Link)`
    ${Fonts.bold20};
    box-shadow: ${BoxShadows.smooth};
    background-color: ${(props) => (props.onClick ? Colors.table : Colors.gray)};
    color: ${(props) => (props.onClick ? Colors.white : Colors.black)};
    width: 15rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
  `;

  export const BoardText = styled.th`
    width: 10rem;
    padding: 1.5rem;
    white-space: nowrap;
  `;
}
