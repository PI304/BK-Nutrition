import styled from 'styled-components';

export const MemberLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <S.Layout>{children}</S.Layout>
    </>
  );
};

namespace S {
  export const Layout = styled.section``;
}
