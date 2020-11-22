import React from 'react'
import '../styles/flag_football.css'
import Videos from '../components/ff-videos'

function FlagFootball() {
	return (
		<div id='flag-football'>
			<div id='ff-contain'>
			<h1 className='ff-title'>Flag Football</h1>

			<h2 className='ff-subtitle'>What is Flag Football?</h2>

			<p className='ff-paras'>
			Flag football is a version of American football where the basic rules of the game are similar to those of the mainstream game, however instead of tackling players to the ground, the defensive team must remove a flag or flag belt from the ball carrier ("deflagging") to end a down, and contact is not permitted between players; it will result in a penalty for the team that initiates it.
			</p>

			<h2 className='ff-subtitle'>How to Play Flag Football & Rules</h2>
			<h3 >Watch this <a href='https://youtu.be/jLOrCDQ8bW8' target='_blank'>Video</a></h3>
			<p>Key Take-aways--</p>

			<ul className='ff-body-ul'>
				<li>7 on 7 </li>
				<li>NO tackling</li>
				<li>You must wait 2 seconds before tackling the QB</li>
				<li>Blitz: You have 5 blitz per half which allows you to rush the QB without waiting 2 seconds</li>
				<li>Scoring:</li>
					<ul>
						<li>If you score within the 50 yard line it is worth 6 points</li>
						<li>If you score more than 50 yards out it is worth 7 points</li>
						<li>After converting a touchdown you are given one play to score extra points. You can either try and score from the 5, 10, or 20 yard lines, which will award you with 1, 2, or 3 extra points.</li>
					</ul>
			</ul>
			</div>

			<Videos width = '50vw' height = '28.125vw' />
		</div>
	)
}

export default FlagFootball
