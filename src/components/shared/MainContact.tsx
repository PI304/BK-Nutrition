import styled from 'styled-components';
import Arrow from '../../../public/assets/main_arrow.png';
import Notice from '../../../public/assets/main_notice.png';
import Image from 'next/image';
import { Colors, Fonts } from '@/styles';

export const MainContact = ({ page, title }: MainContactProps) => {
  return (
    <>
      <S.Container>
        <div>
          <div>{page}</div>
          <Image src={Arrow} alt='arrow'></Image>
        </div>

        <div>
          <Image src={Notice} alt='notice'></Image>
          <table>
            <tbody>
              <tr>
                <th>{title}</th>
                <th>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volup
                </th>
                <th>2023. 02. 24</th>
              </tr>
            </tbody>
          </table>
        </div>

        <table>
          <tbody>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
            <tr>
              <th>BK21 FOUR 웰니스 공지사항입니다.</th>
              <th>2023. 02. 24</th>
            </tr>
          </tbody>
        </table>
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    display: grid;
    grid-template-columns: 62rem;
    grid-template-rows: 3rem 15.8rem 30.1rem;

    margin: 0 auto;
    gap: 3.5rem;

    > div:first-of-type {
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
      display: flex;
      gap: 3rem;

      > table tbody tr {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > th:first-of-type {
          ${Fonts.bold20};
          color: ${Colors.gray900};
          margin-bottom: 2.5rem;
        }

        > th:nth-child(2) {
          ${Fonts.regular14};
          color: ${Colors.gray900};
          text-align: left;
          margin-bottom: 2.5rem;
        }

        > th:last-of-type {
          ${Fonts.medium12};
          color: ${Colors.gray900};
        }
      }
    }

    > table tbody tr {
      border-bottom: 0.1rem solid ${Colors.gray300};
      display: flex;
      justify-content: space-between;
      padding: 1.1rem;

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
  `;
}
