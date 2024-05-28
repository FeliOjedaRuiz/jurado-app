import CategoryItem from "../category-item/CategoryItem";

function Categoryslist({ categorys }) {
  return (
    <div className="bg-gray-50 border flex flex-wrap mt-2 border-gray-300 text-gray-900 text-base rounded-lg w-full py-4 px-1">
      {categorys.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Categoryslist;
