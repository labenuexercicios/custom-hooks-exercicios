import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useGetStarShip from "../Hooks/useGetStarShips";
import useRequestData from "../Hooks/useRequestData";

const StarShipsListPage = () => {

const [starShipsList, isLoading, isError] = useRequestData('/starships')

  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>
        {
          isError ? <p>Erro! Tente novamente</p> : 
          isLoading ? <p>Carregando!</p> :
        starShipsList.map((starShip) => {
        return(
          <Card 
          key={starShip.name} 
          title={starShip.name}
          text={starShip.manufacturer} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default StarShipsListPage;



