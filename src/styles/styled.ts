import styled from 'styled-components';
import Link from 'next/link';
import { Colors, Fonts } from '.';

export namespace SC {
  export const Line = styled.div`
    width: 30rem;
    margin: 0 auto;
    border-bottom: 0.3rem solid ${Colors.line};

    @media (max-width: 1200px) {
      width: 95%;
    }
  `;

  export const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-right: 8rem;

    > div {
      ${Fonts.regular20}
    }
  `;

  export const Home = styled(Link)`
    > img {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      z-index: 1;
    }
    > svg {
      display: none;
    }

    @media (max-width: 1200px) {
      > img {
        display: none;
      }

      > svg {
        display: block;
        position: absolute;
        bottom: 12rem;
        right: 0;
        cursor: pointer;
      }
    }
  `;
}
