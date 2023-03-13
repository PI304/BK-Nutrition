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
    grid-template-rows: 46rem 2fr 1.2fr;
    grid-row-gap: 5rem;

    @media (max-width: 1350px) {
      grid-template-rows: 20rem 4fr 1fr;
      justify-content: center;
    }
  `;
}
