import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from './style'
import { Card } from '../components/Card/Card'
import useGetCharacter from "../Hooks/useGetCharacter";
import useRequestData from "../Hooks/useRequestData";

const CharactersListPage = () => {
  
  const [caractersList, isLoading, isError] = useRequestData('/people')

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {
        isError ? <p>Erro! Tente novamente</p>:
        isLoading ? <p>Carregando!</p> :        
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

export default CharactersListPage;



