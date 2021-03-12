import React, { useState } from 'react';
import axios from 'axios';
import {
  ModalBox, ModalContent, ModalCampos, ModalCampoNome, P, ModalCampoCor, ModalCampoDescricao,
  TextArea, ModalCampoBotao, ColorText, Input, ColorField,
} from './style';
import TinyButton from '../TinyButton';

const Modal = ({
  tipo, nome, descricao, cor, id, getCategories,
}) => {
  const [modalState, setModalState] = useState(true);
  const [name, setName] = useState(nome);
  const [description, setDescription] = useState(descricao);
  const [color, setColor] = useState(cor);

  const toggleState = () => {
    setModalState(!modalState);
  };

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
    toggleState();
  };

  return (
    <div>
      {modalState
        ? (
          <ModalBox>
            <ModalContent>
              <h1>
                {tipo}
                Categoria
              </h1>
              <ModalCampos>
                <ModalCampoNome>
                  <P>Nome:</P>
                  <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                </ModalCampoNome>
                <ModalCampoCor>
                  <ColorText>Cor:</ColorText>
                  <ColorField type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </ModalCampoCor>
                <ModalCampoDescricao>
                  <P>Descrição:</P>
                  <TextArea rows="6" cols="45" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                </ModalCampoDescricao>
                <ModalCampoBotao>
                  <TinyButton type="secondary" title="Cancelar" click={toggleState} />
                  <TinyButton type="primary" title="Cadastrar" click={submit} />
                </ModalCampoBotao>
              </ModalCampos>
            </ModalContent>
          </ModalBox>
        )
        : null}
    </div>
  );
};

export default Modal;
