import react from 'react'
import Videos from '../components/s-videos'


function Soccerhome() {
  return(
    <div id='soccer'>
      <h1 className='s-title'>
				Soccer
			</h1>

      <div className='s-paragraphs-container'>
        <div className='s-paragraphs'>
        Association football, more commonly known as football or soccer[a] (originally also spelled foot-ball), is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field called a pitch with a goal at each end. The object of the game is to outscore the opposition by moving the ball beyond the goal line into the opposing goal. The team with the higher number of goals wins the game.<br/>
        <a
							className='link'
							href='https://en.wikipedia.org/wiki/Association_football'
							target='_blank'
							rel='noreferrer'
						>Source</a>
        </div>

        <div className='s-paragraphs'>
        Football is played in accordance with a set of rules known as the Laws of the Game. The ball is 68–70 cm (27–28 in) in circumference and known as the football. The two teams each compete to get the ball into the other team's goal (between the posts and under the bar), thereby scoring a goal. The team that has scored more goals at the end of the game is the winner; if both teams have scored an equal number of goals then the game is a draw. Each team is led by a captain who has only one official responsibility as mandated by the Laws of the Game: to represent their team in the coin toss prior to kick-off or penalty kicks.<br/>
        <a
							className='link'
							href='https://en.wikipedia.org/wiki/Association_football'
							target='_blank'
							rel='noreferrer'
						>Source</a>
        </div>

        <h2>
        <a
							className='link'
							href='https://en.wikipedia.org/wiki/Association_football'
							target='_blank'
							rel='noreferrer'
						>Laws Of the Game</a></h2>

        <ul className='s-body-ul'>
          <li>
          A football match is played by two teams, with each allowed no more than 11 players on the field at any one time, one of whom is a goalkeeper.
          </li>
          <li>
          A match is played in two 45 minute halves
          </li>
          <li>
          The game begins with the toss of a coin, and the winning captain decides which goal to defend or to take the first kick off.
          </li>
          <li>
          All players must use their feet head or chest to play the ball. Only the goalkeeper is allowed to use their hands, and only within their designated goal area.
          </li>
          <li>
          The aim of the game is to score a goal, which is achieved by kicking or heading the ball into the opposition team's goal.
          </li>
          <li>
          If the ball touches or crosses the side line, it is thrown back in by the team that was not the last to touch the ball.
          </li>
          <li>
          The game is controlled by a central referee, and two linesmen. They award free kicks and penalties when rules are broken. For continual breaking of rules or for a bad foul, the player may be sent off.
          </li>
        </ul>
        
      </div>

      <Videos width='50vw' height='28.125vw' />
    </div>
  )
}

export default Soccerhome;