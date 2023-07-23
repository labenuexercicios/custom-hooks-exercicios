import {Title,NameContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../hooks/useRequestData';

const CharactersListPage = () => {
 
  const [caractersList, isLoading, isError] = useRequestData('/people')

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
      { isError ? <p>ERRO! TENTE NOVAMENTE.</p> :
      isLoading ? <p>CARREGANDO...</p> :
      caractersList.map((caracter) => {
          return(
          <Card 
          key={caracter.name} 
          text={caracter.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  CharactersListPage;



