import StrengthTraining from './pages/strength_training'
import Home from './pages/home'
import About from './pages/about'
import FlagFootball from './pages/flag_football'
import Basketball from './pages/basketball'

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/strength-training',
		component: StrengthTraining,
	},
	{
		path: '/flag-football',
		component: FlagFootball,
	},
	{
		path: '/basketball',
		component: Basketball,
	},
	{
		path: '/about',
		component: About,
	},
]

export default routes
