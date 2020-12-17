import React from 'react'
import SideNav from '../components/sidenav'
import { Element } from 'react-scroll'
import Videos from '../components/videos'
import '../styles/sports_page.css'

export function Tutorial({children}) {
    return (
		<Element name='tutorial'>
            {children}
		</Element>
	)
}

export default function SportsPageTemplate({ children, title, links }) {
	return (
		<>
			<SideNav />
			<div id='body'>
				<Element name='articles'>
					<h1 className='title header'>{title}</h1>
				</Element>
				{children}
				<Videos
					links={links}
					styles={{ width: '50vw', height: '28.125vw' }}
				/>
			</div>
		</>
	)
}


