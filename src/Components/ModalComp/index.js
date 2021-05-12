import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
  Line, DivName, DivColor, DivDescription, P1, Input, TextArea, Footer,
  Title, ColorInput, ColorField,
} from './Style';
import TinyButton from '../TinyButton';
import { useProfileUser } from '../../Context';

const ModalComp = ({
  show, operation, idName, idDescription, idColor, id, getContent, handleClose, type,
  createContent, updateContent,
}) => {
  const [name, setName] = useState(idName);
  const [description, setDescription] = useState(idDescription);
  const [color, setColor] = useState(idColor);
  const [valid, setValid] = useState(true);
  const { startModal } = useProfileUser();

  useEffect(() => {
    if (!name || !description) {
      if (type === 'Categoria' && !color) {
        setValid(false);
      }
    } else {
      setValid(true);
    }
  }, [name, description, color]);

  const submit = async () => {
    if (operation === 'Nova ') {
      if (color) {
        await createContent(name, description, color, startModal);
      } else {
        await createContent(name, description, startModal);
      }
    } else if (color) {
      await updateContent(name, description, color, id, startModal);
    } else {
      await updateContent(name, description, id, startModal);
    }

    if (valid) {
      getContent();
      handleClose();
    }
  };

  const buttonName = () => {
    if (operation === 'Nova ') {
      return 'Cadastrar';
    }
    return 'Salvar';
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        {type === 'Setor' ? <Title>Novo Setor</Title>
          : (
            <Title>
              Nova
              {' '}
              {type}
            </Title>
          )}
        {type === 'Categoria' || type === 'Caracteristica' ? (
          <Line flexDirection="row">
            <DivName>
              <P1>Nome:</P1>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </DivName>
            <DivColor>
              <p style={{ marginRight: '8px' }}>Cor:</p>
              <ColorField background={color}>
                <ColorInput type="color" value={color} onChange={(e) => setColor(e.target.value)} />
              </ColorField>
            </DivColor>
          </Line>
        ) : (
          <Line flexDirection="column">
            <DivName>
              <P1>Nome:</P1>
              <Input width="100%" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </DivName>
          </Line>
        )}
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
