import { XMarkIcon } from "@heroicons/react/24/solid";
import categorysService from "../../../services/categorys";

function CategoryItem({ category, onCategoryDelete }) {
  const categoryId = category.id;
  const handleDelete = () => {
    console.log("delete")
    categorysService
      .deleteCategory(categoryId)
      .then((category) => {
        
        onCategoryDelete()
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-teal-100 rounded py-1 px-2 m-1 text-lg flex items-center font-medium">
      <p>{category.name} &nbsp;&nbsp;</p>
      <XMarkIcon className="h-5" onClick={handleDelete} />
    </div>
  );
}

export default CategoryItem;

{
  /* <div className="bg-gray-300 rounded p-2 inline m-1">{category.name}</div>; */
}
