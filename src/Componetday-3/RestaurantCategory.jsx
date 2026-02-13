
import ItemList from './ItemList';

const RestaurantCategory = ({data,setShowIndex,showItems,index,showIndex}) => {
  const handleClick = () => {
    if(index == showIndex){
        setShowIndex(null)
    }else{
        setShowIndex(index)
    }
  };

  return (
    <div>
      
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}

        {showItems && <ItemList items={data.itemCards} />}
      
      </div>
    </div>
  );
};

export default RestaurantCategory;