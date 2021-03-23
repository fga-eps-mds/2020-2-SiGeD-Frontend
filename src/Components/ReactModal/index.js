import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  Title, modalStyle, P, DivButton, Input, DivName, DivColor,
  TextArea, Line, ModalContent, DivDescription,
} from './style';
import TinyButton from '../TinyButton';
import { createCategory, updateCategory } from '../../Services/Axios/demandsServices';

Modal.setAppElement('#root');
const ReactModal = ({
  type, idName, idDescription, idColor, id, getCategories, toggleModal,
}) => {
  const [name, setName] = useState(idName);
  const [description, setDescription] = useState(idDescription);
  const [color, setColor] = useState(idColor);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!name && !description && !color) {
      setValid(false);
    }
  }, [name, description, color]);

  const submit = async () => {
    if (type === 'Nova ') {
      await createCategory(name, description, color);
    } else {
      await updateCategory(name, description, color, id);
    }
    getCategories();
    if (valid) {
      toggleModal();
    }
  };

  const style = {
    buttonStyle: {
      width: '20vh',
    },
  };

  return (
    <div>
      <Modal
        style={modalStyle}
        isOpen
        onRequestClose={() => toggleModal()}
      >
        <ModalContent>
          <Title>
            {type}
            Categoria
          </Title>
          <Line>
            <DivName>
              <P>Nome:</P>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </DivName>
            <DivColor>
              <P>Cor:</P>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </DivColor>
          </Line>
          <DivDescription>
            <P>Descrição:</P>
            <TextArea rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          </DivDescription>
          <DivButton>
            <TinyButton style={style.buttonStyle} type="secondary" title="Cancelar" click={toggleModal} />
            <TinyButton style={style.buttonStyle} type="primary" title="Cadastrar" click={submit} />
          </DivButton>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReactModal;
