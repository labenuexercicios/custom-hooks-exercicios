/* import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const useRequesteData = (path) => {
  
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
       axios
         .get(`${BASE_URL}${path}`)
         .then((response) => {
           setData(response.data);
           setIsloading(false)
         })
         .catch((error) => {
            setIsloading(false)
            setIsError(true)
        });
     }, []);

     return [data, isLoading, isError]

}

export default useRequesteData
 */

import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

const useRequestData = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);

  return [data, isLoading, isError];
};

export default useRequestData;