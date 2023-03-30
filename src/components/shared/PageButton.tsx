import styled from 'styled-components';
import { Colors, Fonts } from '@/styles';
import { svgDoubleLeft7, svgLeft7, svgRight7, svgDoubleRight7 } from '../../styles/svgs';
import { useEffect, useState } from 'react';
import { PageLimit } from '@/constants';

export const PageButton = ({ onChangePage, currentPage, totalPage }: PageButtonProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const [block, setBlock] = useState(1);

  const getLastBlock = () => Math.ceil(pages.length / 5);

  const getPagesInCurrentBlock = () => pages.slice((block - 1) * 5, (block - 1) * 5 + 5);

  const onFirst = () => {
    setBlock(1);
    onChangePage(1);
  };

  const onLast = () => {
    setBlock(getLastBlock());
    onChangePage(pages.length);
  };

  const onPrev = () => {
    if (block !== 1) {
      const prevBlock = block - 1;
      setBlock(prevBlock);
      /* 이전 블록의 마지막 페이지로 이동 */
      onChangePage((prevBlock - 1) * 5 + 5);
    }
  };

  const onNext = () => {
    if (block !== getLastBlock()) {
      const nextBlock = block + 1;
      setBlock(nextBlock);
      /* 다음 블록의 첫 페이지로 이동 */
      onChangePage((nextBlock - 1) * 5 + 1);
    }
  };

  useEffect(() => {
    if (totalPage) {
      const pagesCnt = Math.ceil(totalPage / PageLimit.limit);
      const pages = [
        ...Array(pagesCnt)
          .fill(0)
          .map((v, i) => i + 1),
      ];
      setPages(pages);
    }
  }, [totalPage]);
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
