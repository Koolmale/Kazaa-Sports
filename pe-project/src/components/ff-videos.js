import React from 'react'
import ReactPlayer from 'react-player/youtube'
import links from './videos/ff-videos.json'

function ff_videos(props) {
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

export default ff_videos
