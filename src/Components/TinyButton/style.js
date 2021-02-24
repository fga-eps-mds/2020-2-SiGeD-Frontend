import colors from '../../Constants/colors';

const Style={
    
    primary: {
        position: 'relative',
        font: 'Open Sans',
        fontSize:'24px',
        color: colors.secondary,
        style: 'normal',
        width: '150px',
        height: '40px',
        backgroundColor: colors.primary,
        borderRadius: '15px',
        border: `1px solid ${colors.primary}`,
        boxSizing: 'border-box',
        lineHeight: '20px',
        margin: '5px'

    },
    
    secondary: {
        position: 'relative',
        font: 'Open Sans',
        fontSize:'24px',
        color: colors.primary,
        style: 'normal',
        width: '150px',
        height: '40px',
        backgroundColor: colors.secondary,
        borderRadius: '15px',
        border: `1px solid ${colors.primary}`,
        boxSizing: 'border-box',
        lineHeight: '20px',
        margin: '5px'
    }
}

export default Style;