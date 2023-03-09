import styled from 'styled-components';

export const IntroLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <S.Layout>{children}</S.Layout>
    </>
  );
};

namespace S {
  export const Layout = styled.section`
    width: 120rem;
    margin: 7rem auto;
    display: grid;
    grid-template-rows: 0.5fr 0 2fr 0 2fr 0 2fr;
    grid-row-gap: 7rem;
  `;
}
