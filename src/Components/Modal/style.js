const styles = {
  modalBox: {
    position: 'fixed',
    width: '600px',
    height: '600px',
    top: '50%',
    left: '50%',
    marginTop: '-300px', /* Negative half of height. */
    marginLeft: '-300px', /* Negative half of width. */
    backgroundColor: 'red',
    borderRadius: '20px',
  },
  modalContent: {
    margin: '90px 50px',
    font: 'Open Sans',
  },
  colorPreview: {
    borderRadius: '100%',
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
};

export default styles;
