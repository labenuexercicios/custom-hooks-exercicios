import axios from 'axios'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useGetCharacter = () => {

    const [getCharacter, setGetCharacter] = useState([]);
    

    useEffect(() => {
      axios
        .get(`${BASE_URL}/people`)
        .then((response) => {
            setGetCharacter(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
   return getCharacter

}

export default useGetCharacter