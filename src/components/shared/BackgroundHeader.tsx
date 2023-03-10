import { BoxShadows, Colors, Fonts, HomeIcon } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { Paths } from '@/constants/paths';

export const BackgroundHeader = ({ nametitle, title, subtitle }: TitleProps) => {
  return (
    <>
      <S.Background>
        <S.TitleLayout>
          <S.Title>
            <div>{nametitle}</div>
          </S.Title>
          <S.Tab>
            <Link href={Paths.main}>{HomeIcon}</Link>
            <div>{title}</div>
            {subtitle && <S.SubTitle>{subtitle}</S.SubTitle>}
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
  `;

  export const TitleLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    width: 120rem;
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
