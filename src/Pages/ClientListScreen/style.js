import colors from '../../Constants/colors';

const styles = {

  main: {

    backgroundColor: '#BFBFBF',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',

  },

  header: {

    width: '65vw',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  title: {
    font: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '5vh',
    lineHeight: '3rem',
    height: 'min-content',
    position: 'relative',
    left: '3rem',
    marginBottom: '5rem',
  },

  contentBox: {
    width: '90%',
    height: '60vh',
    background: '#BFBFBF',
    border: '1px solid #BFBFBF',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    margin: '0 auto',
    marginLeft: '3rem',
  },

  search: {

    display: 'flex',
    flexDirection: 'row',
    width: 'min-content',
    alignItems: 'center',
    marginLeft: '-25rem',
    marginTop: '2rem',
  },

  tableHeader: {

    backgroundColor: colors.primary,
    color: colors.secondary,
    height: '15%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '10px 10px 0px 0px',

  },

  p: {
    color: colors.secondary,
    fontWeight: '700',
    fontSize: '75%',
    padding: '0 10%',
  },

  bar: {
    width: '0.25%',
    height: '60%',
    borderRadius: '5px',
    backgroundColor: colors.secondary,
  },

  dataContainer: {

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '84%',
    width: '105%',

  },

  tableTitle: {

    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
};

export default styles;
