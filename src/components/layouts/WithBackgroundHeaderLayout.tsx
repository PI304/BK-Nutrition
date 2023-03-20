import styled from 'styled-components';
import { BackgroundHeader } from '../shared';
import { DefaultLayout } from './DefaultLayout';

export const WithBackgroundHeaderLayout = ({ children }: ChildrenType) => {
  return (
    <DefaultLayout>
      <BackgroundHeader />
      <S.Layout>{children}</S.Layout>
    </DefaultLayout>
  );
};

namespace S {
  export const Layout = styled.section`
    width: 120rem;
    margin: 7rem auto;

    @media (max-width: 1350px) {
      width: 100%;
    }
  `;
}