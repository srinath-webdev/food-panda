import { CDN_URL } from "./utils/constants";
import {useDispatch} from "react-redux"
import { addItem } from "./utils/cartSlice"

const ItemList = ({ items }) => {

  
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
    { items && items.map( (item) => (
        <div key={item.card.info.id} className="text-sm text-left p-3 m-2 border-gray-200 border-b-2 flex justify-between">
           <div className="w-9/12">
           <div>
            <span >{item.card.info.name}</span>
            <span >₹ - {item.card.info.price /  100 || item.card.info.defaultPrice /  100  }</span>
        </div>
            <p  className="text-xs"> {item.card.info.description} </p>
           </div>

           <div className="w-3/12 relative pb-2">
            <button className="p-2 bg-[green] text-white absolute right-0 " onClick={() => handleAddItem(item)}>Add +</button>
            <img src={ CDN_URL + item.card.info.imageId } alt="items" className="w-full" />
           </div>
         </div>   
    ) )  }
  </div>
  )
};

export default ItemList;
