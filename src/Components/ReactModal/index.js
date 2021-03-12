import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {
  Titulo, ModalContent, modalStyle, P, DivButton, Input, DivNome, DivCor, CorPreview, TextArea,
} from './style';
import TinyButton from '../TinyButton';

Modal.setAppElement('#root');
const ReactModal = ({
  tipo, nome, descricao, cor, id, getCategories, toggleModal,
}) => {
  const [name, setName] = useState(nome);
  const [description, setDescription] = useState(descricao);
  const [color, setColor] = useState(cor);

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
    if (tipo === 'Nova ') {
      await createCategory();
    } else {
      await updateCategory();
    }
    console.log(getCategories);
    getCategories();
    toggleModal();
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
            {tipo}
            Categoria
          </Titulo>
          <DivNome>
            <P>Nome:</P>
            <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </DivNome>
          <DivCor>
            <P>Cor:</P>
            <CorPreview type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </DivCor>
          <P>Descrição:</P>
          <TextArea rows="5" cols="38" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <DivButton>
            <TinyButton type="secondary" title="Cancelar" click={toggleModal} />
            <TinyButton type="primary" title="Cadastrar" click={submit} />
          </DivButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReactModal;
