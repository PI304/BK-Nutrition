import styled from 'styled-components';
import Carousel from '@/components/shared/Carousel';
import { BoxShadows, Colors, Fonts } from '@/styles';
import { MainBoard } from '@/components/shared';
import Link from 'next/link';
import { Paths } from '@/constants';

export const MainPage = () => {
  return (
    <S.Container>
      <S.MainImg>
        <div>
          <p>
            BK21 FOUR Project for
            <br />
            Wellness Integrated Talents
          </p>
          <p>연세대학교 BK21 FOUR 웰니스 융합 인재 양성팀</p>
          <S.LinkBox>
            <div>
              <Link href={Paths.intro}>교육팀 소개</Link>
            </div>
            <div>
              <Link href={Paths.resource + '/' + 24}>사업 신청서</Link>
            </div>
          </S.LinkBox>
        </div>
      </S.MainImg>

      <S.ContactLayout>
        <MainBoard page='NOTICE' title='공지사항입니다.' />
        <MainBoard page='BUSINESS' title='사업성과입니다.' />
      </S.ContactLayout>

      <Carousel />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-rows: 46rem 2fr 1.2fr;
    grid-row-gap: 5rem;

    @media (max-width: 1200px) {
      grid-template-rows: 20rem 2fr 1fr;
      justify-content: center;
    }
  `;

  export const MainImg = styled.div`
    width: 100%;
    background: url(/assets/main_background.png) no-repeat center center;
    background-size: cover;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      padding: 7.6rem 19.2rem;
      background: linear-gradient(${BoxShadows.main});

      > p:first-of-type {
        ${Fonts.bold48};
        color: ${Colors.white};
        text-align: right;
        line-height: 5.5rem;
      }

      > p:last-of-type {
        ${Fonts.medium18};
        color: ${Colors.white};
        text-align: right;
        line-height: 4rem;
        margin-bottom: 1.5rem;
      }
    }

    @media (max-width: 1200px) {
      width: 100vw;
      > div {
        padding: 5rem 2rem;
        > p:first-of-type {
          ${Fonts.bold20}
          line-height: 2.5rem;
        }

        > p:last-of-type {
          ${Fonts.bold12}
          line-height: 2.5rem;
        }
      }
    }
  `;

  export const LinkBox = styled.div`
    display: flex;
    gap: 2rem;

    > div {
      ${Fonts.medium14}

      width: 12rem;
      height: 3rem;
      background-color: ${Colors.blue700};
      border-radius: 1rem;
      color: ${Colors.white};

      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 1200px) {
      display: none;
    }
  `;

  export const ContactLayout = styled.div`
    display: flex;
    margin: 0 auto;
    width: 120rem;
    gap: 5rem;

    @media (max-width: 1200px) {
      width: 100vw;
      display: flex;
      flex-direction: column;
      gap: revert;
    }
  `;
}
