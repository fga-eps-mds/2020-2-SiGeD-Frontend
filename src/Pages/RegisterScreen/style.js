import colors from '../../Constants/colors';

const styles = {

  container: {

    display: 'flex',
    background: colors.secondary,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '1.5vw',
    justifyContent: 'space-between',
    height: '70%',
    width: '65%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',

  },

  sidebar: {

    background: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    overflow: 'hidden',
  },

  main: {

    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    aligncontent: 'flex-end',
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
    height: '23vw',
    width: '23vw',
    marginTop: '5vh',
    color: colors.secondary,
  },

  sidebarDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  sidebarText: {
    color: colors.secondary,
    font: 'Open Sans',
    fontSize: '2vw',
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
};

export default styles;
