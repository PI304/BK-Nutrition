import styled from 'styled-components';
import Arrow from '../../../public/assets/main_arrow.png';
import Notice from '../../../public/assets/main_notice.png';
import Image from 'next/image';
import { Colors, Fonts } from '@/styles';
import { getPosts } from 'api/posts';
import { useEffect, useState } from 'react';
import { Paths, PostsType } from '@/constants';
import parseSubmitDate from '@/utils/parseSubmitDate';
import Link from 'next/link';

export const MainContact = ({ page }: MainContactProps) => {
  const [isCurrent, setIsCurrent] = useState<ResponsePosts.Get>();

  const getBis = async () => {
    const isCurrent = await getPosts(PostsType.bis);
    setIsCurrent(isCurrent);
  };

  const getNotice = async () => {
    const isCurrent = await getPosts(PostsType.notice);
    setIsCurrent(isCurrent);
  };

  useEffect(() => {
    page === 'NOTICE' ? getNotice() : page === 'BUSINESS' ? getBis() : null;
  }, [page]);
  return (
    <>
      <S.Container>
        <Link
          href={
            page === 'NOTICE' ? Paths.notice : page === 'BUSINESS' ? Paths.achievement : Paths.main
          }>
          <div>{page}</div>
          <Image src={Arrow} alt='arrow'></Image>
        </Link>
        <div>
          {isCurrent?.slice(0, 1).map((isCurrent, i) => (
            <S.ThumbNail key={i}>
              <div>
                <Image src={Notice} alt='Notice' />
              </div>
              <div>
                <h1>{isCurrent.title}</h1>
                <p>{isCurrent.content.slice(0, 130)}</p>
                <div>{parseSubmitDate(isCurrent.created_at)}</div>
              </div>
            </S.ThumbNail>
          ))}
          {isCurrent?.slice(1).map((isCurrent, i) => (
            <S.List key={i}>
              <div>{isCurrent.title}</div>
              <div>{parseSubmitDate(isCurrent.created_at)}</div>
            </S.List>
          ))}
        </div>
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-columns: 62rem;
    grid-template-rows: 3rem 1fr;
    margin: 0 auto;

    > a {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${Colors.gray500};
      cursor: pointer;

      > div {
        ${Fonts.bold20};
        color: ${Colors.blue700};
      }
    }
  `;

  export const ThumbNail = styled.div`
    padding: 1.5rem;
    display: flex;
    gap: 2.2rem;

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h1 {
        ${Fonts.bold20}
        line-height: 115%;
      }

      > p {
        ${Fonts.regular14}
        line-height: 130%;
      }

      > div {
        ${Fonts.medium14}
        color: ${Colors.gray800};
        margin-top: auto;
        margin-bottom: 0.3rem;
      }
    }
  `;

  export const List = styled.ul`
    border-bottom: 0.1rem solid ${Colors.gray300};
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 0;

    :first-of-type {
      border-top: 0.1rem solid ${Colors.gray300};
    }

    > div:first-of-type {
      ${Fonts.medium16};
      color: ${Colors.gray900};
    }

    > div:last-of-type {
      ${Fonts.medium12};
      color: ${Colors.gray900};
    }
  `;
}
