import React from "react";
import { CDN_URL } from "././utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, deliveryTime, costForTwo, avgRating } = resData;

  return (
    <div className="w-[280px] h-[330px] m-5 p-5 bg-white no-underline	cursor-pointer shadow-lg hover:bg-[#f1f1f1] hover:scale-105 hover:transition-all">
      <img
        className="w-[280px] rounded-md"
        alt="chinese"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <div className="card-name-cuisines">
        <h3 className="font-sans text-base py-3 font-medium text-[#686b78]	">
          {name}
        </h3>
        <h4 className="font-sans text-base pb-3 font-medium text-[#686b78]	">
          {cuisines.slice(0, 4).join(", ")}
        </h4>
      </div>
      <div className="text-[#535665] flex flex-row justify-between items-center  mt-1.5 text-sm ">
        <h4>{deliveryTime} Mins</h4>
        <div>&bull;</div>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <div>&bull;</div>
        <h4>
          <span
            className=" text-white p-1"
            style={{
              backgroundColor: avgRating < 4 ? "red" : "green",
            }}
          >
            {avgRating} ⭐
          </span>
        </h4>
      </div>
    </div>
  );
};

// Higher Order component (HOC)

// RestaurantCard to Enhanced RestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-1 p-1 bg-[#333] text-white rounded-lg ml-[1rem] ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
