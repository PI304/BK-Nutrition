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
          <table>
            <tbody>
              {isCurrent?.map((isCurrent, i) => (
                <tr key={i}>
                  <th>{isCurrent.title}</th>
                  <th>{parseSubmitDate(isCurrent.created_at)}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-columns: 62rem;
    grid-template-rows: 3rem 3fr 1fr;
    margin: 0 auto;

    > a {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${Colors.gray500};
      cursor: pointer;

      > div {
        ${Fonts.semibold16};
        color: ${Colors.gray800};
      }
    }

    > div:last-of-type {
      > table {
        width: 100%;
      }

      > table tbody tr {
        border-bottom: 0.1rem solid ${Colors.gray300};
        display: flex;
        justify-content: space-between;
        padding: 1.3rem 0;

        > th:first-of-type {
          ${Fonts.medium16};
          color: ${Colors.gray900};
        }

        > th:last-of-type {
          ${Fonts.medium12};
          color: ${Colors.gray900};
        }
      }

      > table tbody tr:first-of-type {
        border-top: 0.1rem solid ${Colors.gray300};
      }
    }
  `;
}
