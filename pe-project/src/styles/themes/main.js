import { createMuiTheme } from '@material-ui/core/styles'


export default createMuiTheme({
	palette: {
		primary: {
			// main: '#0D5C63',
			main: '#53A548',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			light: '#0066ff',
			main: '#830885',
			contrastText: '#fff',
		},
	},
})
