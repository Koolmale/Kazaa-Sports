import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../styles/flag_football.css'

function FlagFootball() {
	return (
		<div id='flag-football'>
			<h1 className='ff-title'>Flag Football</h1>

			<h2 className='ff-subtitle'>What is Flag Football?</h2>

			<p className='ff-paragraph'>Flag football is a version of American football
				where the basic rules of the game are similar to
				those of the mainstream game, however instead of
				tackling players to the ground, the defensive team
				must remove a flag or flag belt from the ball carrier
				("deflagging") to end a down, and contact is not
				permitted between players; it will result in a penalty
				for the team that initiates it.</p>

			<h2 className='ff-subtitle'>How to Play Flag Football/Rules:</h2>

			<div className='ff-rules-container'>
				<ul className='ff-rules'>
					<li>7 on 7</li>
					<li>NO tackling</li>
					<li>Must wait 2 seconds before rushing the QB</li>
					<li>Blitz: You have 5 blitz per half which allows you to rush the QB without waiting 2 seconds</li>
					<li>Scoring:
						<ul>
							<li>If you score within the 50 yard line it is worth 6 points</li>
							<li>If you score more than 50 yards out it is worth 7 points</li>
							<li>After converting a touchdown you are given one play to score extra points. You can either try and score from the 5, 10, or 20 yard lines, which will award you with 1, 2, or 3 extra points.</li>
						</ul>
					</li>
				</ul>

			</div>

			<div>
				<ReactPlayer
					url='https://www.youtube.com/watch?v=jLOrCDQ8bW8'
					controls={true}
					className='ff-rules-video'
					width = '50vw'
					height = '28.125vw'
				/>
			</div>


			


		</div>
	)
}

export default FlagFootball;