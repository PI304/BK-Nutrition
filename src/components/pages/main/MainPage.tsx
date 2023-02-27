import styled from 'styled-components';
import Carousel from '@/components/shared/Carousel';
import { BoxShadows, Colors, Fonts } from '@/styles';
import { MainContact } from '@/components/shared';

export const MainPage = () => {
  return (
    <>
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

      <Carousel />

      <S.ContactLayout>
        <MainContact page='NOTICE' title='공지사항입니다.' />
        <MainContact page='BUSINESS' title='사업성과입니다.' />
      </S.ContactLayout>
    </>
  );
};

namespace S {
  export const MainImg = styled.div`
    background: url(/assets/background2.png) no-repeat;
    position: relative;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
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
  `;

  export const ContactLayout = styled.div`
    display: flex;
    margin: 0 auto;
    width: 130rem;
    gap: 5rem;
  `;
}
