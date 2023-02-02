import styled from 'styled-components';

export const DefaultLayout = ({ children }: ChildrenType) => {
  return <S.Layout>{children}</S.Layout>;
};

namespace S {
  export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
  `;
}
