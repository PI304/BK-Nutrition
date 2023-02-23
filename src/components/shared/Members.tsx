import styled from 'styled-components';
import { BoxShadows, Colors, Fonts, SC } from '@/styles';
import Lee from '../../../public/assets/changmin.png';
import Phone from '../../../public/assets/phone.png';
import Message from '../../../public/assets/message.png';
import Home from '../../../public/assets/home2.png';
import Image from 'next/image';

export const Members = () => {
  return (
    <S.Member>
      <Image src={Lee} alt='changmin'></Image>
      <div>
        <p>공동연구원</p>
        <h2>XXXX 교수</h2>
        <SC.Contact>
          <Image src={Phone} alt='phone'></Image>
          <div>010-0000-0000</div>
        </SC.Contact>
        <SC.Contact>
          <Image src={Message} alt='message'></Image>
          <div>1234567@yonsei.ac.kr</div>
        </SC.Contact>
        <SC.Home href='https://yonsei-impact.weebly.com/'>
          <Image src={Home} alt='home'></Image>
        </SC.Home>
      </div>
      <div>
        <p>연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수</p>
        <p>청소년, 바이오마커 수집, 양적 연구 설계 전문성</p>
      </div>
    </S.Member>
  );
};

namespace S {
  export const Member = styled.div`
    display: grid;
    grid-template-columns: 20rem 38rem;
    grid-template-rows: 23rem 7rem;
    position: relative;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem 4rem 0;
      position: relative;
      gap: 1.5rem;

      > p {
        ${Fonts.regular18};
      }

      > h2 {
        ${Fonts.bold32};
        margin-bottom: 1rem;
      }
    }

    > div:last-of-type {
      grid-column: -3 / -1;
      ${Fonts.regular16};
      background-color: ${Colors.gray};
      box-shadow: ${BoxShadows.smooth};
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.5rem 2rem;

      > p {
        ${Fonts.regular16}
      }
    }
  `;
}
