import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import styles from './style';
import Modal from '../Modal';

const CategoriesData = ({ category }) => {
  const [boxState, setBoxState] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleBox = () => {
    setModalState(!modalState);
    setBoxState(!boxState);
  };

  return (
    <div>
      <div style={styles.personalbox}>
        <div style={{ ...styles.tableContent, width: '25%' }}>
          <p style={{ ...styles.name, backgroundColor: category.color }}>{category.name}</p>
        </div>

        <div style={{ ...styles.tableContent, width: '50%' }}>
          <p style={styles.p}>{ category.description }</p>
        </div>

        <div style={{ ...styles.tableContent, width: '20%' }}>
          <p style={styles.p}>{ category.updatedAt.slice(0, 10).replaceAll('-', '/') }</p>
        </div>

        <div style={{ ...styles.tableContent, width: '5%' }}>
          <BsThreeDots onClick={() => { setBoxState(!boxState); }} />
        </div>
      </div>

      {boxState ? (
        <div>
          <button onClick={() => { toggleBox(); }}>Editar</button>
          <button>Remover</button>
        </div>
      ) : null}
      {modalState ? (
        <div>
          <Modal tipo="Editar" />
        </div>
      ) : null}
    </div>
  );
};

export default CategoriesData;
