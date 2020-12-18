import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Element } from 'react-scroll'
import '../styles/videos.css'
import useStyles from '../styles/style'
import classNames from 'classnames'

function Videos(props) {
	const classes = useStyles()
	
	return (
		<Element name='videos'>
			<div className={classNames('videos', classes.header)}>
				<div className='title'> Videos </div>

				{props.links.videos.map(url => (
					<ReactPlayer
						url={url}
						controls={true}
						className='video'
						{...props.styles}
					/>
				))}
			</div>
		</Element>
	)
}

export default Videos
