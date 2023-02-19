import styled from 'styled-components';
import { Footer, Header } from '../Adds';

export const DefaultLayout = ({ children }: ChildrenType) => {
  return (
    <S.Layout>
      <Header />
      {children}
      <Footer />
    </S.Layout>
  );
};

namespace S {
  export const Layout = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
  `;
}
