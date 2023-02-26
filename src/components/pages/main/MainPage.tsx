import styled from 'styled-components';
import Carousel from '@/components/shared/Carousel';
import { BoxShadows, Colors, Fonts } from '@/styles';
import { MainContact } from '@/components/shared';

export const MainPage = () => {
  return (
    <>
      <S.MainImg>
        <div>
          <p>연세대학교 BK21 FOUR 웰니스 융합 인재 양성팀</p>
          <p>
            BK21 FOUR Project for
            <br />
            Wellness Integrated
            <br />
            Talents
          </p>
        </div>
      </S.MainImg>

      <Carousel />

      <S.ContactLayout>
        <MainContact />
        <MainContact />
      </S.ContactLayout>
    </>
  );
};

namespace S {
  export const MainImg = styled.div`
    background: url(/assets/main_img.png) no-repeat;
    position: relative;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      padding: 7.6rem 10.2rem;
      background: linear-gradient(${BoxShadows.main});

      > p:first-of-type {
        ${Fonts.medium18};
        color: ${Colors.white};
        text-align: right;
        line-height: 4rem;
      }

      > p:last-of-type {
        ${Fonts.bold48};
        color: ${Colors.white};
        text-align: right;
        line-height: 5.5rem;
      }
    }
  `;

  export const ContactLayout = styled.div`
    display: flex;
    margin: 0 auto;
    width: 130rem;
    gap: 5rem;
  `;
}
