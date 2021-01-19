import React from 'react'
import links from '../components/videos/soccer_videos_list.json'
import SportsPageTemplate, { Tutorial } from '../components/sports_page_template'

function Soccer() {
	return (
		<SportsPageTemplate title='Soccer' links={links}>
			<div className='paragraph-container'>
				<div className='paragraph'>
				Soccer, or better known as football, is a team sport played with a spherical ball between two teams of 11 players. The game is played on a rectangular field called a pitch with a goal at each end. The goal of soccer is to move the ball beyond the goal line into the opposing goal and score more than the other team.  The team with the higher number of goals wins the game. It is the biggest sport on the planet, played by approximately 250 million players in over 200 countries and dependencies. From slums to high-rises, cities to suburbs, its played everywhere.
				<br />
				</div>

				<div className='paragraph'>
				There are a few major leagues for soccer across the globe, some being La Liga, The English Premeire League, MLS, and Bundesliga. Every 4 years, national teams come to compete in the FIFA World Cup, the most watched sporting event on the planet. Some of the top competitors include Argentina, Brazil, Germany, France, Egypt, Belgium, Spain, and Portugal, among others.
				<br />
				</div>

				<div className='paragraph'>
				Laws of the Game: The ball is 68–70 cm (27–28 in) in circumference and known as the football. The two teams each compete to get the ball into the other team's goal, which size depends on the level, and anywhere between the posts and under the bar. The team that has scored more goals at the end of the game is the winner, but if both teams have scored an equal number of goals then the game is a draw. The captains need to represent their team in the coin toss prior to kick-off or penalty kicks. Each team is led by a captain. The other players on the field consist of a Goalie, defenders, midfielders, stoppers, wingers, and strikers, among others.
				<br />
				</div>

				<Tutorial>
					<h2 className='subtitle header'>Laws Of the Game</h2>
				</Tutorial>

				<ul className='body-ul'>
					<li>
						A football match is played by two teams, with each
						allowed no more than 11 players on the field at any one
						time, one of whom is a goalkeeper.
					</li>
					<li>A match is played in two 45 minute halves</li>
					<li>
						The game begins with the toss of a coin, and the winning
						captain decides which goal to defend or to take the
						first kick off.
					</li>
					<li>
						All players must use their feet head or chest to play
						the ball. Only the goalkeeper is allowed to use their
						hands, and only within their designated goal area.
					</li>
					<li>
						The aim of the game is to score a goal, which is
						achieved by kicking or heading the ball into the
						opposition team's goal.
					</li>
					<li>
						If the ball touches or crosses the side line, it is
						thrown back in by the team that was not the last to
						touch the ball.
					</li>
					<li>
						The game is controlled by a central referee, and two
						linesmen. They award free kicks and penalties when rules
						are broken. For continual breaking of rules or for a bad
						foul, the player may be sent off.
					</li>
				</ul>
			</div>
		</SportsPageTemplate>
	)
}

export default Soccer
