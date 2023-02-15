import { Colors, Fonts } from '@/styles';
import Image from 'next/image';
import styled from 'styled-components';
import Footerlogo from '../../../public/assets/footerlogo.png';
import Arrow from '../../../public/assets/arrow.png';

export const Footer = () => {
  return (
    <S.FooterLayout>
      <Image src={Footerlogo} alt='footerlogo' />
      <S.Description>
        개인정보처리방침 | 이메일무단수집거부 | 고객서비스현장 | 권익위부패공익신고 |
        부정비리신고센터
        <div>
          주소: 서울시 서대문구 연세로 50 연세대학교 식품영양학과 웰니스 융합인재 양성팀
          <br></br>
          Cpyright(c) 2013 YONSEI UNIV FOUR PROJECT FOR WELLNESS INTEGRTED TALENTS. All right
          reservesd
        </div>
      </S.Description>
      <S.ContactLayout>
        <S.Contact>
          부속홈페이지
          <Image src={Arrow} alt='arrow'></Image>
        </S.Contact>
        <S.Contact>
          관련기관 &nbsp;
          <Image src={Arrow} alt='arrow'></Image>
        </S.Contact>
      </S.ContactLayout>
    </S.FooterLayout>
  );
};

namespace S {
  export const FooterLayout = styled.footer`
    margin: auto;
    height: 18rem;
    background-color: ${Colors.yonsei};
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      margin-right: 6rem;
    }
  `;

  export const Description = styled.div`
    ${Fonts.medium16};
    color: ${Colors.white};

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
