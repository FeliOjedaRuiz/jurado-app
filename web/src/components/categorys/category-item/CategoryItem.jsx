function CategoryItem({ category }) {

  return (
    <div className="bg-gray-300 rounded p-2 m-1 flex">
      <p>{category.name} &nbsp;&nbsp;</p>
      <p className="font-bold">X</p>
    </div>
  );
}

export default CategoryItem;

{/* <div className="bg-gray-300 rounded p-2 inline m-1">{category.name}</div>; */}
