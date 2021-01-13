import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DescriptionIcon from '@material-ui/icons/Description'
import YouTubeIcon from '@material-ui/icons/YouTube'
import SportsIcon from '@material-ui/icons/Sports'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { scroller } from 'react-scroll'
import HideOnScroll from '../components/hideOnScroll'
import SportsOutlinedIcon from '@material-ui/icons/SportsOutlined'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},

	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},

	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerAlways: {
		backgroundColor: theme.palette.primary.main,
		// position: 'fixed',
		// display: 'block',
		// top: 'auto',
		// marginTop: '1vh',
		height: '100vh',
		borderTop: '2px solid' + theme.palette.secondary.main,
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

const initialSections = ['Articles', 'Tutorials']

export default function SideNav({ videos: videosJSON }) {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const [sections, setSections] = React.useState(initialSections)

	React.useEffect(() => {
		//to make sure if component reloads it doesnt keep on concatenating, so we reset state before
		setSections(initialSections)
		setSections(
			initialSections.concat(
				videosJSON.videos.map(videoSection => videoSection.name)
			)
		)
	}, [videosJSON])

	function ScrollDown(name) {
		scroller.scrollTo(name, {
			duration: 1000,
			delay: 100,
			smooth: true,
		})
		setOpen(false)
	}
	return (
		<>
			<div className={classes.root}>
				<CssBaseline />
				<HideOnScroll opposite={true}>
					<Drawer
						variant='permanent'
						className={clsx(classes.drawer, {
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						})}
						anchor='top'
						classes={{
							paper: clsx(classes.drawerAlways, {
								[classes.drawerOpen]: open,
								[classes.drawerClose]: !open,
							}),
						}}
					>
						<div className={classes.toolbar}>
							<IconButton onClick={() => setOpen(!open)}>
								{open ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
						</div>
						<Divider />
						<List>
							{sections.map(section => (
								<>
									<ListItem
										button
										onClick={() => ScrollDown(section)}
									>
										<ListItemIcon>
											<DescriptionIcon />
										</ListItemIcon>
										<ListItemText primary={section} />
									</ListItem>
									<Divider />
								</>
							))}
						</List>
					</Drawer>
				</HideOnScroll>
			</div>
		</>
	)
}
