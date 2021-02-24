import colors from '../../Constants/colors';

const Style = {

    container: {

        position: 'absolute',
        width: '1141px',
        height: '680px',
        display: 'flex',
        right: '150',
        bottom: '115',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: "20px"

    },

    sidebar: {
        position: 'absolute',
        width: '386px',
        height: '680px',
        display: 'center',
        background: '#222222',
        borderRadius: '20px 0px 0px 20px',
    },

    main: {

        position: '',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#BFBFBF',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },

    row: {
        content: '',
        position: 'absolute',
        right: '141px',
        top: '60px',
        display: 'table',
        clear: 'both',
    },

    text: {
        margin: '5px',
        font: 'Open-Sans',
        fontSize:'24px'

    }
}

export default Style;