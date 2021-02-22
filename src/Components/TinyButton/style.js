import colors from '../../Constants/colors';

const Style={
    
    primary: {
        font: 'Open Sans',
        color: colors.secondary,
        style: 'normal',
        width: '150px',
        height: '40px',
        backgroundColor: colors.primary,
        borderRadius: '15px',
        border: `1px solid ${colors.primary}`,
        boxSizing: 'border-box',
        size: '24px',
        lineHeight: '20px'
    },
    
    secondary: {
        font: 'Open Sans',
        color: colors.primary,
        style: 'normal',
        width: '150px',
        height: '40px',
        backgroundColor: colors.secondary,
        borderRadius: '15px',
        border: `1px solid ${colors.primary}`,
        boxSizing: 'border-box',
        size: '24px',
        lineHeight: '20px',
    }
}

export default Style;