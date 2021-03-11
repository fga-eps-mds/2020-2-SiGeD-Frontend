import React from 'react';
import styles from './style';
import TinyButton from '../TinyButton';

const cancel = () => {
  console.log('cancelando...');
};
const submit = () => {
  console.log('...');
};
const Modal = ({
  tipo,
}) => (
  <div style={styles.modalBox}>
    <div style={styles.modalContent}>
      <h1>
        {tipo}
      </h1>
      <div style={styles.campos}>
        <div style={styles.campoNome}>
          <p style={styles.p}>Nome:</p>
          <form>
            <input style={styles.input} placeholder="Nome" />
          </form>
        </div>
        <div style={styles.campoCor}>
          <p style={styles.colorP}>Cor:</p>
          <input style={styles.colorPreview} type="color" />
        </div>
        <div style={styles.campoDescricao}>
          <p style={styles.p}>Descrição:</p>
          <form>
            <textarea style={styles.input} rows="6" cols="45" name="text" placeholder="Descrição" />
          </form>
        </div>
        <div style={styles.divButtom}>

          <TinyButton type="secondary" title="Cancelar" click={cancel} />

          <TinyButton type="primary" title="Cadastrar" click={submit} />

        </div>
      </div>
    </div>
  </div>
);

export default Modal;
