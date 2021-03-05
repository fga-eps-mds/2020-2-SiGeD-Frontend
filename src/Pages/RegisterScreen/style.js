import colors from '../../Constants/colors';

const styles = {

  container: {

    display: 'flex',
    background: colors.secondary,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '1.5vw',
    justifyContent: 'space-between',
    width: '65%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: '15vh',
    marginBottom: '10vh',

  },

  sidebar: {

    background: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    overflow: 'hidden',
  },

  main: {

    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    aligncontent: 'center',
  },

  row: {

    clear: 'both',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '70%',
    height: '100%',
    overflow: 'hidden',

  },

  peopleIcon: {
    height: '10vw',
    width: '10vw',
    marginTop: '20%',
    color: colors.secondary,
    marginBottom: '8%',
  },

  sidebarDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  sidebarText: {
    color: colors.secondary,
    font: 'Open Sans',
    fontSize: '1.5vw',
    display: 'flex',
    flexWrap: 'wrap',
  },

  divButtom: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  divInputs: {
    width: '100%',
  },

};

export default styles;
