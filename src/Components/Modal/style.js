import styled from 'styled-components';
// x
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
  border: 3px solid black;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px #6A6262;
`;
// x
export const ModalContent = styled.div`
  margin: 90px 50px;
  font: Open Sans;
`;
// x
export const ModalCampos = styled.div`
  margin-top: 28px;
`;
// x
export const ModalCampoNome = styled.div`
  display: inline-block;
`;
// x
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
// x
export const ModalCampoCor = styled.div`
  display: inline-block;
  float: right;
`;
// x
export const CorPreview = styled.div`
  border-radius: 5%;
  height: 50px;
  width: 50px;
  bottom: 20px;
  position: relative;
`;
// x
export const ModalCampoDescricao = styled.div`
  margin-top: 28px;
`;
// x
export const ModalCampoBotao = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
// x
export const ColorText = styled(P)`
  position: relative;
  right: 70px;
  top: 30px;
`;

export const styles = {
  input: {
    borderRadius: '10px',
    border: '3px solid black',
    textIndent: '10px',
    fontSize: '18px',
    resize: 'none',
  },
};
