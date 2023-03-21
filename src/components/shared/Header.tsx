import { Colors, Fonts, HeaderHamburger, MainLogo } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { Seo } from '@/constants/seo';
import { useState } from 'react';


export const Header = ({ onClickTrue }: HeaderProps) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <S.HeaderLayout>
        <div>
          <S.LogoLink href='/main'>{MainLogo}</S.LogoLink>
          <S.MenuWrapper onMouseEnter={onMouseEnter}>
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
          <div onClick={onClickTrue}>{HeaderHamburger}</div>
        </div>
        <S.DropDown isHover={isHover} onMouseLeave={onMouseLeave}>
          <div>
            <div>
              <div>
                <Link href={Paths.intro + '#greeting'}>인사말</Link>
                <Link href={Paths.intro + '#goal'}>목표 및 비전</Link>
                <Link href={Paths.intro + '#group'}>조직 현황</Link>
                <Link href={Paths.intro + '#map'}>찾아오시는길</Link>
              </div>
              <div>
                <Link href={Paths.member + '#member'}>참여교수</Link>
                <Link href={Paths.member + '#research'}>신진 연구인력</Link>
                <Link href={Paths.member + '#university'}>참여 대학원생</Link>
              </div>
              <div>
                <Link href={Paths.achievement}>연구 업적</Link>
                <Link href={Paths.international}>국제 협력</Link>
                <Link href={Paths.industrial}>산학 협력</Link>
              </div>
              <div>
                <Link href={Paths.notice}>공지사항</Link>
                <Link href={Paths.resource}>자료실</Link>
              </div>
            </div>
          </div>
        </S.DropDown>
      </S.HeaderLayout>
    </>
  );
};

namespace S {
  export const HeaderLayout = styled.header`
    position: relative;
    z-index: 1;
    height: 8rem;
    display: flex;
    justify-content: space-around;
    background-color: ${Colors.white};

    > div:first-of-type {
      width: 120rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 1350px) {
      > div:first-of-type {
        justify-content: center;
        margin-right: 1rem;
        > a {
          position: static;
        }

        > div:nth-child(2) {
          display: none;
        }

        > div:last-of-type {
          display: block;
          cursor: pointer;
          position: absolute;
          right: 2rem;
        }
      }
    }
  `;

  export const LogoLink = styled(Link)`
    display: flex;
    align-self: center;
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

  export const DropDown = styled.div<isHoverType>`
    display: ${(props) => (props.isHover ? 'flex' : 'none')};
    background-color: rgba(0, 0, 0, 0.55);
    height: 13rem;
    position: absolute;
    top: 8rem;
    width: 100vw;
    justify-content: center;
    align-items: baseline;

    > div:first-of-type {
      width: 120rem;
      height: 11rem;
      margin: 2rem 1rem 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > div {
        width: 65rem;
        display: flex;
        justify-content: flex-end;
        align-items: baseline;

        > div {
          width: 100%;
          height: 9.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.3rem;
          border-right: 0.1rem solid ${Colors.white};

          a {
            ${Fonts.medium14}
            color: ${Colors.white};

            &:hover {
              color: ${Colors.gray500};
            }
          }
        }
      }
    }

    @media (max-width: 1350px) {
      display: none;
    }
  `;
}
