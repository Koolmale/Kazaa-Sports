import { Button } from '@material-ui/core'
import React from 'react'
import StickyFooter from 'react-sticky-footer'
import logo from '../assets/logo.png'
import {makeStyles } from '@material-ui/core/styles'
import '../styles/home.css'



const useStyles = makeStyles(theme => ({
	button: {
		minWidth: '15vw',
		height: '10vh',
		width: '15vmax',
		fontSize: '1.5rem'
	}
}))

function Home() {
	const classes = useStyles()
	return (
		<div id='body'>
			<div id='section'>
				<div id='section1'>
					<div>
						<img src={logo} alt='logo-img' className='logo-img' />
					</div>
					<div>
						<div className='h1-text'>Kazaa Sports</div>
						<div className='h3-text'>
							Training for all your needs!
						</div>
					</div>
				</div>

				<div id='section2'>
					<div className='header-text'>Soccer</div>
					<Button
						variant='contained'
						size='large'
						color='secondary'
						className={classes.button}
					>
						Tutorials
					</Button>
				</div>

				<div id='section3'>
					<div id='section3txt'>
						<div className='header-text'>Basketball</div>
						<Button
							variant='contained'
							size='large'
							color='secondary'
							className={classes.button}
						>
							Tutorials
						</Button>
					</div>
				</div>

				<div id='section4'>
					<div>
						<div className='header-text'>Flag Football</div>

						<Button
							variant='contained'
							size='large'
							color='secondary'
							className={classes.button}
						>
							Tutorials
						</Button>
					</div>
				</div>

				<div id='section5'>
					<div>
						<div className='header-text'>Strength Training</div>
						<Button
							variant='contained'
							size='large'
							color='secondary'
							className={classes.button}
							href = '/strength-training'
						>
							Tutorials
						</Button>
					</div>
				</div>

				<footer>
					<StickyFooter
						bottomThreshold={50}
						normalStyles={{
							backgroundColor: ' #53a54881',
							padding: '2rem',
						}}
						stickyStyles={{
							backgroundColor: 'rgba(255,255,255,.8)',
							padding: '2rem',
						}}
					>
						Designed By Kazaa Sports &copy;
					</StickyFooter>
				</footer>
			</div>
		</div>
	)
}

export default Home
