import React, { useEffect, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import {
  AddCategory, AddIcon, CategoriesBox, List, P, CreateCategory, P2,
} from './Style';
import { getCategories, createCategory } from '../../Services/Axios/demandsServices';
import CategoriesToAdd from '../CategoriesToAdd';
import ModalComp from '../ModalComp';
import { useProfileUser } from '../../Context';

const CategoryDiv = ({ pushCategory }) => {
  const [statusBox, setStatusBox] = useState(false);
  const [categories, setCategories] = useState([]);
  const [modalState, setModalState] = useState(false);
  const { startModal } = useProfileUser();

  const styles = {
    editIconStyle: {
      cursor: 'pointer',
    },
    textStyle: {
      color: 'black',
      fontSize: '1rem',
    },
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const listCategories = async () => {
    await getCategories('category', startModal)
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
      return <p style={styles.textStyle}>Ainda não há categorias cadastradas</p>;
    } if (categories?.length === 1) {
      return <CategoriesToAdd category={categories[0]} key={categories[0]._id} pushCategory={pushCategory} height="50%" />;
    }
    return categories?.map((category) => (
      <CategoriesToAdd
        category={category}
        key={category._id}
        pushCategory={pushCategory}
        height="100%"
      />
    ));
  };

  const toggleBox = () => {
    setStatusBox(!statusBox);
  };
  return (
    <AddCategory onMouseLeave={() => {
      setStatusBox(false);
    }}
    >
      <P>Categorias:</P>
      <AddIcon onClick={toggleBox} />
      {(statusBox && true) ? (
        <CategoriesBox>
          <List>
            <CreateCategory>
              <P2 onClick={toggleModal} style={styles.editIconStyle}>Criar nova categoria</P2>
              <BsPencil color="#5289B5" onClick={toggleModal} style={styles.editIconStyle} />
            </CreateCategory>
            {renderCategories()}
          </List>
        </CategoriesBox>
      ) : null}
      { modalState ? <ModalComp show={modalState} type="Categoria" operation="Nova " idName="" idDescription="" idColor="#000000" getContent={listCategories} handleClose={toggleModal} createContent={createCategory} /> : null}
    </AddCategory>
  );
};

export default CategoryDiv;
