import {useEffect , useState} from "react";

const useRestaurant = ( ) => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
   
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957216&lng=80.24188989999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      };
  

}

export default useRestaurant;