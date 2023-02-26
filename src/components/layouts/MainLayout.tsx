import styled from 'styled-components';

export const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <S.Layout>{children}</S.Layout>
    </>
  );
};

namespace S {
  export const Layout = styled.section`
    margin: 0 auto;
    display: grid;
    grid-template-rows: 46rem 15.9rem 1fr;
    grid-row-gap: 10rem;
  `;
}
