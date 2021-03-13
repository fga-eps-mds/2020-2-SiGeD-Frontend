import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {
  Titulo, modalStyle, P, DivButton, Input, DivNome, DivCor,
  TextArea, Linha, ModalContent, DivDescription,
} from './style';
import TinyButton from '../TinyButton';

Modal.setAppElement('#root');
const ReactModal = ({
  type, idName, idDescription, idColor, id, getCategories, toggleModal,
}) => {
  const [name, setName] = useState(idName);
  const [description, setDescription] = useState(idDescription);
  const [color, setColor] = useState(idColor);

  const createCategory = async () => {
    try {
      await axios.post('http://localhost:3003/category/create', {
        name,
        description,
        color,
      })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const updateCategory = async () => {
    try {
      await axios.put(`http://localhost:3003/category/update/${id}`, {
        name,
        description,
        color,
      })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const submit = async () => {
    if (type === 'Nova ') {
      await createCategory();
    } else {
      await updateCategory();
    }
    console.log(getCategories);
    getCategories();
    toggleModal();
  };

  const style = {
    buttonStyle: {
      width: '15vh',
    },
  };

  return (
    <div>
      <Modal
        style={modalStyle}
        isOpen="true"
        onRequestClose={() => toggleModal()}
      >
        <ModalContent>
          <Titulo>
            {type}
            Categoria
          </Titulo>
          <Linha>
            <DivNome>
              <P>Nome:</P>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </DivNome>
            <DivCor>
              <P>Cor:</P>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </DivCor>
          </Linha>
          <DivDescription>
            <P>Descrição:</P>
            <TextArea rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          </DivDescription>
          <DivButton>
            <TinyButton style={style.buttonStyle} type="secondary" title="Cancelar" click={toggleModal} />
            <TinyButton type="primary" title="Cadastrar" click={submit} />
          </DivButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReactModal;
