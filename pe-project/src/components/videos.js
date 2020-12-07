import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../styles/videos.css'

function Videos(props) {
	return (
		<div className='videos'>
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
	)
}

export default Videos
