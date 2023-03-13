import { Colors, Fonts } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import Footerlogo from '../../../public/assets/footer_logo.png';

export const Footer = () => {
  return (
    <S.FooterLayout>
      <div>
        <div>
          <Image src={Footerlogo} alt='footerlogo1' />
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
    min-height: 20rem;
    background-color: ${Colors.footer};

    > div {
      width: 120rem;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      > div:first-child img {
        width: 100%;
        object-fit: contain;
      }
    }
  `;

  export const Description = styled.div`
    > div p:first-of-type {
      ${Fonts.regular14};
      color: ${Colors.white};
      line-height: 2.5rem;
      word-break: keep-all;
    }

    > div p:last-of-type {
      ${Fonts.regular10};
      color: ${Colors.gray800};
      text-align: center;
      line-height: 1.5rem;
      word-break: keep-all;
    }

    @media (max-width: 1350px) {
      text-align: center;
      line-height: 90%;
    }
  `;
}
