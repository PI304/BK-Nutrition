import { BoxShadows, Colors, Fonts } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import Image from 'next/image';
import MobileMainLogo from '../../../public/assets/mobile_main_logo.png';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const MobileSideBar = ({ onClickFalse }: MobileSideBarProps) => {
  // const router = useRouter();
  // // useEffect(() => {
  // //   onClickFalse();
  // //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // // }, [router.pathname]);
  return (
    <S.Container onClick={onClickFalse}>
      <S.MobileSideBar>
        <div>
          <Image src={MobileMainLogo} alt='mainlogo'></Image>
        </div>
        <div>
          <S.MobileTitle>
            교육팀 소개
            <S.MobileLink>
              <Link href={Paths.intro + '#greeting'}>인사말</Link>
              <Link href={Paths.intro + '#goal'}>목표 및 비전</Link>
              <Link href={Paths.intro + '#group'}>조직 현황</Link>
              <Link href={Paths.intro + '#map'}>찾아오시는 길</Link>
            </S.MobileLink>
          </S.MobileTitle>
          <S.MobileTitle>
            연구팀 구성
            <S.MobileLink>
              <Link href={Paths.member + '#member'}>참여 교수</Link>
              <Link href={Paths.member + '#research'}>신진 연구 인력</Link>
              <Link href={Paths.member + '#university'}>참여 대학원생</Link>
            </S.MobileLink>
          </S.MobileTitle>
          <S.MobileTitle>
            사업 성과
            <S.MobileLink>
              <Link href={Paths.achievement}>연구 업적</Link>
              <Link href={Paths.international}> 국제 협력</Link>
              <Link href={Paths.industrial}>산학 협력</Link>
            </S.MobileLink>
          </S.MobileTitle>
          <S.MobileTitle>
            커뮤니티
            <S.MobileLink>
              <Link href={Paths.notice}>공지사항</Link>
              <Link href={Paths.resource}>자료실</Link>
            </S.MobileLink>
          </S.MobileTitle>
        </div>
      </S.MobileSideBar>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: ${BoxShadows.mobileSideBar};
    position: fixed;
    z-index: 100;

    @media (max-width: 1350px) {
      display: block;
    }
  `;

  export const MobileSideBar = styled.div`
    width: 75vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 200;
    right: 0;
    top: 0;
    background-color: ${Colors.white};

    > div:first-of-type {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      > img {
        height: 100%;
        object-fit: contain;
      }
    }

    > div:last-of-type {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 2rem;
    }
  `;

  export const MobileTitle = styled.div`
    ${Fonts.bold20}
    color: ${Colors.blue700};
  `;

  export const MobileLink = styled.div`
    ${Fonts.medium16}
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 0 3rem;

    > a {
      line-height: 2.5rem;
    }
  `;
}
