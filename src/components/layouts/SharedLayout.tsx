import styled from 'styled-components';

export const SharedLayout = ({ children }: ChildrenType) => {
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
    display: block;
  `;
}
