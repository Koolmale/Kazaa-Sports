import React from 'react'
import ReactPlayer from 'react-player/youtube'
import links from './videos/strength_training_videos_list.json'

function strength_training_videos(props) {
	return (
		<div className='videos'>
			<div className='st-title'> Videos </div>

			{links.videos.map(url => (
				<ReactPlayer
					url={url}
					controls={true}
                    className='video'
                    {...props}
				/>
			))}
			
		</div>
	)
}

export default strength_training_videos
