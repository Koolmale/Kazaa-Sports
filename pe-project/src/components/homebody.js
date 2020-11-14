import { requirePropFactory, Button } from '@material-ui/core'
import React from 'react'
import StickyFooter from 'react-sticky-footer';
import '../styles/homebody.css'

function Homebody() {
	return (
		<div id='body'>
			<div id='section'>
				<div id='section1'>
					<div>
						{/* <img src={require('../assets/logo.png')} /> */}
					</div>
					<div>
						<h1>Kazaa Sports</h1>
						<h3>Training for all your needs!</h3>
					</div>
				</div>

				<div id='section2'>
				<h2>Soccer</h2> 
				<Button variant="contained" size="large" color="primary" className='button'>
          			Tutorials
       			</Button>
				</div>

				<div id='section3'>
					<div id='section3txt'>
						<h2>Basketball</h2>
						<Button variant="contained" size="large" color="primary" className='button'>
						Tutorials
						</Button>
					</div>
				</div>

				<div id='section4'>
					<div>
						<h2>Flag Football</h2>
						<Button variant="contained" size="large" color="primary" className='button'>
							Tutorials
						</Button>
					</div>
				</div>

				<div id='section5'>
				<h2>Strength Training</h2>
				<Button variant="contained" size="large" color="primary" className='button'>
					Tutorials
				</Button>
				</div>


				<div>
				<StickyFooter
					bottomThreshold={50}
					normalStyles={{
					backgroundColor: " #53a54881",
					padding: "2rem"
					}}
					stickyStyles={{
					backgroundColor: "rgba(255,255,255,.8)",
					padding: "2rem"
					}}
				>
					Designed By Kazaa Sports &copy;
				</StickyFooter>
				</div>
			</div>
		</div>
	)
}

export default Homebody
