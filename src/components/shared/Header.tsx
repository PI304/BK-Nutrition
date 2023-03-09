import { BoxShadows, Colors, Fonts, MainLogo } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';

export const Header = () => {
  return (
    <>
      <S.HeaderLayout>
        <div>
          <S.LogoLink href='/main'>{MainLogo}</S.LogoLink>
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
              <S.MenuLink href={Paths.achievement} title={Seo.Title.achievement}>
                사업성과
              </S.MenuLink>
            </S.MenuBox>
            <S.MenuBox>
              <S.MenuLink href={Paths.notice} title={Seo.Title.notice}>
                커뮤니티
              </S.MenuLink>
            </S.MenuBox>
          </S.MenuWrapper>
        </div>
      </S.HeaderLayout>
      <S.DropDown>
        <div>인사말</div>
      </S.DropDown>
    </>
  );
};

namespace S {
  export const HeaderLayout = styled.header`
    position: relative;
    height: 8rem;
    display: flex;
    justify-content: space-around;
    background-color: ${Colors.white};

    > div:first-of-type {
      position: relative;
      width: 120rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  `;

  export const LogoLink = styled(Link)`
    display: flex;
    align-self: center;
    position: absolute;
    left: 0;
    width: 21.306rem;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;

  export const MenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    width: 65rem;
  `;

  export const MenuBox = styled.div`
    cursor: pointer;
    position: relative;
    height: 8rem;
    width: 100%;
  `;

  export const MenuLink = styled(Link)`
    ${Fonts.semibold20};
    width: 15rem;
    height: 100%;
    color: ${Colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export const DropDown = styled.div`
    background-color: rgba(0, 0, 0, 0.55);
    height: 13rem;
    width: 100%;
    position: relative;
    top: 0;
  `;
}
