import axios from 'axios'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useGetFilms = () => {

    const [filmList, setFilmList] = useState([]);
    

    useEffect(() => {
      axios
        .get(`${BASE_URL}/films`)
        .then((response) => {
            setFilmList(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
   return filmList

}

export default useGetFilms