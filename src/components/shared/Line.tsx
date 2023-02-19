import { Colors } from '@/styles';
import styled from 'styled-components';

export const Line = () => {
  return (
    <>
      <S.Line></S.Line>
    </>
  );
};

namespace S {
  export const Line = styled.div`
    width: 30rem;
    margin: 0 auto;
    border-bottom: 0.3rem solid ${Colors.line};
  `;
}
