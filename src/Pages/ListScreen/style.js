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
        flexDirection: 'column',

    },

    header: {

        width: '65vw',
        height: 'min-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },

    title: {
        font: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '200%',
        lineHeight: '3rem',
        height: 'min-content',
    },

    contentBox: {
        width: '90%',
        height: '70%',
        background: '#F7F7F7',
        border: '1px solid #5E5E5E',
        boxSizing: 'border-box',
        borderRadius: '0.5rem',
        margin: '0 auto',
    },

    search: {

        display: 'flex',
        flexDirection: 'row',
        width: 'min-content',
        alignItems: 'center',
    } 

}

export default styles;