import React from 'react';
import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const StarShipsListPage = () => {

  const [starShipsList, isLoading, isError] = useRequestData("/starships");

  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>
        {isError ? (
          <p>Erro no carregamento</p>
        ) : isLoading ? (
          <p>Carregando...</p>
        ) : (
          starShipsList.map((starShip) => (
            <Card 
              key={starShip.name} 
              title={starShip.name}
              text={starShip.manufacturer} 
              backgroundColor={'gray'}
              textColor={'black'}
            />
          ))
        )}
      </PostContainer>
    </div>
  );
}

export default StarShipsListPage;



