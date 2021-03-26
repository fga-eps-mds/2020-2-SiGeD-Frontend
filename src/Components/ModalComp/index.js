import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
  Line, DivName, DivColor, DivDescription, P1, Input, TextArea, Footer, Title,
} from './Style';
import { createCategory, updateCategory } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';

const ModalComp = ({
  show, type, idName, idDescription, idColor, id, getCategories, handleClose,
}) => {
  const [name, setName] = useState(idName);
  const [description, setDescription] = useState(idDescription);
  const [color, setColor] = useState(idColor);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!name || !description || !color) {
      setValid(false);
    } else {
      setValid(true);
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
      handleClose();
    }
  };

  const buttonName = () => {
    if (type === 'Nova ') {
      return 'Cadastrar';
    }
    return 'Salvar';
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <Title>
          {type}
          Categoria
        </Title>
        <Line>
          <DivName>
            <P1>Nome:</P1>
            <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </DivName>
          <DivColor>
            <P1>Cor:</P1>
            <input height="5vh" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </DivColor>
        </Line>
        <DivDescription>
          <P1>Descrição:</P1>
          <TextArea rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
        </DivDescription>
        <Footer>
          <TinyButton type="secondary" title="Cancelar" click={handleClose} />
          <TinyButton type="primary" title={buttonName()} click={submit} />
        </Footer>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComp;
