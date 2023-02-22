import styled from 'styled-components';
import { Colors, Fonts } from '@/styles';
import { svgDoubleLeft7, svgLeft7, svgRight7, svgDoubleRight7 } from '../../styles/svgs';

export const PageButton = () => {
  return (
    <>
      <S.PageButtonLayout>
        <button>{svgDoubleLeft7}</button>
        <button>{svgLeft7}</button>
        <S.NumberWrapper>
          <S.NumberButton></S.NumberButton>
        </S.NumberWrapper>
        <button>{svgRight7}</button>
        <button>{svgDoubleRight7}</button>
      </S.PageButtonLayout>
    </>
  );
};

namespace S {
  export const PageButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.1rem;

    > button {
      height: 2.4rem;
      flex-shrink: 0;
      padding: 0 0.6rem;
      border: 0.05rem solid ${Colors.gray150};
      display: flex;
      align-items: center;
      background-color: ${Colors.white};
    }

    > button:nth-of-type(1),
    > button:nth-of-type(2) {
      padding-right: 0.8rem;
    }

    > button:nth-of-type(3),
    > button:nth-of-type(4) {
      padding-left: 0.8rem;
    }
  `;

  export const NumberWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
    position: relative;
    top: -0.2rem;
  `;

  export const NumberButton = styled.button<NumberButtonProps>`
    ${Fonts.light14}
    font-weight: ${(props) => props.isCurrent && '500'};
    border-bottom: ${(props) => props.isCurrent && `0.1rem solid ${Colors.gray300}`};
    padding: 0.6rem;
  `;
}
