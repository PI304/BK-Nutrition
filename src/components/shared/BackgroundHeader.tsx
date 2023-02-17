import { Colors, Fonts } from '@/styles';
import styled from 'styled-components';
import Image from 'next/image';
import Home from '../../../public/assets/home.png';

export const BackgroundHeader = ({ title, address }: TitleProps) => {
  return (
    <>
      <S.Background>
        <S.TitleLayout>
          <S.Title>{title}</S.Title>
          <S.Tab>
            <Image src={Home} alt='home'></Image>
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
    background-color: gray;
    position: relative;
    top: -9rem;
    z-index: -1;
  `;

  export const TitleLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 7rem;
    width: 75%;
  `;

  export const Title = styled.div`
    ${Fonts.bold40};
    color: ${Colors.white};
    display: flex;
    justify-content: center;
    margin-top: 5rem;
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
