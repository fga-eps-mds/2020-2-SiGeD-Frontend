import colors from '../../Constants/colors';

const styles = {
  main: {
    backgroundColor: '#BFBFBF',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    marginTop: '10vh',
    width: '80vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    width: '80vw',
    height: 'min-content',
    justifyContent: 'space-between',
  },

  title: {
    font: 'Open Sans',
    fontWeight: '400',
    fontSize: '3vh',
  },

  // Toda a caixa
  contentBox: {
    width: '100%',
    height: '45%',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    margin: '0 auto',
    overflow: 'hidden',
  },

  // Campo de busca
  search: {
    width: 'min-content',
    alignItems: 'center',
    margin: '1vw 0',
  },

  // Caixa preta (nome, descrição e ultima atualização), toda ela
  tableHeader: {
    backgroundColor: colors.primary,
    color: colors.secondary,
    height: '4.8vh',
    display: 'flex',
    flexDirection: 'row',
  },

  // Texto que esta contido na caixa preta
  p: {
    color: colors.secondary,
    fontSize: '1.1vh',
    textAlign: 'center',
    padding: '0 5%',
    marginTop: '12px',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Barra que separa os titulos da caixa preta
  bar: {
    width: '0.05%',
    height: '35%',
    borderRadius: '3px',
    marginTop: '1.5vh',
    backgroundColor: colors.secondary,
  },

  // Cada item da caixa preta
  tableTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divButtom: {
    float: 'right',
    display: 'flex',
    height: '18%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bolder',
    fontSize: '8px',
    padding: '10px 15px',
    borderRadius: '10px',
  },

  buttonSearchContainer: {
    display: 'flex',
    width: '100%%',
  },
};

export default styles;
