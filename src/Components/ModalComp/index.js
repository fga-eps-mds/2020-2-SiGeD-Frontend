import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
  Line, DivName, DivColor, DivDescription, Input, P1, TextArea,
} from './Style';
import { createCategory, updateCategory } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';

const ModalComp = (
  type, idName, idDescription, idColor, id, getCategories, toggleModal,
) => {
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
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {type}
          Categoria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Line>
          <DivName>
            <P1>Nome:</P1>
            <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </DivName>
          <DivColor>
            <P1>Cor:</P1>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </DivColor>
        </Line>
        <DivDescription>
          <P1>Descrição:</P1>
          <TextArea rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
        </DivDescription>
      </Modal.Body>
      <Modal.Footer>
        <TinyButton type="secondary" title="Cancelar" click={toggleModal} />
        <TinyButton type="primary" title="Cadastrar" click={submit} />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
