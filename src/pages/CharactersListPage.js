import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from "../hooks/useRequestData.js";


const CharactersListPage = () => {
  const caractersList = useRequestData('people')

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {caractersList.map((caracter) => {
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



