import styled from 'styled-components';

export const ViewLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <S.Layout>{children}</S.Layout>
    </>
  );
};

namespace S {
  export const Layout = styled.section`
    width: 120rem;
    margin: 5rem auto 0;
    display: block;
  `;
}
