import './styles/App.css'
import React from 'react'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import ThemeContext from './styles/themes/themeContext'
import useDarkTheme from './styles/themes/useDarkThemeHook'
import page_404 from './pages/page_404'

function App() {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkTheme, setDarkThemeState] = React.useState(
		Number(window.localStorage.getItem('darkTheme')) ?? prefersDark

	)

	function setDarkTheme(val) {
		//I store it as a number so it can be converted to a boolean easily. If i store it as a boolean, it will become "true" or "false", and its harder to convert
		window.localStorage.setItem('darkTheme', Number(val))
		setDarkThemeState(val)
		
	}
	const theme = useDarkTheme(darkTheme)

	return (
		<Router>
			<ThemeContext.Provider value={{ darkTheme, setDarkTheme}}>
				<ThemeProvider theme={theme}>
					<div className='App'>
						<Nav />
						<Switch>
							{routes.map(route => (
								<Route
									path={route.path}
									exact
									component={props => (
										<route.component {...props} />
									)}
								/>
							))}
							<Route path='/' component={page_404} />
						</Switch>
					</div>
				</ThemeProvider>
			</ThemeContext.Provider>
		</Router>
	)
}

export default App
