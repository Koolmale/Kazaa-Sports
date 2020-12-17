import React from 'react'
import links from '../components/videos/strength_training_videos_list.json'
import SportsPageTemplate, { Tutorial } from './sports_page_template'

function StrengthTraining() {
	return (
		<SportsPageTemplate title='Strength Training 101: How to Get Started' links = {links}>

			<div className='paragraph-container'>
				<p className='paragraph'>
					If you want to kick your fitness routine up a notch,
					consider giving the treadmill a break and showing the loaded
					barbells some love. You’ll still sweat those calories off
					with the added benefit of toning your body. But what is
					strength training, exactly? To put it simply, strength
					training (a.k.a. resistance training) involves using your
					own bodyweight or tools, like dumbbells or resistance bands,
					to build muscle mass, strength, and endurance.
				</p>

				<p className='paragraph'>
					If you’re new to the weight room, getting started might seem
					a little intimidating, but implementing strength training
					into your fitness routine doesn’t mean you have to
					completely say bye to your preferred workout. You can start
					by practicing resistance training just a few times a week,
					says Sarah Revenig, CSCS, trainer at Soho Strength Lab. “As
					you adapt, you can increase your frequency of training.”
				</p>

				<p className='paragraph'>
					It usually takes a few weeks to start seeing results, but
					strength training is a sure way to build rock-solid abs,
					load up on your booty gains, or seriously sculpt that part
					of your body you’ve been determined to tone up. It also
					keeps your system burning calories even long after you’ve
					left the gym, a benefit that makes strength training worth
					it for those with weight loss goals. Here’s a quick guide on
					strength training for those ready to get started.
				</p>

				<Tutorial>
					<h2 className='subtitle header'>
						Different Types Of Strength Training
					</h2>
				</Tutorial>

				<ul class='body-ul'>
					<li>
						<strong>Muscle Endurance Training: </strong>Revenig
						recommends beginners start by lifting a higher volume,
						meaning more reps and sets, of lighter weights. "This
						allows your tissues to build up tolerance for more
						intense training programs,” she explains. “You can't
						expect to make progress when you constantly have to stop
						because you're completely out of breath.”
					</li>
					<li>
						<strong>Circuit Training: </strong>
						<a
							class='link'
							href='https://www.womenshealthmag.com/fitness/a29857553/circuit-training/'
							target='_blank'
							rel='noreferrer'
							data-vars-ga-outbound-link='https://www.womenshealthmag.com/fitness/a29857553/circuit-training/'
						>
							Circuit training
						</a>{' '}
						involves going through a series of several exercises
						until you reach the last one, resting, and then
						repeating all the moves again (and potentially again,
						and again). Revenig says you can modify this kind of
						workout to align with your personal goals. “You can
						manipulate your work-to-rest ratio in circuits depending
						on what kind of training effect you're after," explains
						Revenig.{' '}
					</li>
					<li>
						<strong>Hypertrophy Training:</strong> Strength training
						does build muscle, and it can be used to increase the
						size of your muscles too...but only if you're doing a
						type of strength training called{' '}
						<a
							className='link'
							href='https://www.womenshealthmag.com/fitness/a29514236/what-is-hypertrophy/'
							target='_blank'
							rel='noreferrer'
							data-vars-ga-outbound-link='https://www.womenshealthmag.com/fitness/a29514236/what-is-hypertrophy/'
						>
							hypertrophy
						</a>
						. So anyone who's worried that you’ll end up looking
						like a bodybuilder just because you picked up a weight,
						don’t be. “An increase in muscle size does NOT equate to
						bulking unless you are eating to gain mass as well,”
						says Revenig. You also have to be lifting medium to high
						reps of a moderate to heavy weight consistently to see
						significant changes to the size of your muscles, FYI. In
						other words, strength training a couple times a week
						isn't going to do the trick.
					</li>
					<li>
						<strong>Max Strength Training: </strong>Revenig suggests
						transitioning into this type of training once you’ve
						built up your muscle endurance and mastered basic form.
						This kind of training involves bringing your number of
						repetitions down to about 3–6 and increasing the amount
						of weight you’re lifting.
					</li>
				</ul>
			</div>
		</SportsPageTemplate>
	)
}
export default StrengthTraining
