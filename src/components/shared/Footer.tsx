import { Colors, Fonts } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import Footerlogo from '../../../public/assets/footer_logo.png';

export const Footer = () => {
  return (
    <S.FooterLayout>
      <div>
        <div>
          <div>
            <Image src={Footerlogo} alt='footerlogo1' />
          </div>
          <div>
            <p>연세대학교</p>
            <p>BK21 FOUR 웰니스 융합 인재 양성팀</p>
          </div>
        </div>

        <S.Description>
          <div>
            <p>서울시 서대문구 연세로 50 연세대학교 식품영양학과 웰니스 융합인재 양성팀</p>
            <p>
              Cpyright(c) 2013 YONSEI UNIV FOUR PROJECT FOR WELLNESS INTEGRTED TALENTS.
              <br /> ALL RIGHTS RESERVED.
            </p>
          </div>
        </S.Description>
      </div>
    </S.FooterLayout>
  );
};

namespace S {
  export const FooterLayout = styled.footer`
    display: flex;
    justify-content: center;
    height: 17rem;
    background-color: ${Colors.footer};

    > div {
      width: 120rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10rem;

      > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        > div:last-of-type p {
          ${Fonts.bold16};
          color: ${Colors.white};
          line-height: 2.2rem;
        }
      }

      > div:nth-child(2) {
        > p {
          ${Fonts.bold16};
        }
      }
    }
  `;

  export const Description = styled.div`
    > div p:first-of-type {
      ${Fonts.regular14};
      color: ${Colors.white};
      line-height: 2.5rem;
    }

    > div p:last-of-type {
      ${Fonts.regular10};
      color: ${Colors.gray800};
      line-height: 1.5rem;
    }
  `;

  export const ContactLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6rem;
    gap: 1rem;

    > div:last-child {
      padding-left: 0.5rem;
    }
  `;
}
