import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
    palette: {
        text: {
            primary: "#ffffff",
            secondary: "#ffffff",
        },
        primary: {
            main: '#1f1f1f',
        },
        secondary: {
            main: '#0c5f01',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                color: "#ffffff",
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: '#1f1f1f',
                color: '#ffffff'
            }
        }
    }
});
