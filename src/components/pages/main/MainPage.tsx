import styled from 'styled-components';
import Carousel from '@/components/shared/Carousel';
import { BoxShadows, Colors, Fonts } from '@/styles';
import { MainContact } from '@/components/shared';

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
        </div>
      </S.MainImg>

      <S.ContactLayout>
        <MainContact page='NOTICE' title='공지사항입니다.' />
        <MainContact page='BUSINESS' title='사업성과입니다.' />
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

    @media (max-width: 1350px) {
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
      width: 100%;
      height: 100%;
      padding: 7.6rem 10.2rem;
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
      }
    }

    @media (max-width: 1350px) {
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

  export const ContactLayout = styled.div`
    display: flex;
    margin: 0 auto;
    width: 130rem;
    gap: 5rem;

    @media (max-width: 1350px) {
      width: 100vw;
      display: flex;
      flex-direction: column;
    }
  `;
}
