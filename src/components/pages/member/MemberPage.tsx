import { useEffect, useState } from 'react';
import { Colors, Fonts } from '@/styles';
import { Members } from '@/components/shared';
import styled from 'styled-components';
import { getResearchers } from 'api/researchers';
import { getGraduates } from 'api/graduates';
import Link from 'next/link';
import { FolderS3 } from '@/constants/folderS3';
import { getDownloadLinkFromS3 } from '@/s3';

export const MemberPage = () => {
  const [researchers, setResearchers] = useState<ResponseResearchers.Get>();
  const [university, setUniversity] = useState<ResponseGraduates.Get>();

  const getMembers = async () => {
    const researchers = await getResearchers();
    setResearchers(researchers);
  };
  useEffect(() => {
    getMembers();
  }, []);

  const getUniversity = async () => {
    const university = await getGraduates();
    setUniversity(university);
  };
  useEffect(() => {
    getUniversity();
  }, []);
  return (
    <S.Container>
      <S.MemberBox id='member'>
        <S.Title>
          <div>웰니스 융합인재양성팀</div>
          <div>참여교수</div>
        </S.Title>
        <div>
          <Members />
        </div>
      </S.MemberBox>

      <S.ResearchBox id='research'>
        <S.Title>
          <div>웰니스융합인재 연구팀</div>
          <div>신진 연구 인력</div>
        </S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardTitle>이름</S.BoardTitle>
              <S.BoardTitle>직위</S.BoardTitle>
              <S.BoardTitle>전공</S.BoardTitle>
              <S.BoardTitle>연락처</S.BoardTitle>
            </tr>
          </thead>
          <tbody>
            {researchers?.map((researchers, i) => (
              <tr key={i}>
                <S.ResearchBoardText>{researchers.name}</S.ResearchBoardText>
                <S.ResearchBoardText>{researchers.position}</S.ResearchBoardText>
                <S.ResearchBoardText>{researchers.affiliation}</S.ResearchBoardText>
                <S.ResearchBoardText>{researchers.contact}</S.ResearchBoardText>
              </tr>
            ))}
          </tbody>
        </table>
      </S.ResearchBox>

      <S.UniversityBox id='university'>
        <S.Title>
          <div>BK21 FOUR</div>
          <div>참여 대학원생</div>
        </S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardTitle>학기</S.BoardTitle>
              <S.BoardTitle>명단</S.BoardTitle>
            </tr>
          </thead>
          <tbody>
            {university?.map((university, i) => (
              <tr key={i}>
                <S.UniversityBoardText>{university.semester}</S.UniversityBoardText>

                <S.UniversityBoardText>
                  <Link href={getDownloadLinkFromS3(FolderS3.resources, university.uuid)}>
                    참여대학원생 명단
                  </Link>
                </S.UniversityBoardText>
              </tr>
            ))}
          </tbody>
        </table>
      </S.UniversityBox>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr 1.5fr;
    grid-row-gap: 4.5rem;

    @media (max-width: 1200px) {
      display: grid;
      grid-template-rows: 2fr 0.5fr 1fr;
      grid-row-gap: 3rem;
    }
  `;

  export const Title = styled.div`
    display: flex;
    flex-direction: column;

    &::after {
      content: '';
      display: block;
      width: 40rem;
      margin-top: 1rem;
      border-bottom: 0.3rem solid ${Colors.black};
    }

    > div:first-of-type {
      ${Fonts.bold26}
      margin-bottom: 1rem;
    }

    > div:last-of-type {
      ${Fonts.bold40}
    }

    @media (max-width: 1200px) {
      margin-left: 2rem;
      &::after {
        content: '';
        display: block;
        width: 20rem;
        margin-top: 1rem;
        border-bottom: 0.3rem solid ${Colors.black};
      }

      > div:first-of-type {
        ${Fonts.bold16}
        margin-bottom: 1rem;
      }

      > div:last-of-type {
        ${Fonts.bold20}
      }
    }
  `;

  /* 참여 교수 */
  export const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;

    > div:nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2.7rem;
      row-gap: 9rem;
    }

    @media (max-width: 1200px) {
      width: 100vw;

      > div:nth-child(2) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 1.5rem;
        margin: 0 auto;
      }
    }
  `;

  /* 신진 연구 인력 */
  export const ResearchBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }

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

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      > table {
        width: 36rem;
        text-align: center;
        margin: 0 auto;

        > thead {
          background-color: ${Colors.gray};
          height: 3rem;
        }

        > tbody {
          > tr {
            border-bottom: 0.3rem solid ${Colors.line};
          }
        }
      }
    }
  `;

  export const BoardTitle = styled.th`
    width: 10rem;
    padding: 1.5rem;
    white-space: nowrap;

    @media (max-width: 1200px) {
      ${Fonts.bold14}
    }
  `;

  export const ResearchBoardText = styled.th`
    width: 10rem;
    white-space: nowrap;
    padding: 1.5rem;

    @media (max-width: 1200px) {
      ${Fonts.regular12}
      padding: 0.5rem 0;
      white-space: unset;
      word-break: keep-all;
      vertical-align: middle;
    }
  `;

  /* 지원 대학원생 */
  export const UniversityBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      > table {
        width: 36rem;
        text-align: center;
        margin: 0 auto;

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
    }
  `;

  export const UniversityBoardText = styled.th`
    width: 10rem;
    padding: 1.5rem;
    white-space: nowrap;

    @media (max-width: 1200px) {
      ${Fonts.regular12}
      white-space: unset;
    }
  `;
}
