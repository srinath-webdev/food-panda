import React from "react";
import { useState, useEffect } from "react";
import { RestaurantCard, withPromotedLabel } from "../Restaurant";
 import { Shimmer } from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957216&lng=80.24188989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };



  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center h-[100vh] flex items-center justify-center ">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  
  //rendering  Shimmer using ternary operator
  if (restaurantList?.length === 0 )  return <Shimmer /> 
   
   return(
    <div>
      <div className="flex justify-center item-center py-4">
        <div className="search">
          <input
            type="text"
            className=" search-box m-2 cursor-pointer border-solid border-2 border-[#ff7200] w-[400px] h-[40px] capitalize  focus:border-[#ff7200] outline-none	 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-white cursor-poiter bg-[#ff7200] border-none p-2 font-[16px] "
            onClick={() => {
              const filterRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-2 my-2 md:my-0 justify-center">
        { filterRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
               { restaurant.info.promoted ? (
                < RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          
          )
        })}
      </div>
      
    </div>
    
  );
};

export default Body;
