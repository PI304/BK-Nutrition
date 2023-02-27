import styled from 'styled-components';
import { Colors, Fonts, SC } from '@/styles';
import Image from 'next/image';
import People from '../../../../public/assets/people1.png';
import Goal from '../../../../public/assets/goal.png';
import Group from '../../../../public/assets/group.png';

export const IntroPage = () => {
  return (
    <>
      <S.GreetingBox>
        <S.Title>인사말</S.Title>
        <S.Greeting>
          <p>
            <strong>Brain Korea 21 FOUR 웰니스 융합인재 양성팀</strong>은 국내외적으로
            <br /> 연구 활동 및 교육 활동이 활발한 교수들로 구성되어 있습니다.
          </p>
          <p>
            Brain Korea 21 FOUR 웰니스 융합인재 양성팀은 학문 후속세대에게 국제적 수준의 교육/연구를
            제공하여,
            <br /> 사회 문제 해결과 미래 웰니스 식품영양기술의 신산업화를 통해 건강한 사회 구현에
            기여하고
            <br /> 글로벌 임팩트를 발휘하는 대학원으로 발돋움함과 동시에
            <br /> 미래지향적인 융합혁신인재 양성과 배출의 요람으로서 그 역할을 다하고자 합니다.
          </p>
          <p>
            글로벌 웰니스문제 해결을 위한 교육과 연구에 관심을 가지고 있는 여러분이 많이 참여하시어
            <br />
            맞춤 영양, 항노화, 건강기능식품, 오믹스, 식품안전 등 활용 가능한 미래 식품영양 지식과
            기술을 통한
            <br /> 국민건강 및 인류복지 실현에 함께 공헌할 수 있기를 바랍니다.
          </p>
          <p>
            대학원으로 발돋움함과 동시에
            <br /> 미래지향적인 융합혁신인재 양성과 배출의 요람으로서 그 역할을 다하고자 합니다
          </p>
        </S.Greeting>
        <div>
          <Image src={People} alt='people' />
        </div>
      </S.GreetingBox>
      <SC.Line />

      <S.GoalBox>
        <S.Title>목표 및 비전</S.Title>
        <S.Description>
          <div>웰니스 융합인재 양성팀의 비전</div>
          <div>
            <ol>
              <li>
                웰니스 항상성 유지를 통해
                <br /> 미래 인류 건강을 지키기 위한
                <br /> 융합형 혁신 인재 양성
              </li>
              <li>
                글로벌 식품영양 문제 해결을 위한
                <br /> 세계 수준의 교육을 주도
              </li>
              <li>
                미래 식품영양기술의
                <br /> 국제화와 신산업화를 통한
                <br /> 사회 문제 해결
              </li>
              <li>
                미래 지속 가능한
                <br /> 식품영양 기술개발을 통한
                <br /> 건강한 사회 구현 기여
              </li>
            </ol>
          </div>
          <div>혁신 글로벌 중심 대학원</div>
        </S.Description>
        <div>
          <Image src={Goal} alt='goal' />
        </div>
        <S.SubDescription>
          <div>웰니스 융합인재 양성팀의 목표</div>
          <div>
            <ol>
              <li>
                <strong>1.</strong> 글로벌 웰니스문제 해결을 위한{' '}
                <strong>혁신적 융합 전문인력 양성</strong>
              </li>
              <li>
                <strong>2.</strong> 글로벌 웰니스융합문제 해결을 위한{' '}
                <strong>국제적 수준의 교육연구 주도</strong>
              </li>
              <li>
                <strong>3. 미래식품영양기술의 국제화 및 신산업화</strong>를 통한 사회적 기여 달성
              </li>
            </ol>
            <ul>
              <li>
                상기 목표 달성을 위한 과학기술·산업·사회 문제 해결과 관련된 교육 프로그램 운영
              </li>
            </ul>
            <ul>
              <li>교육연구팀의 사회문제해결 관련 교과목 운영</li>
              <li>연세대 대학원의 과학기술·산업·사회 문제 해결 관련 공통 교육과정 운영</li>
              <li> 사회문제해결 관련 교과목 개발 및 운영</li>
              <li>문제해결 역량 개발을 위한 비교과 프로그램 개발 및 운영</li>
            </ul>
          </div>
        </S.SubDescription>
      </S.GoalBox>
      <SC.Line />

      <S.GroupBox>
        <S.Title>조직 현황</S.Title>
        <Image src={Group} alt='group' />
      </S.GroupBox>
      <SC.Line />

      <S.MapBox>
        <S.Title>찾아오시는 길</S.Title>
        <div></div>
        <div>
          <p>
            서울특별시 서대문구 연세로 50
            <br />
            삼성관 110호 BK21 FOUR
            <br />
            웰니스 융합인재양성팀
          </p>
          <p>02-2123-3126</p>
        </div>
      </S.MapBox>
    </>
  );
};

namespace S {
  export const Title = styled.div`
    ${Fonts.bold40};
  `;

  /* 인사말 */
  export const GreetingBox = styled.div`
    display: grid;
    grid-template-columns: 25rem 90rem;
    grid-template-rows: 10rem 36rem;
    grid-column-gap: 5rem;
    grid-column: auto;

    > div:first-child {
      display: flex;
      align-items: center;
    }

    > div:last-of-type {
      grid-row: 2 / 3;
      grid-column: -3 / -2;
    }
  `;

  export const Greeting = styled.div`
    grid-row: 2 / 3;

    > p {
      ${Fonts.regular16};
      margin-bottom: 4rem;
      line-height: 2.1rem;

      > strong {
        ${Fonts.bold16}
      }
    }
  `;

  /* 목표 및 비전 */
  export const GoalBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5rem 65rem 70rem;

    > div:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: -3 / -2;
    }

    > div:last-child {
      grid-row: 3 / 4;
      grid-column: -3 / -1;
    }
  `;

  export const Description = styled.div`
    grid-row: 2 / 3;

    > div:first-child {
      ${Fonts.bold24};
      margin: 3rem 0 5rem 8rem;

      &::after {
        content: '';
        width: 40rem;
        margin: 2rem 0 0 2rem;
        display: block;
        border-bottom: 0.3rem solid ${Colors.black};
      }
    }

    > div:nth-child(2) {
      margin-left: 14rem;
    }

    > div:last-of-type {
      ${Fonts.bold30};
      text-align: end;
      margin-right: 4rem;
      padding-top: 2.5rem;
    }

    > div ol {
      > li {
        ${Fonts.regular24};
        list-style: decimal;
        margin-bottom: 3rem;
        line-height: 3rem;
      }
    }
  `;

  export const SubDescription = styled.div`
    > div:first-child {
      ${Fonts.bold24};
      margin: 13rem 0 5rem;

      &::after {
        content: '';
        width: 40rem;
        margin: 2rem 0 0 2rem;
        display: block;
        border-bottom: 0.3rem solid ${Colors.black};
      }
    }

    > div:last-child {
      margin-left: 6rem;

      ol {
        margin-bottom: 4rem;

        li {
          ${Fonts.regular20};
          line-height: 4rem;

          strong {
            ${Fonts.bold24}
          }
        }
      }
    }

    > div:last-child ul:first-of-type {
      > li {
        ${Fonts.bold24};
        line-height: 5rem;
        list-style: disc;
      }
    }

    > div:last-child ul:last-of-type {
      padding-left: 2rem;

      li {
        ${Fonts.regular20};
        list-style: lower-latin;
        line-height: 2em;
      }
    }
  `;

  /* 조직 현황 */
  export const GroupBox = styled.div`
    display: flex;
    flex-direction: column;

    > div:first-child {
      margin-bottom: 8rem;
    }
  `;

  /* 찾아오시는 길*/
  export const MapBox = styled.div`
    display: grid;
    grid-template-rows: 10rem 45rem;
    grid-template-columns: 6rem 72rem 34rem;
    margin-bottom: 15rem;

    > div:first-child {
      display: flex;
      align-items: center;
      grid-column: 1 / 3;
    }

    > div:nth-child(2) {
      background-color: gray;
      grid-row: 2 / 3;
      grid-column: -3 / -2;
    }

    > div:last-child {
      grid-row: -2 / -1;
      grid-column: -2 / -1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      > p {
        ${Fonts.medium18};
      }

      > p:first-of-type {
        ${Fonts.semibold20};
        line-height: 140%;
        margin-bottom: 2.5rem;
      }
    }
  `;
}
