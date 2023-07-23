import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../hooks/useRequestData';


const  FilmListPage = () => {

  const [filmsList, isLoading, isError] = useRequestData('/films')

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>

      { isError ? <p>ERRO! TENTE NOVAMENTE.</p> :
      isLoading ? <p>CARREGANDO...</p> :
      filmsList.map((film) => {
        return(
          <Card 
          key={film.title} 
          title={film.title}
          text={film.opening_crawl} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default FilmListPage;



