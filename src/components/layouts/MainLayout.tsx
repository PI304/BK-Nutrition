import styled from 'styled-components';
import { DefaultLayout } from './DefaultLayout';

export const MainLayout = ({ children }: ChildrenType) => {
  return (
    <DefaultLayout>
      <S.Layout>{children}</S.Layout>
    </DefaultLayout>
  );
};

namespace S {
  export const Layout = styled.section`
    width: 100%;
    margin: 0 auto;
  `;
}
