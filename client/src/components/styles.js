export const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#222831',
            // backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        background: theme.palette.common.white,
        boxShadow: '0 20px 50px rgba(8, 112, 184, 0.7)',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    gradient: {
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        border: 'borderLeft',
        borderRadius: 22,
        color: 'white',
        height: 40,
        margin: theme.spacing(3, 0, 2),
        padding: '0 60px',
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    items: {
        background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
        color: 'white',
        marginTop: theme.spacing(1),
        borderRadius: 22,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;',
        },
    },
    icons: {
        justifyContent: 'flex-end'
    },
    fab: {
        marginRight: theme.spacing(1)
    }
});