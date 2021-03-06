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

    marginTop: '15vh',
    backgroundColor: 'white',
    width: '65vw',
    height: '70vh',
    boxShadow: '0vw 0.2vw 0.2vw rgba(0, 0, 0, 0.25)',
    borderRadius: '0.5vw',
    display: 'flex',
    flexDirection: 'column',

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
  },

  contentBox: {
    width: '90%',
    height: '70%',
    background: '#F7F7F7',
    border: '1px solid #5E5E5E',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    margin: '0 auto',
    overflow: 'hidden',
  },

  search: {

    display: 'flex',
    flexDirection: 'row',
    width: 'min-content',
    alignItems: 'center',
    position: 'relative',
    marginRight: '0',
  },

  header2: {

    backgroundColor: colors.primary,
    color: colors.secondary,
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  p: {
    color: colors.secondary,
    fontWeight: '700',
    fontSize: '75%',
    padding: '0 5%',
  },

  barra: {
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
    overflowX: 'hidden',
    width: '96%',
    overflow: 'scroll',
    marginLeft: '4%',

  },

  title2: {

    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

};

export default styles;
