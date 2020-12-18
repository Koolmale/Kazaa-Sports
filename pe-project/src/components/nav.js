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
import { Redirect, Link } from 'react-router-dom'
import HideOnScroll from '../components/hideOnScroll'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},

	offset: theme.mixins.toolbar,

	tabs: {
		backgroundColor: theme.palette.primary.main,
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
	},

	mobileSearch: {
		position: 'absolute',
		left: 'calc(50% - 8ch)',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
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
			transform: 'translateY(-5px)',
			borderBottom: '2px solid' + theme.palette.secondary.main,
			transition: 'transform .2s ease',
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
	const screen_size_medium = useMediaQuery('(max-width: 1450px)')
	const screen_size_small = useMediaQuery('(max-width: 720px)')
	const [clicked, setClicked] = React.useState(false)
	const navRef = React.useRef(null)

	return (
		<>
			<div className={classes.root}>
				<HideOnScroll>
					<nav>
						<AppBar position='fixed' color='primary' ref={navRef}>
							<Toolbar>
								{screen_size_medium && (
									<IconButton
										edge='start'
										className={classes.menuButton}
										color='inherit'
										aria-label='open drawer'
										onClick={() =>
											setClicked(
												prevClicked => !prevClicked
											)
										}
									>
										{clicked ? (
											<CloseIcon
												style={{ fontSize: '3rem' }}
											/>
										) : (
											<MenuIcon
												style={{ fontSize: '3rem' }}
											/>
										)}
									</IconButton>
								)}

								<img src={logo} id='logo' alt='logo' />

								<div id='title'>
									{' '}
									<Link
										to='/'
										style={{
											textDecoration: 'none',
											color: 'white',
										}}
									>
										{' '}
										Kazaa Sports{' '}
									</Link>
								</div>

								{screen_size_medium || (
									<Tabs
										value={false}
										variant='fullWidth'
										className={classes.tabsContainer}
									>
										<NavTabs
											className={classes.navElements}
										/>
									</Tabs>
								)}
								{screen_size_small || (
									<Search classes={classes} />
								)}
							</Toolbar>
						</AppBar>
						<div className={classes.offset} />
						{screen_size_medium && (
							<MobileNav
								clicked={clicked}
								handleClose={() => setClicked(false)}
								onSearch={() => setClicked(false)}
								navRef={navRef}
								classes={classes}
								show_search={screen_size_small}
							/>
						)}
					</nav>
				</HideOnScroll>
			</div>
			<div className={classes.offset} />
		</>
	)
}

const StyledMenu = withStyles(theme => ({
	paper: {
		border: '1px solid' + theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.primary.main,
	},
}))(props => (
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
		minHeight: '5vh',
	},
}))(MenuItem)

function Search({ classes, mobile, onSearch }) {
	const [searchTerm, setSearchTerm] = React.useState('')
	const [searched, setSearched] = React.useState(false)

	return (
		<div className={mobile ? classes.mobileSearch : classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search…'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				onKeyUp={event => {
					if (event.key === 'Enter') {
						setSearched(true)
						onSearch && onSearch()
					}
				}}
				fullWidth={mobile}
				onChange={e => setSearchTerm(e.target.value)}
				inputProps={{ 'aria-label': 'search' }}
				style={{ fontSize: '1.5vw' }}
				value={searchTerm}
			/>
			{searched && <Redirect to={`/search/${searchTerm}`} />}
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
			<Tab {...props} label='About' href='/about' />

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
						<Tab {...props} label='Soccer' href='/soccer' />
					</StyledMenuItem>

					<StyledMenuItem>
						<Tab
							{...props}
							label='Football'
							href='/flag-football'
						/>
					</StyledMenuItem>

					<StyledMenuItem>
						<Tab {...props} label='Basketball' href='/basketball' />
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

function MobileNav({
	classes,
	clicked,
	handleClose,
	navRef,
	show_search,
	onSearch,
}) {
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
				{show_search && (
					<div
						style={{
							height: '5vh',
							width: '100vw',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							justifyItems: 'center',
							position: 'relative',
						}}
					>
						<Search
							classes={classes}
							mobile={show_search}
							onSearch={onSearch}
						/>
					</div>
				)}
				<NavTabs className={classes.navElements} />
			</Tabs>
		</StyledMenu>
	)
}

export default Nav
