import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';
import { Colors, Fonts, BoxShadows } from '@/styles';
import { PageButton, Select } from '@/components/shared';
import { useState, useEffect } from 'react';
import { getPosts } from 'api/posts';
import { PostsType } from '@/constants';
import parseSubmitDate from '@/utils/parseSubmitDate';

export const AchievementPage = () => {
  const [achievement, setAchievement] = useState<ResponsePosts.Get>();

  const getAchievement = async () => {
    const achievement = await getPosts(PostsType.achievement);
    setAchievement(achievement);
  };

  useEffect(() => {
    getAchievement();
  }, []);

  return (
    <>
      <S.PageBox>
        <S.Page href={Paths.achievement} title={Seo.Title.achievement} isCurrent>
          연구업적
        </S.Page>
        <S.Page href={Paths.international} title={Seo.Title.international}>
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
              <S.BoardText>번호</S.BoardText>
              <S.BoardText>제목</S.BoardText>
              <S.BoardText>작성자</S.BoardText>
              <S.BoardText>날짜</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {achievement?.map((achievement, i) => (
              <tr key={i}>
                <S.BoardText>{achievement.id}</S.BoardText>
                <S.BoardText>
                  <Link href={Paths.achievementView}>{achievement.title}</Link>
                </S.BoardText>
                <S.BoardText>{achievement.author_id}</S.BoardText>
                <S.BoardText>{parseSubmitDate(achievement.created_at)}</S.BoardText>
              </tr>
            ))}
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
