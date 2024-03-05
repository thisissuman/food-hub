import ItemList from "./ItemList";

const RestarurantCategory = ({ category }) => {
  console.log(category?.itemCards?.length);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg items-start py-5">{`${category?.title}(${category?.itemCards?.length})`}</span>
          <span>🔽</span>
        </div>
        <ItemList list={category?.itemCards} />
      </div>
    </div>
  );
};

export default RestarurantCategory;
