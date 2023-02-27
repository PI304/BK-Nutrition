import useChangePage from '../../../hooks/useChangePage';
import { useEffect, useState } from 'react';
import { BoxShadows, Colors, Fonts, SC } from '@/styles';
import { Download, Members, PageButton, Pagination } from '@/components/shared';
import Image from 'next/image';
import styled from 'styled-components';
import { getResearchers } from 'api/researchers';
import University from '../../../../public/assets/universitymember.png';
import Kim from '../../../../public/assets/kimhyunkyung.png';
import Phone from '../../../../public/assets/phone.png';
import Message from '../../../../public/assets/message.png';
import Home from '../../../../public/assets/home2.png';
import { getProfessors } from 'api/professors';
import { getGraduates } from 'api/graduates';

export const MemberPage = () => {
  const [researchers, setResearchers] = useState<ResponseResearchers.Get>();
  const [professors, setProfessors] = useState<ResponseProfessors.Get>();
  const [university, setUniversity] = useState<ResponseGraduates.Get>();

  const getMembers = async () => {
    const researchers = await getResearchers();
    setResearchers(researchers);
  };
  useEffect(() => {
    getMembers();
  }, []);

  const getMember = async () => {
    const professors = await getProfessors();
    setProfessors(professors);
  };
  useEffect(() => {
    getMember();
  }, []);

  const getUniversity = async () => {
    const university = await getGraduates();
    setUniversity(university);
  };
  useEffect(() => {
    getUniversity();
  }, []);
  return (
    <>
      <S.MemberBox>
        <S.Title>참여교수</S.Title>

        {professors?.map((professors, i) => (
          <S.TopMember key={i}>
            <Image src={Kim} alt='kim'></Image>
            <div>
              <p>{professors.position}</p>
              <h2>{professors.name}</h2>
              <div>
                <SC.Contact>
                  <Image src={Message} alt='message'></Image>
                  <div>{professors.email}</div>
                </SC.Contact>
                <SC.Contact>
                  <Image src={Phone} alt='phone'></Image>
                  <div>{professors.phone_number}</div>
                </SC.Contact>
              </div>
              <SC.Home href='https://yonsei-impact.weebly.com/'>
                <Image src={Home} alt='home'></Image>
              </SC.Home>
            </div>
            <div>
              <p>{professors.introduction}</p>
            </div>
          </S.TopMember>
        ))}

        <Members />
        <Members />
        <Members />
        <Members />
        <Members />
        <Members />
        <PageButton />
      </S.MemberBox>
      <SC.Line />

      <S.ResearchBox>
        <S.Title>신진 연구 인력</S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardText>이름</S.BoardText>
              <S.BoardText>직위</S.BoardText>
              <S.BoardText>소속</S.BoardText>
              <S.BoardText>전공</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {researchers?.map((researchers, i) => (
              <tr key={i}>
                <S.BoardText>{researchers.name}</S.BoardText>
                <S.BoardText>{researchers.position}</S.BoardText>
                <S.BoardText>{researchers.affiliation}</S.BoardText>
                <S.BoardText>{researchers.major}</S.BoardText>
              </tr>
            ))}
          </tbody>
        </table>
        <PageButton />
      </S.ResearchBox>

      <S.UniversityBox>
        <S.Title>지원 대학원생</S.Title>
        <table>
          <thead>
            <tr>
              <S.BoardText>연번</S.BoardText>
              <S.BoardText>성명</S.BoardText>
              <S.BoardText>학위과정</S.BoardText>
              <S.BoardText>재학학기수</S.BoardText>
              <S.BoardText>지도교수</S.BoardText>
              <S.BoardText>참여/지원</S.BoardText>
            </tr>
          </thead>
          <tbody>
            {university?.map((university, i) => (
              <tr key={i}>
                <S.BoardText>{university.id}</S.BoardText>
                <S.BoardText>{university.semester}</S.BoardText>
                <S.BoardText>{university.uuid}</S.BoardText>
              </tr>
            ))}
          </tbody>
        </table>
      </S.UniversityBox>
    </>
  );
};

namespace S {
  export const Title = styled.div`
    ${Fonts.bold40};

    &::after {
      content: '';
      display: block;
      width: 40rem;
      margin-top: 2rem;
      border-bottom: 0.3rem solid ${Colors.black};
    }
  `;

  /* 참여 교수 */
  export const MemberBox = styled.div`
    display: grid;
    grid-template-rows: 10rem 40rem 30rem 30rem 30rem 2rem;
    grid-template-columns: 58rem 58rem;
    grid-row-gap: 5rem;
    grid-column-gap: 4rem;

    > div:first-child {
      margin-top: 3.5rem;
    }

    > div:nth-child(3) {
      grid-row: 3 / 4;
    }

    > div:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: -5 / -4;
    }

    > div:nth-child(5) {
      grid-row: 4 / 5;
    }

    > div:nth-child(6) {
      grid-column: 2 / 3;
      grid-row: -4 / -3;
    }

    > div:nth-child(7) {
      grid-row: 5 / 6;
    }

    > div:nth-child(8) {
      grid-row: -3 / -2;
      grid-column: 2 / 3;
    }

    > div:nth-child(9) {
      grid-row: 6 / 7;
      grid-column: -3 / -1;
    }
  `;

  export const TopMember = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 34.353rem 1fr;
    grid-template-rows: 29.714rem 10.286rem;
    box-shadow: ${BoxShadows.smooth};

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0.7rem 4rem 4rem 4rem;
      position: relative;

      > p {
        ${Fonts.regular18};
        margin-bottom: 1rem;
      }

      > h2 {
        ${Fonts.bold32};
        margin-bottom: 3.7rem;
      }

      > div:first-of-type {
        display: flex;
      }
    }

    > div:last-child {
      background-color: ${Colors.gray};
      grid-row: -2 / -1;
      grid-column: -2 / -1;
      padding: 2.5rem 2rem;

      > p {
        ${Fonts.regular18};
        line-height: 2.5rem;
        word-break: break-all;
      }
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
