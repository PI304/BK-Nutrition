import { useEffect, useState } from 'react';
import { Colors, Fonts, SC } from '@/styles';
import { Members, Pagination } from '@/components/shared';
import styled from 'styled-components';
import { getResearchers } from 'api/researchers';
import { getGraduates } from 'api/graduates';
import Link from 'next/link';
import { FolderS3 } from '@/constants/folderS3';
import { getDownloadLinkFromS3 } from '@/s3';

export const MemberPage = () => {
  const [researchers, setResearchers] = useState<ResponseResearchers.Get>();
  const [university, setUniversity] = useState<ResponseGraduates.Get>();
  const [page, setPage] = useState(1);
  const onChangePage = (page: number) => setPage(page);

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
        <Pagination currentPage={page} size={10} onChangePage={onChangePage} totalPosts={10} />
      </S.MemberBox>

      <S.ResearchBox id='research'>
        <S.Title>
          <div>웰니스융합인재 연구팀</div>
          <div>신진 연구 인력</div>
        </S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardText>이름</S.BoardText>
              <S.BoardText>직위</S.BoardText>
              <S.BoardText>전공</S.BoardText>
              <S.BoardText>연락처</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {researchers?.map((researchers, i) => (
              <tr key={i}>
                <S.BoardText>{researchers.name}</S.BoardText>
                <S.BoardText>{researchers.position}</S.BoardText>
                <S.BoardText>{researchers.affiliation}</S.BoardText>
                <S.BoardText>{researchers.contact}</S.BoardText>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={page} size={10} onChangePage={onChangePage} totalPosts={10} />
      </S.ResearchBox>

      <S.UniversityBox id='university'>
        <S.Title>
          <div>BK21 FOUR</div>
          <div>참여 대학원생</div>
        </S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardText>학기</S.BoardText>
              <S.BoardText>명단</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {university?.map((university, i) => (
              <tr key={i}>
                <S.BoardText>{university.semester}</S.BoardText>

                <S.BoardText>
                  <Link href={getDownloadLinkFromS3(FolderS3.resources, university.uuid)}>
                    참여대학원생 명단 다운로드
                  </Link>
                </S.BoardText>
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
    grid-template-rows: 2.5fr 1fr 1.5fr;
    grid-row-gap: 5rem;
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
  `;

  /* 참여 교수 */
  export const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 5rem;

    > div:nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2.7rem;
      row-gap: 9rem;
    }
  `;

  /* 신진 연구 인력 */
  export const ResearchBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

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
  `;

  export const BoardText = styled.th`
    width: 10rem;
    padding: 1.5rem;
    white-space: nowrap;
  `;

  /* 지원 대학원생 */
  export const UniversityBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

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
  `;
}
