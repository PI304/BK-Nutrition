import { useState } from 'react';
import styled from 'styled-components';
import { Footer, Header, MobileSideBar } from '../shared';

export const DefaultLayout = ({ children }: ChildrenType) => {
  const [isClick, setIsClick] = useState(false);
  const onClickTrue = () => {
    setIsClick(true);
  };
  const onClickFalse = () => {
    setIsClick(false);
  };
  return (
    <S.Layout>
      <Header onClickTrue={onClickTrue} />
      {isClick && <MobileSideBar onClickFalse={onClickFalse} />}
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
