import { requirePropFactory, Button } from '@material-ui/core'
import React from 'react'
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
					<div id='section3img'>
						<img src='https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1581678662/DCUK/Content/iStock-959080376.jpg' alt='basketball'/>
					</div>
					<div id='section3txt'>
						<h3>Basketball</h3>
						<Button variant="contained" size="large" color="primary" className='button'>
						Tutorials
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homebody
