import colors from '../../Constants/colors';

const styles={
    
    primary: {
        font: 'Open Sans',
        fontSize:'100%',
        color: colors.secondary,
        style: 'normal',
        width: '10vw',
        height: '4vh',
        backgroundColor: colors.primary,
        borderRadius: '1vw',
        border: `2% solid ${colors.primary}`,
        boxSizing: 'border-box',
        margin: '2%',

    },
    
    secondary: {
        font: 'Open Sans',
        fontSize:'100%',
        color: colors.primary,
        style: 'normal',
        width: '10vw',
        height: '4vh',
        backgroundColor: colors.secondary,
        borderRadius: '1vw',
        border: `2% solid ${colors.primary}`,
        boxSizing: 'border-box',
        margin: '2%'
    }
}

export default styles;