import styled from 'styled-components';

export const MemberLayout = ({ children }: ChildrenType) => {
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
    grid-template-rows: 2.5fr 0 1fr 1.5fr;
    grid-row-gap: 5rem;
  `;
}
