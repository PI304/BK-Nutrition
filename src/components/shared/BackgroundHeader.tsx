import { BoxShadows, Colors, Fonts, HomeIcon } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NameTitles, SubTitles, Titles } from '@/constants/titles';

export const BackgroundHeader = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [nameTitle, setNameTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    const titlePattern =
      /^\/(intro|member|community|business)\/(resource|international|industrial)?\/?[0-9]*/;
    const namePattern =
      /^\/(intro|member|community|business)\/(resource|international|industrial)?\/?[0-9]*/;
    const subTitlePattern =
      /^\/(intro|member|community|business)\/(resource|international|industrial)?\/?[0-9]*/;
    const path = router.pathname; //path 안에 주소를 넣어줌
    if (titlePattern.test(path)) {
      const key = path as keyof typeof Titles;
      setTitle(Titles[key]);
    }
    if (namePattern.test(path)) {
      const key = path as keyof typeof NameTitles;
      setNameTitle(NameTitles[key]);
    }

    if (subTitlePattern.test(path)) {
      const key = path as keyof typeof SubTitles;
      setSubTitle(SubTitles[key]);
    } else setSubTitle('');
  }, [router.pathname]); // 주소가 바뀔 때 마다 실행됨

  return (
    <>
      <S.Background>
        <S.TitleLayout>
          <S.Title>
            <div>{title}</div>
          </S.Title>
          <S.Tab>
            <Link href={Paths.main}>{HomeIcon}</Link>
            <div>{nameTitle}</div>
            {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
          </S.Tab>
        </S.TitleLayout>
      </S.Background>
    </>
  );
};

namespace S {
  export const Background = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    background-image: url(/assets/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;

    @media (max-width: 1200px) {
      height: 12rem;
    }
  `;

  export const TitleLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    width: 120rem;

    @media (max-width: 1200px) {
      justify-content: center;
    }
  `;

  export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 7rem;

    > div:first-of-type {
      ${Fonts.bold40};
      color: ${Colors.white};
    }

    @media (max-width: 1200px) {
      justify-content: center;

      > div:first-of-type {
        ${Fonts.bold26}
      }
    }
  `;

  export const Tab = styled.div`
    background-color: ${Colors.shadow};
    color: ${Colors.white};
    display: flex;
    height: 4rem;

    > div:first-of-type {
      display: flex;
      align-items: center;
      border: solid white;
      border-width: 0 0.5px 0 0.5px;
      padding: 1rem 1.5rem;
      color: ${Colors.white};
    }

    @media (max-width: 1200px) {
      display: none;
    }
  `;

  export const SubTitle = styled.div`
    display: flex;
    align-items: center;
    border: solid white;
    border-width: 0 0.5px 0 0;
    padding: 1rem 1.5rem;
    color: ${Colors.white};
  `;
}
