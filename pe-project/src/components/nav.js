import React from 'react'
import { AppBar, MenuItem } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/Close'
import logo from '../assets/logo.png'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},

	tabs: {
		backgroundColor: '#53A548',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	search: {
		position: 'absolute',
		right: '2vw',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: '1vw',
		width: '20vw',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
		// '@media (max-width: 600px)': {
		// 	width: '12ch',
		// },
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},

	navElements: {
		minWidth: '0px',
		margin: '0 0.5vw',
		color: '#fff',
		fontSize: '1.75rem',
		'&:hover': {
			color: '#830885',
			transition: 'all .5s ease',
		},
	},

	hidden: {
		display: 'none',
	},

	tabsContainer: {
		margin: '0 15%',
	},
}))

function Nav(props) {
	const classes = useStyles()
	const screen_size_medium = useMediaQuery('(max-width: 1159px)')
	const screen_size_small = useMediaQuery('(max-width: 720px)')
	const [clicked, setClicked] = React.useState(false)
	const navRef = React.useRef(null)

	return (
		<nav>
			<div className={classes.root}>
				<AppBar position='relative' color='primary' ref={navRef}>
					<Toolbar>
						{screen_size_medium && (
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='open drawer'
								onClick={() =>
									setClicked(prevClicked => !prevClicked)
								}
							>
								{clicked ? (
									<CloseIcon style={{ fontSize: '3rem' }} />
								) : (
									<MenuIcon style={{ fontSize: '3rem' }} />
								)}
							</IconButton>
						)}
						<img src={logo} id='logo' alt='logo' />

						<div id='title'>Kazaa Sports</div>

						{screen_size_medium || (
							<Tabs
								value={false}
								variant='fullWidth'
								className={classes.tabsContainer}
							>
								<NavTabs className={classes.navElements} />
							</Tabs>
						)}
						{screen_size_small || <Search classes={classes} />}
					</Toolbar>
				</AppBar>
			</div>
			{screen_size_medium && (
				<MobileNav
					clicked={clicked}
					handleClose={() => setClicked(false)}
					navRef={navRef}
					classes={classes}
					show_search={screen_size_small}
				/>
			)}
		</nav>
	)
}

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		backgroundColor: '#53A548',
	},
})(props => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
))

const StyledMenuItem = withStyles(theme => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem)

function Search({ classes }) {
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search…'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
				style={{ fontSize: '1.5vw' }}
			/>
		</div>
	)
}

function NavTabs(props) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<Tab {...props} label='Home' href='/' />
			<Tab
				{...props}
				label='Sports'
				aria-controls='customized-menu'
				aria-haspopup='true'
				variant='contained'
				onClick={handleClick}
			/>
			<Tab {...props} label='About' href='/' />
		

			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				variant='menu'
			>
				<Tabs orientation='vertical' variant='fullWidth' value={false}>
					<StyledMenuItem>
						<Tab {...props} label='Soccer' href='/' />
					</StyledMenuItem>

					<StyledMenuItem>
						<Tab {...props} label='Football' href='/' />
					</StyledMenuItem>

					<StyledMenuItem>
						<Tab {...props} label='Basketball' href='/' />
					</StyledMenuItem>

					<StyledMenuItem>
						<Tab
							{...props}
							label='Strength Training'
							href='/strength-training'
						/>
					</StyledMenuItem>
				</Tabs>
			</StyledMenu>
		</>
	)
}

function MobileNav({ classes, clicked, handleClose, navRef, show_search }) {
	return (
		<StyledMenu
			id='customized-menu'
			anchorEl={navRef.current}
			keepMounted
			open={clicked}
			onClose={handleClose}
			variant='menu'
		>
			<Tabs
				orientation='vertical'
				variant='fullWidth'
				style={{ width: '100vw' }}
				value={false}
			>
				<NavTabs className={classes.navElements}/>
			</Tabs>
		</StyledMenu>
	)
}

export default Nav
