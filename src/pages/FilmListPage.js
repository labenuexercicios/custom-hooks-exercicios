import React from 'react';
import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const FilmListPage = () => {
  const [filmsList, isLoading, isError] = useRequestData("/films");

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>
        {isError ? (
          <p>Erro no carregamento</p>
        ) : isLoading ? (
          <p>Carregando...</p>
        ) : (
          filmsList.map((film) => (
            <Card 
              key={film.title} 
              title={film.title}
              text={film.opening_crawl} 
              backgroundColor={'gray'}  
              textColor={'black'}      
            />
          ))
        )}
      </PostContainer>
    </div>
  );
}

export default FilmListPage;



