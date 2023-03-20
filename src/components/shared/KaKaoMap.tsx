import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const KaKaoMap = () => {
  return (
    <S.Layout>
      <Map center={{ lat: 37.56496079933699, lng: 126.93428036669447 }}>
        <MapMarker position={{ lat: 37.56496079933699, lng: 126.93428036669447 }}></MapMarker>
      </Map>
    </S.Layout>
  );
};

namespace S {
  export const Layout = styled.div`
    width: 80rem;
    height: 45rem;
    margin-bottom: 2rem;

    > div:first-of-type {
      width: 100%;
      height: 100%;
    }
  `;
}
