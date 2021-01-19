import React from 'react'
import SideNav from '../components/sidenav'
import { Element } from 'react-scroll'
import Videos from '../components/videos'
import { useTheme } from '@material-ui/core/styles'
import useStyles from '../styles/style'
import classNames from 'classnames'
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import YouTubeIcon from '@material-ui/icons/YouTube'
import WebIcon from '@material-ui/icons/Web'
import LinkIcon from '@material-ui/icons/Link'


export function Tutorial({ children }) {
	return <Element name='Tutorial'>{children}</Element>
}

const useListStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.secondary.background,
		marginBottom: '10vh',
		marginTop: '3vh',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}))

function ReferenceSublist({ section, classes }) {
	const [open, setOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(!open)
	}


	return (
		<>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<section.icon />
				</ListItemIcon>
				<ListItemText primary={section.name} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>

			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component='div'>
					{section.links.map(link => (
						<Link href={link} target='_blank' rel='noreferrer' color = 'primary' underline = 'hover'>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={link} />
							</ListItem>
						</Link>
					))}
				</List>
			</Collapse>
		</>
	)
}

function References({ ReferencesList }) {
	const classes = useListStyles()

	return (
		<Element name='More Information'>
			<div className='title'>More Information</div>

			<List
				component='nav'
				aria-labelledby='nested-list-subheader'
				className={classes.root}
			>
				{ReferencesList.map(section => (
					<ReferenceSublist section={section} classes={classes} />
				))}
			</List>
=======



export function Tutorial({children}) {
    return (
		<Element name='Tutorial'>
            {children}
>>>>>>> f28fd1ca6ed87297bc6e07450159944f409cebcc
		</Element>
	)
}

<<<<<<< HEAD


export default function SportsPageTemplate({
	children,
	title,
	links,
	websiteLinks = [],
	youtubeLinks = [],
}) {
	const theme = useTheme()
	const classes = useStyles() 

	const referenceLinks = [
		{
			name: 'Youtube Channels',
			icon: YouTubeIcon,
			links: youtubeLinks,
		},
		{
			name: 'Websites',
			icon: WebIcon,
			links: websiteLinks,
		},
	]

	const Sections = [
		{
			name: 'Articles',
			icon: 'Description',
		},
		{
			name: 'Tutorial',
			icon: 'Sports',
		},
		...links.videos,
		{
			name: 'More Information',
			icon: 'LibraryBooks',
		},
	]
=======
export default function SportsPageTemplate({ children, title, links }) {
	const theme = useTheme()
	const classes = useStyles()

>>>>>>> f28fd1ca6ed87297bc6e07450159944f409cebcc

	return (
		<div
			id='sports-page-container'
			style={{
				backgroundColor: theme.palette.secondary.background,
				color: theme.palette.text.main,
			}}
		>
<<<<<<< HEAD
			<SideNav sections={Sections} />
=======
			<SideNav videos={links}/>
>>>>>>> f28fd1ca6ed87297bc6e07450159944f409cebcc
			<div id='body'>
				<Element name='Articles'>
					<h1 className={classNames('title', classes.header)}>
						{title}
					</h1>
				</Element>
				{children}
				<Videos
					links={links}
<<<<<<< HEAD
					styles={{ width: '75vw', height: '42.1875vw' }}
				/>
				<References ReferencesList={referenceLinks} />
=======
					styles={{ width: '50vw', height: '28.125vw' }}
				/>

>>>>>>> f28fd1ca6ed87297bc6e07450159944f409cebcc
			</div>
		</div>
	)
}
<<<<<<< HEAD
=======

SportsPageTemplate.defaultProps = {

}
>>>>>>> f28fd1ca6ed87297bc6e07450159944f409cebcc
