import styled from 'styled-components';

export const IntroLayout = ({ children }: ChildrenType) => {
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  `;
}
