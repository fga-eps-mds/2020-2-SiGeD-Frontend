import React, { useEffect, useState } from 'react';
import {
  AddCategory, AddIcon, CategoriesBox, List,
} from './Style';
import { getCategories } from '../../Services/Axios/demandsServices';
import CategoriesToAdd from '../CategoriesToAdd';

const CategoryDiv = () => {
  const [statusBox, setStatusBox] = useState(false);
  const [categories, setCategories] = useState([]);

  const listCategories = async () => {
    await getCategories('category')
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    listCategories();
    console.log(categories);
  }, [statusBox]);

  const renderCategories = () => {
    if (categories?.length > 0) {
      return <h1 style={{ color: 'black' }}>Ainda não há categorias cadastradas</h1>;
    }
    return categories?.map((category) => (
      <CategoriesToAdd
        category={category}
        key={category._id}
      />
    ));
  };

  const toggleBox = () => {
    setStatusBox(!statusBox);
  };
  return (
    <AddCategory>
      <p style={{ marginBottom: '0px' }}>Categorias:</p>
      <AddIcon onClick={toggleBox} />
      {(statusBox && true) ? (
        <CategoriesBox>
          <List>
            <p style={{ color: 'black' }}>Lista de categorias:</p>
            {renderCategories}
          </List>
        </CategoriesBox>
      ) : null}
    </AddCategory>
  );
};

export default CategoryDiv;
