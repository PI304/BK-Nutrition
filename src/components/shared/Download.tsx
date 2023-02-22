import { BoxShadows, Colors, Fonts } from '@/styles';
import styled from 'styled-components';
import Image from 'next/image';
import Arrow from '../../../public/assets/download.png';

export const Download = ({ year, semester }: DownloadProps) => {
  return (
    <>
      <S.Layout>
        <Image src={Arrow} alt='arrow' />
        <div>
          <div>{year}</div>
          <div>{semester}</div>
        </div>
      </S.Layout>
    </>
  );
};

namespace S {
  export const Layout = styled.div`
    width: 23rem;
    height: 10rem;
    background-color: ${Colors.download};
    box-shadow: ${BoxShadows.download};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    cursor: pointer;
    position: relative;

    > img {
      position: absolute;
      left: 2.5rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 3.5rem;

      > div {
        ${Fonts.bold24};
      }
    }
  `;
}
