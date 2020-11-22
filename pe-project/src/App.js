import './styles/App.css'
import Home from './pages/home'
import Nav from './components/nav'
import StrengthTraining from './pages/strength_training'
import FootballHome from './pages/football_home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './styles/themes/main'




function App() {

	
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/strength-training'
							exact
							component={StrengthTraining}
						/>
						<Route
							path='/flag-football'
							exact
							component={FootballHome}
						/>
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
