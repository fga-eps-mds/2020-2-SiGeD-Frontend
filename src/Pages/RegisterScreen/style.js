import colors from '../../Constants/colors';

const Style = {

    container: {

        position: 'absolute',
        width: '1141px',
        height: '680px',
        display: 'flex',
        right: '150',
        bottom: '115',
        background: colors.secondary,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: "20px"

    },

    sidebar: {
        position: 'absolute',
        width: '386px',
        height: '680px',
        background: colors.primary,
        borderRadius: '20px 0px 0px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

    },

    peopleIcon: {

        color: colors.secondary,
        position: 'absolute',
        height: '180px',
        width: '180px',
        top: '88px'     
    },

    sidebarDiv: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: '293px'
    },

    sidebarText: {
        margin:'5px',
        color: colors.secondary        
    }
}

export default Style;