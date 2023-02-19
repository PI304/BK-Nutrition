import { Colors, Fonts, SC } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import Member from '../../../../public/assets/newmember.png';
import University from '../../../../public/assets/universitymember.png';

export const MemberPage = () => {
  return (
    <>
      <S.MemberBox>
        <S.Title>참여교수</S.Title>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.MemberBox>
      <SC.Line />

      <S.ResearchBox>
        <S.Title>신진 연구 이력</S.Title>
        <Image src={Member} alt='member'></Image>
        <div>page</div>
      </S.ResearchBox>

      <S.UniversityBox>
        <S.Title>지원 대학원생</S.Title>
        <Image src={University} alt='member2'></Image>
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

    > div:nth-child(2) {
      background-color: orange;
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }

    > div:nth-child(3) {
      background-color: yellow;
      grid-row: 3 / 4;
    }

    > div:nth-child(4) {
      background-color: green;
      grid-column: 2 / 3;
      grid-row: -5 / -4;
    }

    > div:nth-child(5) {
      background-color: blue;
      grid-row: 4 / 5;
    }

    > div:nth-child(6) {
      background-color: gray;
      grid-column: 2 / 3;
      grid-row: -4 / -3;
    }

    > div:nth-child(7) {
      background-color: pink;
      grid-row: 5 / 6;
    }

    > div:nth-child(8) {
      background-color: purple;
      grid-row: -3 / -2;
      grid-column: 2 / 3;
    }

    > div:nth-child(9) {
      background-color: black;
      grid-row: 6 / 7;
      grid-column: -3 / -1;
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
  `;
}
