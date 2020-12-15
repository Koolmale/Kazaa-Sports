import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Element } from 'react-scroll'
import '../styles/videos.css'

function Videos(props) {
	return (
		<Element name='videos'>
			<div className='videos header'>
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
