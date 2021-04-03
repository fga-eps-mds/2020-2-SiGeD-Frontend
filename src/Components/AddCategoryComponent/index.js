import React, { useEffect, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import {
  AddCategory, AddIcon, CategoriesBox, List, P, CreateCategory, P2,
} from './Style';
import { getCategories } from '../../Services/Axios/demandsServices';
import CategoriesToAdd from '../CategoriesToAdd';
import ModalComp from '../ModalComp';

const CategoryDiv = ({ selectedCategories, pushCategory }) => {
  const [statusBox, setStatusBox] = useState(false);
  const [categories, setCategories] = useState([]);
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const listCategories = async () => {
    await getCategories('category')
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    listCategories();
  }, [statusBox, modalState]);

  const renderCategories = () => {
    if (categories?.length === 0) {
      return <p style={{ color: 'black', fontSize: '1rem' }}>Ainda não há categorias cadastradas</p>;
    }
    return categories?.map((category) => (
      <CategoriesToAdd
        category={category}
        key={category._id}
        selectedCategories={selectedCategories}
        pushCategory={pushCategory}
      />
    ));
  };

  const toggleBox = () => {
    setStatusBox(!statusBox);
  };
  return (
    <AddCategory>
      <P>Categorias:</P>
      <AddIcon onClick={toggleBox} />
      {(statusBox && true) ? (
        <CategoriesBox>
          <List>
            <CreateCategory>
              <P2>Criar nova categoria</P2>
              <BsPencil color="#5289B5" onClick={toggleModal} />
            </CreateCategory>
            {renderCategories()}
          </List>
        </CategoriesBox>
      ) : null}
      { modalState ? <ModalComp show={modalState} type="Nova " idName="" idDescription="" idColor="#000000" getCategories={getCategories} handleClose={toggleModal} /> : null }
    </AddCategory>
  );
};

export default CategoryDiv;
