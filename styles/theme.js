import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

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
        protectedTitle: pink['400'],
        type: 'light'
    }
})

export default theme