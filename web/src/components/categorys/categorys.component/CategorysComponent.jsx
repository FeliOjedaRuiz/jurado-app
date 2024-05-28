import { useEffect, useState } from 'react';
import CategorysForm from './../category-form/CategorysForm';
import Categoryslist from '../category-list/Categoryslist';
import categorysService from "../../../services/categorys"
import { useParams } from 'react-router-dom';

function CategorysComponent() {
  const [categorys, setCategorys] = useState([]);
  const [reload, setReload] = useState(false);
  const { eventId } = useParams(); 

  useEffect(() => {
    categorysService.list(eventId)
      .then((categorys) => {
        setCategorys(categorys)        
      })
      .catch(error => console.error(error));
  }, [reload]);

  const onCategoryCreation = () => {
    setReload(!reload)
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <CategorysForm onCategoryCreation={onCategoryCreation} />
      <Categoryslist categorys={categorys} />
    </div>
  )
}

export default CategorysComponent