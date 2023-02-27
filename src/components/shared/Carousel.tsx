import styled from 'styled-components';
import { svgLeft14, svgRight14 } from '../../styles/svgs';
import { MutableRefObject, useRef, useState } from 'react';
import { Colors } from '../../styles/colors';
import Image from 'next/image';
import { Urls } from '../../constants/urls';
import Link from 'next/link';
import Carousel1 from '../../../public/assets/carousel_yonsei.png';
import Carousel2 from '../../../public/assets/carousel_brain.png';
import Carousel3 from '../../../public/assets/carousel_food.png';
import Carousel4 from '../../../public/assets/carousel_industry.png';

export default function Carousel() {
  const [itemIdx, setItemIdx] = useState(0);
  const carouselWrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onPrev = () => {
    carouselWrapperRef.current.style.transition = '0.3s ease';
    setItemIdx(itemIdx - 1);
    if (itemIdx === 0) {
      setTimeout(() => {
        carouselWrapperRef.current.style.transition = 'none';
        setItemIdx(3);
      }, 300);
    }
  };

  const onNext = () => {
    carouselWrapperRef.current.style.transition = '0.3s ease';
    setItemIdx(itemIdx + 1);
    if (itemIdx === 3) {
      setTimeout(() => {
        carouselWrapperRef.current.style.transition = 'none';
        setItemIdx(0);
      }, 300);
    }
  };

  return (
    <S.HomeCarouselLayout>
      <div>
        <div onClick={onPrev}>{svgLeft14}</div>
        <S.CarouselWindow>
          <S.CarouselWrapper itemIdx={itemIdx} ref={carouselWrapperRef}>
            <S.CarouselItem>
              <Link href={Urls.carouselResearch}>
                <Image src={Carousel4} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselYonsei}>
                <Image src={Carousel1} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselBrain}>
                <Image src={Carousel2} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselFood}>
                <Image src={Carousel3} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselResearch}>
                <Image src={Carousel4} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselYonsei}>
                <Image src={Carousel1} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselBrain}>
                <Image src={Carousel2} alt='carousel' />
              </Link>
            </S.CarouselItem>
            <S.CarouselItem>
              <Link href={Urls.carouselFood}>
                <Image src={Carousel3} alt='carousel' />
              </Link>
            </S.CarouselItem>
          </S.CarouselWrapper>
        </S.CarouselWindow>
        <div onClick={onNext}>{svgRight14}</div>
      </div>
      <div>
        <S.ItemIndicator isCurrent={itemIdx === 0 || itemIdx === 4} />
        <S.ItemIndicator isCurrent={itemIdx === 1} />
        <S.ItemIndicator isCurrent={itemIdx === 2} />
        <S.ItemIndicator isCurrent={itemIdx === 3 || itemIdx === -1} />
      </div>
    </S.HomeCarouselLayout>
  );
}

namespace S {
  export const HomeCarouselLayout = styled.section`
    margin-bottom: 7.6rem;
    width: 140rem;
    margin: 0 auto;

    > div:first-of-type {
      padding: 3.4rem 6.2rem;
      display: flex;
      align-items: center;
      gap: 2.9rem;

      > div {
        cursor: pointer;
      }
    }

    > div:last-of-type {
      display: flex;
      justify-content: center;
      gap: 1.3rem;
      padding: 1.2rem 0;
    }
  `;

  export const CarouselWindow = styled.div`
    overflow: hidden;
  `;

  export const CarouselWrapper = styled.div<CarouselWrapperProps>`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    position: relative;
    left: calc((36.7rem + 4rem) * -1 * (${(props) => props.itemIdx} + 1));
    transition: 0.3s ease;
  `;

  export const CarouselItem = styled.li`
    flex: none;
    width: 36.7rem;
    height: 9.1rem;

    > a {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  `;

  export const ItemIndicator = styled.div<IndicatorProps>`
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    border: 0.1rem solid ${Colors.front};
    background-color: ${(props) => props.isCurrent && Colors.front};
  `;
}
