import styled from 'styled-components';

export const ModalContent = styled.div`
  margin: 20px 10px;
  width: 100%;
`;

export const Titulo = styled.h1`
  font-size: 150%;
  margin-bottom: 6%;
`;

export const P = styled.p`
  margin: 0 10px;
`;

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  margin: 3% 0;
`;

export const TextArea = styled.textarea`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  margin: 2% 0;
  resize: none;
`;

export const DivNome = styled.div`
  display: inline-block;
`;

export const DivCor = styled.div`
  display: inline-block;
  float: right;
  margin-right: 12%;
`;

export const CorPreview = styled.input`
  float: right;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  content: {
    position: 'absolute',
    top: '20%',
    left: '35%',
    right: '35%',
    bottom: '20%',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    border: '3px solid black',
    borderRadius: '20px',
    boxSizing: 'border-box',
    boxShadow: '5px 5px 5px black',
    outline: 'none',
    padding: '20px',
  },
};
