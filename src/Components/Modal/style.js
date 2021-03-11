const styles = {
  modalBox: {
    display: 'flex',
    position: 'fixed',
    width: '600px',
    height: '600px',
    top: '50%',
    left: '50%',
    marginTop: '-300px', /* Negative half of height. */
    marginLeft: '-300px', /* Negative half of width. */
    backgroundColor: 'white',
    borderRadius: '20px',
    border: '3px solid black',
    boxSizing: 'border-box',
    boxShadow: '5px 5px 5px #6A6262',
  },
  modalContent: {
    margin: '90px 50px',
    font: 'Open Sans',
  },
  colorPreview: {
    borderRadius: '5%',
    height: '50px',
    width: '50px',
    bottom: '20px',
    position: 'relative',
  },
  campoNome: {
    display: 'inline-block',
  },
  campoCor: {
    display: 'inline-block',
    float: 'right',
  },
  input: {
    borderRadius: '10px',
    border: '3px solid black',
    textIndent: '10px',
    fontSize: '18px',
  },
  p: {
    margin: '10px',
    fontSize: '1.8vh',
  },
  campos: {
    marginTop: '28px',
  },
  campoDescricao: {
    marginTop: '28px',
  },
  colorP: {
    margin: '10px',
    fontSize: '1.8vh',
    position: 'relative',
    right: '70px',
    top: '30px',
  },
  divButtom: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
};

export default styles;
