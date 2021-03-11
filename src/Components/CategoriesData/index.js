import React, { useState } from 'react';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
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
        <div style={styles.box}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <button style={styles.button} onClick={() => { toggleBox(); }}>
                Editar
              </button>
              <div style={styles.icon}>
                <BsPencil />
              </div>
            </li>
            <li style={styles.li}>
              <button style={styles.button}>
                Remover
              </button>
              <div style={styles.icon}>
                <FaRegTrashAlt />
              </div>
            </li>
          </ul>
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
