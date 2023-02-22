import { Colors, Fonts } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import Footerlogo1 from '../../../public/assets/footerlogo1.png';
import Footerlogo2 from '../../../public/assets/footerlogo2.png';
import Arrow from '../../../public/assets/arrow.png';

export const Footer = () => {
  return (
    <S.FooterLayout>
      <div>
        <div>
          <Image src={Footerlogo1} alt='footerlogo1' />
          <Image src={Footerlogo2} alt='footerlogo2' />
        </div>
        <S.Description>
          <div>
            주소: 서울시 서대문구 연세로 50 연세대학교 식품영양학과 웰니스 융합인재 양성팀
            <br></br>
            Cpyright(c) 2013 YONSEI UNIV FOUR PROJECT FOR WELLNESS INTEGRTED TALENTS. All right
            reservesd
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
    height: 18rem;
    background-color: ${Colors.footer};

    > div {
      position: relative;
      width: 120rem;
      display: flex;
      justify-content: center;
      align-items: center;

      > div:first-child {
        position: absolute;
        left: 0;
        display: flex;
        flex-direction: column;
      }
    }
  `;

  export const Description = styled.div`
    ${Fonts.medium16};
    color: ${Colors.white};
    position: absolute;
    right: 0;

    > div {
      margin-top: 1.5rem;
      line-height: 2rem;
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

  export const Contact = styled.div`
    ${Fonts.medium12};
    color: ${Colors.white};
    background-color: ${Colors.contact};
    width: 12rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      cursor: pointer;
      margin-left: 1rem;
    }
  `;
}
