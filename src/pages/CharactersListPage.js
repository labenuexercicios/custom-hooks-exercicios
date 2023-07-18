import React from 'react';
import { Title, NameContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const CharactersListPage = () => {
  const [caractersList, isLoading, isError] = useRequestData(`/people`)

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {isError ? (
          <p>Erro</p>
        ) : isLoading ? (
          <p>Carregando...</p>
        ) : (
          caractersList.map((caracter) => (
            <Card 
              key={caracter.name} 
              text={caracter.name} 
              backgroundColor={'gray'} 
              textColor={'black'}     
            />
          ))
        )}
      </NameContainer>
    </div>
  );
}

export default CharactersListPage;



