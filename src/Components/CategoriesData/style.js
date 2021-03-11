import colors from '../../Constants/colors';

const styles = {
  // Caixa da categoria
  personalbox: {
    width: '100%',
    height: '5.5vh',
    fontSize: '1.5vh',
    backgroundColor: colors.secondary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1.5vh',
    borderRadius: '15px',
    overflow: 'hidden',
  },

  // Espaço reservado para cada valor da categoria
  tableContent: {
    display: 'flex',
    justifyContent: 'center',
  },

  // Campo referente ao nome
  name: {
    marginTop: '12px',
    borderRadius: '20px',
    padding: '12px',
    color: colors.secondary,
  },
  // Caixa
  box: {
    backgroundColor: '#FFFFFF',
    border: '1px solid black',
    borderRadius: '12px',
    display: 'inline-block',
    position: 'fixed',
  },
  // Lista
  ul: {
    listStyleType: 'none',
    paddingInlineStart: '0',
    margin: '0',
  },
  // Item
  li: {
    margin: '1vh',
  },
  // Icones
  icon: {
    float: 'right',
    margin: '0 1vh',
  },
  // Botões
  button: {
    border: 'none',
    backgroundColor: '#FFFFFF',
    fontSize: '1.3vh',
  },
};

export default styles;
