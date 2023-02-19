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
    margin: 0 auto;
    display: grid;
    grid-template-rows: 45rem 0 125rem 0 160rem 0 1fr;
    grid-row-gap: 10rem;
  `;
}
