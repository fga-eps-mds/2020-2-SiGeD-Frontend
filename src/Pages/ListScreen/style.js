import { FaFileExcel } from 'react-icons/fa';
import colors from '../../Constants/colors';

const styles = {

    main: {

        backgroundColor: '#BFBFBF',
        width:'100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    container: {

        backgroundColor: 'white',
        width: '65vw',
        height: '70vh',
        boxShadow: '0vw 0.2vw 0.2vw rgba(0, 0, 0, 0.25)',
        borderRadius: '0.5vw',
        display: 'flex',



    },

    header: {

        width: '65vw',
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '2%',

    },

    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40px',
        lineHeight: '54px',
    }

}

export default styles;