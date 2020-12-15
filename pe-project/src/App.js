import './styles/App.css'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from '@material-ui/styles'
import theme from './styles/themes/main'
import page_404 from './pages/page_404'

function App() {
	return (
		<Router>
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
						<Route
							path='/'
							component={page_404}
						/>
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
