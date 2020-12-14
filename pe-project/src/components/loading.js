import React from 'react'

function loading() {
    return (
		<div>
			<img
				className='loading-img'
				style={{ display: 'block', margin: '0 auto', width: '17vw'}}
				src='https://media.giphy.com/media/r5DvDR0YkVDkk/giphy.gif'
				alt='loading'
			/>
		</div>
	)
}

export default loading
