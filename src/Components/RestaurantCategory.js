
import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data , showItems, setShowIndex  }) => {
  

  
const [dropDown , setDropDown] = useState(false);



const handleClick = () => {
  setDropDown(!dropDown);
  setShowIndex();
}



  return (
    <div className="w-6/12 bg-gray-50  shadow-lg mb-2 mx-auto   p-4">
    <div className="flex justify-between cursor-pointer" onClick={handleClick }>
    <span >{data.title} ({data.itemCards.length})</span>
      <span >🔽</span>

    </div>
    {showItems &&  dropDown  &&  <ItemList items={data.itemCards}  />}
    
    </div>
  );
};

export default RestaurantCategory;
