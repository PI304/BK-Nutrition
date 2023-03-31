import styled from 'styled-components';
import { Colors, Fonts } from '@/styles';
import { svgDoubleLeft7, svgLeft7, svgRight7, svgDoubleRight7 } from '../../styles/svgs';
import { useState } from 'react';
import { PageLimit } from '@/constants';

export const PageButton = ({
  onChangePage,
  currentPage,
  totalPage,
  setCurrentPage,
}: PageButtonProps) => {
  const [block, setBlock] = useState(1);

  const onFirst = () => {
    setBlock(1);
    onChangePage(1);
  };

  const onLast = () => {
    setCurrentPage(totalPage);
    setBlock(Math.ceil(totalPage / PageLimit.limit) - 1);
  };

  const onNext = () => {
    if (currentPage >= totalPage) {
      return;
    } // page가 마지막 페이지보다 크거나 같으면 아무 것도 리턴하지 않는다.
    if (PageLimit.limit * Number(block + 1) < Number(currentPage + 1)) {
      setBlock((n: number) => n + 1);
    } //보여줄 페이지네이션 개수(pageLimit) * (blockNum+1) 가 page + 1보다 작다면 setBlockNum은 현재 페이지 + 1을 한다.
    setCurrentPage(currentPage + 1); //setPage에 현재 페이지 + 1을 한다.
  };

  const onPrev = () => {
    if (currentPage <= 1) {
      return;
    } // page가 1보다 작거나 같으면 아무 것도 리턴하지 않는다.
    if (currentPage - 1 <= PageLimit.limit * block) {
      setBlock((n: number) => n - 1);
    } // 현재 페이지 - 1 이 보여줄 페이지네이션 개수(pageLimit) * blockNum 보다 작거나 같으면 setBlockNum에 - 1 을 작동시킨다.
    setCurrentPage(currentPage - 1); // setPage를 현재 페이지에서 -1 로 이동시킨다.
  };

  return (
    <>
      {!!totalPage && (
        <S.PageButtonLayout>
          <button onClick={onFirst}>{svgDoubleLeft7}</button>
          <button onClick={onPrev}>{svgLeft7}</button>
          <S.NumberWrapper>
            {Array(totalPage)
              .fill(0) // [0, 0]
              .map((_, i) => i + 1) // [1, 2]
              .map((page) => (
                <S.NumberButton
                  onClick={() => onChangePage(page)}
                  key={page}
                  isCurrent={currentPage === page}>
                  {page}
                </S.NumberButton>
              ))}
            {/* {Array(totalPage)
            .fill(0) //[0, 0]
            .map((_, i) => (
              <S.NumberButton onClick={() => onChangePage(i + 1)} key={i}>
                {i + 1}
              </S.NumberButton>
            ))} */}
          </S.NumberWrapper>
          <button onClick={onNext}>{svgRight7}</button>
          <button onClick={onLast}>{svgDoubleRight7}</button>
        </S.PageButtonLayout>
      )}
    </>
  );
};

namespace S {
  export const PageButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.1rem;

    > button {
      height: 2.4rem;
      flex-shrink: 0;
      padding: 0 0.6rem;
      border: 0.05rem solid ${Colors.gray150};
      display: flex;
      align-items: center;
      background-color: ${Colors.white};
    }

    > button:nth-of-type(1),
    > button:nth-of-type(2) {
      padding-right: 0.8rem;
    }

    > button:nth-of-type(3),
    > button:nth-of-type(4) {
      padding-left: 0.8rem;
    }
  `;

  export const NumberWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
    position: relative;
    top: -0.2rem;
  `;

  export const NumberButton = styled.button<NumberButtonProps>`
    ${Fonts.light14}
    font-weight: ${(props) => props.isCurrent && '500'};
    border-bottom: ${(props) => props.isCurrent && `0.1rem solid ${Colors.back}`};
    padding: 0.6rem;
  `;
}
