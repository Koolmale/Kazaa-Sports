import { createMuiTheme } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'

const lightText = '#380036'
const darkText = '#fff'
const lightContrast = '#830885'
const darkContrast = '#1b041b'
const lightBackground = '#d4d6b9'
const darkBackground = '#040c14'

const defaultTheme = createMuiTheme({
	palette: {
		primary: {
			//primary color, (navbar)
			main: '#214e34',
			//text color
		},
		secondary: {
			//second contrast color
			main: lightContrast,
			//background color
			background: '#d4d6b9',
		},
		text: {
			main: lightText
		}
	},
})

export default function useDarkTheme(isDark) {
	const [theme, setTheme] = useState(defaultTheme)

	useEffect(() => {
		setTheme({
			palette: {
				primary: {
					//primary color, (navbar)
					main: '#214e34',
				},
				secondary: {
					//second contrast color
					main: isDark ? darkContrast : lightContrast,
					//background color
					background: isDark ? darkBackground : lightBackground,
				},
				text: {
					main: isDark? darkText: lightText
				}
			},
		})
	}, [isDark])

	return createMuiTheme(theme)
}
