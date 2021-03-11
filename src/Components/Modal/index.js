import React, { useState } from 'react';
import {
  ModalBox, ModalContent, ModalCampos, ModalCampoNome, P, ModalCampoCor, ModalCampoDescricao,
  ModalCampoBotao, ColorText, styles,
} from './style';
import TinyButton from '../TinyButton';

const Modal = ({ tipo, nome, descricao }) => {
  const [modalState, setModalState] = useState(true);

  const toggleState = () => {
    setModalState(!modalState);
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
                  <input style={styles.input} placeholder="Nome" value={nome} />
                </ModalCampoNome>
                <ModalCampoCor>
                  <ColorText>Cor:</ColorText>
                  <input type="color" />
                </ModalCampoCor>
                <ModalCampoDescricao>
                  <P>Descrição:</P>
                  <textarea style={styles.input} rows="6" cols="45" name="text" placeholder="Descrição" value={descricao} />
                </ModalCampoDescricao>
                <ModalCampoBotao>
                  <TinyButton type="secondary" title="Cancelar" click={toggleState} />
                  <TinyButton type="primary" title="Cadastrar" />
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
