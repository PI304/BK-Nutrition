import styled from 'styled-components';
import { Paths } from '@/constants';
import Link from 'next/link';
import { Colors, Fonts } from '@/styles';

export const SideBar = () => {
  return (
    <>
      <S.Container>
        <div>교육팀 소개</div>
        <div>
          <Link href={Paths.intro + '#greeting'}>인사말</Link>
          <Link href={Paths.intro + '#goal'}>목표 및 비전</Link>
          <Link href={Paths.intro + '#group'}>조직 현황</Link>
          <Link href={Paths.intro + '#map'}>찾아오시는 길</Link>
        </div>
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    width: 10rem;
    height: 24rem;
    position: sticky;
    top: 10rem;

    > div:first-of-type {
      ${Fonts.bold16}
      width: 100%;
      height: 3.2rem;
      border-bottom: 0.1rem solid ${Colors.bluec};
    }

    > div:last-of-type {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      gap: 2rem;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  `;
}
