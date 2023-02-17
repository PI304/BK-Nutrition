import { Colors, Fonts } from '@/styles';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Mainlogo from '../../../public/assets/mainlogo.png';
import { Paths } from 'constants/paths';
import { Seo } from 'constants/seo';

export const Header = () => {
  return (
    <S.HeaderLayout>
      <S.LogoLink href='/main'>
        <Image src={Mainlogo} alt='mainlogo' />
      </S.LogoLink>
      <S.MenuWrapper>
        <S.MenuBox>
          <S.MenuLink href={Paths.intro} title={Seo.Title.intro}>
            교육팀소개
          </S.MenuLink>
        </S.MenuBox>
        <S.MenuBox>
          <S.MenuLink href={Paths.member} title={Seo.Title.member}>
            연구팀구성
          </S.MenuLink>
        </S.MenuBox>
        <S.MenuBox>
          <S.MenuLink href={Paths.business} title={Seo.Title.business}>
            사업성과
          </S.MenuLink>
        </S.MenuBox>
        <S.MenuBox>
          <S.MenuLink href={Paths.community} title={Seo.Title.community}>
            커뮤니티
          </S.MenuLink>
        </S.MenuBox>
      </S.MenuWrapper>
    </S.HeaderLayout>
  );
};

namespace S {
  export const HeaderLayout = styled.header`
    height: 9.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${Colors.header};
  `;

  export const LogoLink = styled(Link)`
    display: flex;
    align-self: center;
    width: 34.4rem;
  `;

  export const MenuWrapper = styled.div`
    display: flex;
    width: 50rem;
  `;

  export const MenuBox = styled.div`
    cursor: pointer;
    position: relative;
  `;

  export const MenuLink = styled(Link)`
    ${Fonts.bold24};
    color: ${Colors.white};
    display: flex;
    padding: 0 1.5rem;
  `;
}
