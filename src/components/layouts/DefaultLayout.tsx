import styled from 'styled-components';
import { Footer, Header } from '../shared';

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
    position: relative;
  `;
}
