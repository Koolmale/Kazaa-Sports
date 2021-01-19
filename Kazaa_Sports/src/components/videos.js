import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Element } from 'react-scroll'
import '../styles/videos.css'
import useStyles from '../styles/style'
import classNames from 'classnames'

function Videos({ links, styles }) {
	const classes = useStyles()

	return (
		<>
			{links.videos.map(({ name: sectionName, links: sectionLinks }) => (
				<Element name={sectionName}>
					<div className={classNames('videos', classes.header)}>
						<div className='title'> {sectionName} </div>

						{sectionLinks.map(url => (
							<ReactPlayer
								url={url}
								controls={true}
								className='video'
								{...styles}
							/>
						))}
					</div>
				</Element>
			))}
		</>
	)
}

export default Videos
