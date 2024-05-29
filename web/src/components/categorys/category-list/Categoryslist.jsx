import CategoryItem from "../category-item/CategoryItem";

function Categoryslist({ categorys, onCategoryDelete }) {
  return (
    <div className="flex flex-col w-full max-w-2xl">
      <p className="text-base font-medium text-gray-900 pl-1 mb-1">Categorias de evaluación:</p>
      <div className="bg-gray-50 border flex min-h-32 items-start border-gray-300 text-gray-900 text-base rounded-lg w-full py-4 px-1">
        <div className="flex flex-wrap ">
          {categorys.map((category) => (
            <CategoryItem
              category={category}
              key={category.id}
              onCategoryDelete={onCategoryDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categoryslist;
