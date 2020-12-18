import { createMuiTheme } from '@material-ui/core/styles'



const text = '#380036'

export default createMuiTheme({
	palette: {
		primary: {
			//primary color, (navbar)
			main: '#214e34',
			//text color
			text: text,
		},
		secondary: {
			//second contrast color
			main: text,
			//background color
			background: '#d4d6b9',

			// light: '#040c14',
			// contrastText: '#fff',
		},
	},
})
 