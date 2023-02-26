import styled from 'styled-components';
import { Colors, Fonts } from '@/styles';
import { svgDown12 } from '../../styles/svgs';

export const Select = () => {
  return (
    <S.SelectBoxLayout>
      <select>
        <option value='최신순 정렬'>최신순 정렬</option>
      </select>
      <div>{svgDown12}</div>
    </S.SelectBoxLayout>
  );
};

namespace S {
  export const SelectBoxLayout = styled.div`
    width: fit-content;
    align-self: center;
    position: relative;
    top: 0.2rem;

    > select {
      ${Fonts.regular14};
      align-self: center;
      width: 11.6rem;
      padding: 0.5rem 0.8rem;
      border-radius: 0;
      border: 0.1rem solid ${Colors.gray150};
      color: ${Colors.back};
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    > div {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
    }
  `;
}
