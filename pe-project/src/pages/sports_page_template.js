import React from 'react'
import SideNav from '../components/sidenav'
import { Element } from 'react-scroll'
import {Videos, Skills} from '../components/videos'
import { useTheme } from '@material-ui/core/styles'
import useStyles from '../styles/style'
import classNames from 'classnames'



export function Tutorial({children}) {
    return (
		<Element name='tutorial'>
            {children}
		</Element>
	)
}

export default function SportsPageTemplate({ children, title, links }) {
	const theme = useTheme()
	const classes = useStyles()


	return (
		<div
			id='sports-page-container'
			style={{
				backgroundColor: theme.palette.secondary.background,
				color: theme.palette.text.main,
			}}
		>
			<SideNav />
			<div id='body'>
				<Element name='articles'>
					<h1 className={classNames('title', classes.header)}>
						{title}
					</h1>
				</Element>
				{children}
				<Videos
					links={links}
					styles={{ width: '50vw', height: '28.125vw' }}
				/>

				<Skills
					links={links}
					styles={{ width: '50vw', height: '28.125vw' }}
				/>	
			</div>
		</div>
	)
}

SportsPageTemplate.defaultProps = {

}
