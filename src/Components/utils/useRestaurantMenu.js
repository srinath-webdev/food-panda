import {useEffect , useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array to run the effect only once
  
    const fetchData = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    };
  
    return resInfo;
  };
  
  export default useRestaurantMenu; 