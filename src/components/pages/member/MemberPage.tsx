import useChangePage from '../../../hooks/useChangePage';
import { useState } from 'react';
import { BoxShadows, Colors, Fonts, SC } from '@/styles';
import { Download, Members, PageButton, Pagination } from '@/components/shared';
import Image from 'next/image';
import styled from 'styled-components';
import Member from '../../../../public/assets/newmember.png';
import University from '../../../../public/assets/universitymember.png';
import Kim from '../../../../public/assets/kimhyunkyung.png';
import Phone from '../../../../public/assets/phone.png';
import Message from '../../../../public/assets/message.png';
import Home from '../../../../public/assets/home2.png';

export const MemberPage = () => {
  return (
    <>
      <S.MemberBox>
        <S.Title>참여교수</S.Title>
        <S.TopMember>
          <Image src={Kim} alt='kim'></Image>
          <div>
            <p>연구 책임자</p>
            <h2>김현경 교수</h2>
            <div>
              <SC.Contact>
                <Image src={Message} alt='message'></Image>
                <div>1234567@yonsei.ac.kr</div>
              </SC.Contact>
              <SC.Contact>
                <Image src={Phone} alt='phone'></Image>
                <div>010-0000-0000</div>
              </SC.Contact>
            </div>
            <SC.Home href='https://yonsei-impact.weebly.com/'>
              <Image src={Home} alt='home'></Image>
            </SC.Home>
          </div>
          <div>
            <p>연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수</p>
            <p>청소년, 바이오마커 수집, 양적 연구 설계 전문성</p>
          </div>
        </S.TopMember>
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
        <S.Title>신진 연구 이력</S.Title>
        <Image src={Member} alt='member'></Image>
        <PageButton />
      </S.ResearchBox>

      <S.UniversityBox>
        <S.Title>지원 대학원생</S.Title>
        <Image src={University} alt='member2'></Image>
        <div>
          <Download year='2020년' semester='2학기' />
          <Download year='2021년' semester='1학기' />
          <Download year='2021년' semester='2학기' />
          <Download year='2022년' semester='1학기' />
          <Download year='2022년' semester='2학기' />
        </div>
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
        ${Fonts.medium18};
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
        ${Fonts.medium18};
        line-height: 2.5rem;
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
  `;

  /* 지원 대학원생 */
  export const UniversityBox = styled.div`
    display: flex;
    flex-direction: column;

    > div:last-of-type {
      display: flex;
      margin-top: 3rem;
      gap: 1.2rem;
    }
  `;
}
