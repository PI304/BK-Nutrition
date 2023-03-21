import styled from 'styled-components';
import { Colors, Fonts, IntroLocation, SC } from '@/styles';
import Image from 'next/image';
import Goal from '../../../../public/assets/goal.png';
import Group from '../../../../public/assets/group.png';
import Phone from '../../../../public/assets/intro_phone.png';
import { KaKaoMap, SideBar } from '@/components/shared';

export const IntroPage = () => {
  return (
    <S.IntroLayout>
      <SideBar />
      <S.Container>
        <S.GreetingBox id='greeting'>
          <S.Title>인사말</S.Title>
          <S.Greeting>
            <p>
              <strong>Brain Korea 21 FOUR 웰니스 융합인재 양성팀</strong>은 국내외적으로 연구 활동
              및 교육 활동이 활발한 교수들로 구성되어 있습니다.
            </p>
            <p>
              Brain Korea 21 FOUR 웰니스 융합인재 양성팀은 학문 후속세대에게{' '}
              <strong>국제적 수준의 교육/연구를 제공</strong>하 여,<strong>사회 문제 해결</strong>과{' '}
              <strong>미래 웰니스 식품영양기술의 신산업화</strong>를 통해 건강한 사회 구현에
              기여하고 <strong>글로벌 임팩트를 발휘하는 대학원</strong>
              으로 발돋움함과 동시에 <strong>미래지향적인 융합혁신인재 양성과 배출의 요람</strong>
              으로서 그 역할을 다하고자 합니다.
            </p>
            <p>
              글로벌 웰니스문제 해결을 위한 교육과 연구에 관심을 가지고 있는 여러분이 많이
              참여하시어 맞춤 영양, 항노화, 건강기능식품, 오믹스, 식품안전 등{' '}
              <strong>
                활용 가능한 미래 식품영양 지식과 기술을 통한 국민건강 및 인<br />
                류복지 실현에 함께 공헌
              </strong>
              할 수 있기를 바랍니다.
            </p>
          </S.Greeting>
        </S.GreetingBox>
        <SC.Line />

        <S.GoalBox id='goal'>
          <S.Title>목표 및 비전</S.Title>
          <div>
            <S.Description>
              <div>웰니스 융합인재 양성팀의 비전</div>
              <div>
                웰니스 항상성 유지를 통해 미래 인류 건강을 지속하기 위한 융합형 혁신인재를 양성하고,
                글로벌 식품영양 문제 해결을 위한 세계 수준의 교육을 주도하며, 미래 식품영양기술의
                국제화와 신산업화를 통해 사회 문제를 해결하는 한편, 미래 지속 가능한 식품영양
                기술개발을 통한 건강한 사회 구현에 기여하는, 혁신적 글로벌 중심 대학원으로서 입지를
                확고히 하는 것이다.
              </div>

              <div>웰니스 융합인재 양성팀의 목표</div>
              <div>
                <ol>
                  <li>
                    글로벌 웰니스문제 해결을 위한 <strong>혁신적 융합 전문인력 양성</strong>
                  </li>
                  <li>
                    글로벌 웰니스융합문제 해결을 위한 <strong>국제적 수준의 교육연구 주도</strong>
                  </li>
                  <li>
                    <strong>미래식품영양기술의 국제화 및 신산업화</strong>를 통한 사회적 기여 달성
                  </li>
                </ol>
                <ul>
                  <li>
                    <strong>
                      목표 달성을 위한 과학기술·산업·사회 문제 해결과 관련된 교육 <br />
                      프로그램 운영
                    </strong>
                  </li>
                </ul>
                <ul>
                  <li>교육연구팀의 사회문제해결 관련 교과목 운영</li>
                  <li>
                    연세대 대학원의 과학기술·산업·사회 문제 해결 관련 공통 <br />
                    교육과정 운영
                  </li>
                  <li>사회문제해결 관련 교과목 개발 및 운영</li>
                  <li>문제해결 역량 개발을 위한 비교과 프로그램 개발 및 운영</li>
                </ul>
              </div>
            </S.Description>
            <Image src={Goal} alt='goal' />
          </div>
        </S.GoalBox>
        <SC.Line />

        <S.GroupBox id='group'>
          <S.Title>조직 현황</S.Title>
          <Image src={Group} alt='group' />
        </S.GroupBox>
        <SC.Line />

        <S.MapBox id='map'>
          <S.Title>찾아오시는 길</S.Title>
          <div>
            <KaKaoMap />
            <div>
              {IntroLocation}
              <div>서울특별시 서대문구 연세로 50 삼성관 110호 BK21 FOUR 웰니스 융합인재양성팀</div>
            </div>
            <div>
              <Image src={Phone} alt='phone'></Image>
              <div>02-2123-3570</div>
            </div>
          </div>
        </S.MapBox>
      </S.Container>
    </S.IntroLayout>
  );
};

namespace S {
  export const IntroLayout = styled.div`
    display: grid;
    grid-template-columns: 10rem 120rem;
    gap: 3rem;

    @media (max-width: 1250px) {
      display: block;
    }
  `;

  export const Container = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 0 2fr 0 2fr 0 2fr;
    grid-row-gap: 5rem;
    grid-column: 2 / 3;

    @media (max-width: 1250px) {
      grid-template-rows: 0.5fr 0 3fr 0 1fr 0 1fr;
    }
  `;

  export const Title = styled.div`
    ${Fonts.bold40};

    @media (max-width: 1250px) {
      ${Fonts.bold20}
    }
  `;

  /* 인사말 */
  export const GreetingBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  export const Greeting = styled.div`
    margin: 0 8rem;
    width: 65.5rem;

    > p {
      ${Fonts.regular16};
      margin-bottom: 2rem;
      line-height: 2rem;

      > strong {
        ${Fonts.bold16}
      }
    }

    @media (max-width: 1250px) {
      margin: 0 2rem;
      width: 33.7rem;

      > p {
        ${Fonts.regular12}

        >strong {
          ${Fonts.bold12}
        }
      }
    }
  `;

  /* 목표 및 비전 */
  export const GoalBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > div:last-of-type {
      display: flex;
      gap: 3rem;

      > img {
        height: 100%;
        object-fit: contain;
      }
    }

    @media (max-width: 1250px) {
      > div:last-of-type {
        flex-direction: column;
      }
    }
  `;

  export const Description = styled.div`
    > div:first-child {
      ${Fonts.bold30};
      margin: 3rem 0 3rem 8rem;

      &::after {
        content: '';
        width: 37rem;
        margin: 1rem 0 0 2rem;
        display: block;
        border-bottom: 0.3rem solid ${Colors.black};
      }
    }

    > div:nth-child(2) {
      ${Fonts.regular16}
      width: 39rem;
      height: 16rem;
      margin: 0 0 0 10rem;
      line-height: 1.9rem;
    }

    > div:nth-child(3) {
      ${Fonts.bold30};
      margin: 3rem 0 3rem 8rem;

      &::after {
        content: '';
        width: 37rem;
        margin: 1rem 0 0 2rem;
        display: block;
        border-bottom: 0.3rem solid ${Colors.black};
      }
    }

    > div:last-of-type {
      margin: 0 0 0 11rem;

      > ol {
        margin-bottom: 2rem;
      }

      > ol li {
        ${Fonts.regular16}
        line-height: 2.5rem;
        list-style: decimal;
      }

      > ul:first-of-type li {
        ${Fonts.regular16}
        line-height: 2rem;
        list-style: disc;
        margin-bottom: 3rem;
      }

      > ul:last-of-type li {
        ${Fonts.regular16}
        line-height: 3rem;
        list-style: decimal;
      }

      > ul:last-of-type li:nth-child(2) {
        line-height: 1.9rem;
      }

      > ul:first-of-type li strong {
        ${Fonts.bold16}
      }

      > ol strong {
        ${Fonts.bold16}
      }
    }

    @media (max-width: 1250px) {
    }
  `;

  /* 조직 현황 */
  export const GroupBox = styled.div`
    display: flex;
    flex-direction: column;

    > div:first-child {
      margin-bottom: 5rem;
    }

    > img {
      margin: 0 auto;
    }

    @media (max-width: 1250px) {
      > img {
        margin: 0 1rem;
        width: 35.8rem;
        height: 33.1rem;
      }
    }
  `;

  /* 찾아오시는 길*/
  export const MapBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > div:last-of-type {
      margin: 0 auto;

      > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        > div {
          ${Fonts.bold18}
        }
      }

      > div:last-of-type {
        display: flex;
        align-items: center;
        gap: 1rem;

        > div {
          ${Fonts.bold18}
        }
      }
    }

    @media (max-width: 1250px) {
      > div:last-of-type {
        margin: 0 2rem;
        > div:first-of-type {
          width: 35.8rem;
          height: 30rem;
        }

        > div:nth-child(2) {
          width: 28rem;
          gap: 1rem;
          > img {
            width: 3rem;
            height: 3rem;
          }

          > div {
            ${Fonts.semibold12}
            line-height: 120%;
          }
        }

        > div:last-of-type {
          width: 35.8rem;
          gap: 1rem;
          > img {
            width: 3rem;
            height: 3rem;
          }

          > div {
            ${Fonts.semibold12}
          }
        }
      }
    }
  `;
}
