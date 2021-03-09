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

  // Opções
  options: {
    fontSize: '1.5vh',
    position: 'relative',
    left: '200px',
  },

  // Campo referente ao nome
  name: {
    marginTop: '12px',
    borderRadius: '15px',
    padding: '0.8vh',
    color: colors.secondary,
  },
};

export default styles;
