import React from 'react'
import links from '../components/videos/basket_ball_videos_list.json'
import SportsPageTemplate, { Tutorial } from './sports_page_template'

function Basketball() {
	return (
		<SportsPageTemplate title='Basketball' links={links}>
			<div className='paragraphs-container'>
				<h2 className='subtitle'>Introduction</h2>
				<p className='paragraph'>
					Basketball is a very popular sport that is played globally
					and is one of the biggest competitive events in the world,
					with it’s world cup gaining over 3 billion views in 2019.
					While greatly played intensely, it is also a sport that many
					enjoy playing casually, as it is a fun activity with lots of
					health benefits.{' '}
				</p>
				<Tutorial>
					<h2 className='subtitle'>How to play</h2>
				</Tutorial>
				<p className='paragraph'>
					The game consists of 2 teams, 2 hoops, and 1 ball. The
					members of each team try to put the ball into the other
					team’s hoop, while also defending their own hoop against the
					opposing side. Throughout the game, anyone in possession of
					the ball must bounce it on the floor as they move forward,
					and it is the opponent’s job to steal the ball from that
					player. As the game moves forward, for every score that team
					receives 2 points, unless they make the score past the 3
					point line, in which case that team receives an extra point
					in addition to the guaranteed 2. At the end of the game, the
					winning team is the team with the most amount of points.
				</p>
				<h2 className='subtitle'>Rules</h2>
				<div className='rules-container'>
					<ol className='rules'>
						<li>
							The ball can be thrown in any direction with one or
							both hands.
						</li>
						<li>
							The ball can be dribbled in any direction with one
							or both hands, but never with the fist.
						</li>
						<li>
							{' '}
							A player cannot run with the ball; the player must
							throw it from the spot on where he or she catches
							it, if they stopped dribbling it.
						</li>
						<li>
							The ball must be held in or between the hands. The
							arms or body can’t be used for holding it.
						</li>
						<li>
							No shouldering, holding, pushing, striking, or
							tripping an opponent.
						</li>
						<li>
							A technical foul is striking the ball with the fist.
						</li>
						<li>
							If a side makes three consecutive fouls, it counts
							as a goal for the opposing team.
						</li>
						<li>
							A goal is counted when the ball is thrown or shot
							from the ground into the hoop and either stays there
							or comes out of the other end.
						</li>
						<li>
							When the ball goes out of bounds, it is thrown into
							the field and played by the first person touching
							it.
						</li>
						<li>
							The umpire will be the judge of the players and will
							note the fouls and notify the referee when three
							consecutive fouls have been made.
						</li>
						<li>
							The referee will be the judge of the ball and decide
							when it is in play in bounds, to which side it
							belongs, and will keep the time.
						</li>
						<li>
							The time of the game is two 15-minute halves with a
							five-minute rest between.
						</li>
						<li>
							The side scoring the most goals in that time will be
							declared the winner.
						</li>
						<a
							className='link'
							href='https://sites.google.com/site/tec200jylproject3/home/the-13-original-rules-of-basketball'
							target='_blank'
							rel='noreferrer'
						>
							Source
						</a>
					</ol>
				</div>
			</div>
			<ul className='body-ul'>
				<h2 className='subtitle'>Health Benefits</h2>
				<li>
					<strong>Mental</strong> Basketball is a team-based game,
					which means that one of the biggest benefits of the game is
					creating a sense of belonging, as it brings you closer to
					the people you play with, and it allows you to develop
					better communication skills. Another great reward for
					playing this game is that it can increase your self
					confidence, “as you find your voice and learn more about who
					you are in a new situation. As a team, members can
					encourage, motivate, and support each other. They can also
					point out areas that need improvement, which can lead to
					positive growth.” Basketball can also act as a stress
					reliever, as it can help you hone your concentration skills
					by staying focused on the game.{' '}
					<a
						className='link'
						href='https://www.healthline.com/health/exercise-fitness/benefits-of-basketball'
						target='_blank'
						rel='noreferrer'
					>
						Source
					</a>
				</li>

				<li>
					<strong>Physical</strong> There are many physical benefits
					with playing basketball. The first and most obvious benefit
					is that it is an excellent workout for the upper body, and
					is overall a great way to stay fit. It also helps to improve
					motor coordination, flexibility, and endurance, greatly
					improving stamina the more you play. “It also encourages
					speed, agility, and strength. These skills are shown to have
					a positive effect on promoting a healthy body weight and
					encouraging more physical activity…”{' '}
					<a
						className='link'
						href='https://www.healthline.com/health/exercise-fitness/benefits-of-basketball'
						target='_blank'
						rel='noreferrer'
					>
						Source
					</a>
				</li>
			</ul>

			
		</SportsPageTemplate>
	)
}
export default Basketball
