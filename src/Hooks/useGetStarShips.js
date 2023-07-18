// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../constants/constants";

// const useGetStarShip = () => {
//     const [starShipsList, setStarShipsList] = useState([]);
  
//     useEffect(() => {
//       axios
//         .get(`${BASE_URL}/starships`)
//         .then((response) => {
//           setStarShipsList(response.data.results);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },[]);
  
//     return ;
//   }
  
//   export default useGetStarShip;