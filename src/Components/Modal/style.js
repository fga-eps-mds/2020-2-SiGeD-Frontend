import styled from 'styled-components';

export const ModalBox = styled.div`
  display: flex;
  position: fixed;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  margin-top: -300px; /* Negative half of height. */
  margin-left: -300px; /* Negative half of width. */
  background-color: white;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px black;
`;

export const ModalContent = styled.div`
  margin: 90px 50px;
  font: Montserrat;
`;

export const ModalCampos = styled.div`
  margin-top: 28px;
`;

export const ModalCampoNome = styled.div`
  display: inline-block;
`;

export const P = styled.p`
  margin: 10px;
  font-size: 1.8vh;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 3px solid black;
  text-indent: 10px;
  font-size: 18px;
`;

export const ModalCampoCor = styled.div`
  display: inline-block;
  float: right;
`;

export const CorPreview = styled.div`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  bottom: 20px;
  position: relative;
`;

export const ModalCampoDescricao = styled.div`
  margin-top: 28px;
`;

export const ModalCampoBotao = styled.text`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ColorText = styled(P)`
  position: relative;
  right: 70px;
  top: 30px;
`;

export const TextArea = styled.textarea`
border-radius: 10px;
border: 3px solid black;
text-indent: 10px;
font-size: 18px;
resize: none;
`;

export const ColorField = styled.input`
border-radius: 5%;
height: 60px;
width: 60px;
`;
