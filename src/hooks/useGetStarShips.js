import axios from 'axios'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useGetStarShips = () => {

    const [getStarShips, setGetStarShips] = useState([]);
    

    useEffect(() => {
      axios
        .get(`${BASE_URL}/starships`)
        .then((response) => {
            setGetStarShips(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
   return getStarShips

}

export default useGetStarShips