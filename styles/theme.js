import { createMuiTheme } from '@material-ui/core/styles'

const redHatText = {
    fontFamily: 'Red Hat Text',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400
}

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#ffffff',
            main: '#f7f2e7',
            dark: '#c4bfb5',
            contrastText: '#575757',
        },
        secondary: {
            light: '#ffffff',
            main: '#d9e4dd',
            dark: '#a8b2ab',
            contrastText: '#575757',
        },
        openTitle: '#3f4771',
        protectedTitle: '#d9e4dd',
        type: 'light'
    },
    typography: {
        fontFamily: 'Red Hat Text, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [redHatText],
            },
        },
    },
})

export default theme