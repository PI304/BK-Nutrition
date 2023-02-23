import { Colors, Fonts } from '@/styles';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Home from '../../../public/assets/home.png';
import { Paths } from '@/constants/paths';

export const BackgroundHeader = ({ title, sub_title, address }: TitleProps) => {
  return (
    <>
      <S.Background>
        <S.TitleLayout>
          <S.Title>
            <div>{title}</div>
            <div>{sub_title}</div>
          </S.Title>
          <S.Tab>
            <Link href={Paths.main}>
              <Image src={Home} alt='home' />
            </Link>
            <div>{title}</div>
            <div>{address}</div>
          </S.Tab>
        </S.TitleLayout>
      </S.Background>
    </>
  );
};

namespace S {
  export const Background = styled.div`
    width: 100%;
    height: 29rem;
    display: flex;
    justify-content: center;
    background-image: url(/assets/background3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    top: -9rem;
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

    > div:last-of-type {
      ${Fonts.regular30};
      color: ${Colors.white};
    }
  `;

  export const Tab = styled.div`
    background-color: ${Colors.shadow};
    color: ${Colors.white};
    display: flex;

    > div:first-of-type {
      display: flex;
      align-items: center;
      border: solid white;
      border-width: 0 0.5px 0 0.5px;
      padding: 1rem 1.5rem;
    }

    > div:last-of-type {
      display: flex;
      align-items: center;
      border: solid white;
      border-width: 0 0.5px 0 0;
      padding: 1rem 1.5rem;
    }
  `;
}
