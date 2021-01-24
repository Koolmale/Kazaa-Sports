import React from 'react'
import links from '../components/videos/strength_training_videos_list.json'
import classNames from 'classnames'
import SportsPageTemplate, { Tutorial } from '../components/sports_page_template'
import useStyles from '../styles/style'

const websiteLinks = [
	'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670',
	'https://www.healthline.com/health/exercise-fitness/strength-training-at-home',
	'https://www.verywellfit.com/complete-beginners-guide-to-strength-training-1229585',
	'https://www.womenshealthmag.com/fitness/a30522035/what-is-strength-training/',
	'https://www.nbcnews.com/better/lifestyle/30-day-strength-training-routine-no-equipment-required-ncna988936',
	'https://www.webmd.com/fitness-exercise/ss/slideshow-start-strength-training',

]
const youtubeLinks = [
	'https://www.youtube.com/user/KozakSportsPerform',
	'https://www.youtube.com/channel/UCy7yy0MfVV_bI9xB7Ny1ykQ',
	'https://www.youtube.com/user/joannasohofficial',
	'https://www.youtube.com/user/FitnessBlender',
	'https://www.youtube.com/user/heatherrobertsoncom'
]

function StrengthTraining() {
	const classes = useStyles()

	return (
		<SportsPageTemplate
			title='Strength Training 101: How to Get Started'
			links={links}
			websiteLinks={websiteLinks}
			youtubeLinks={youtubeLinks}
		>
			<div className='paragraph-container'>
				<p className='paragraph'>
					If you want to take your fitness to the next level, try
					staying off the good old treadmill and trying out the
					barbells instead. You will lose all the same calories, but
					you will also tone your body in shape. Strength training,
					everyone's favorite! But what exactly is it? Well, strength
					training, also known as resistance training, is when you use
					your own bodyweight or tools such as dumbbells, barbells, or
					resistance bands, so that you can build muscle mass,
					strength, and endurance.
				</p>

				<p className='paragraph'>
					If you're new to it, it might seem a big intimidating to get
					started. But incorporating strength training into the
					workout routine you already have can be incremental and
					simple, you don't have to completely replace it. For
					starters, you can practice resistance training a couple
					times per week, according to Sarah Revenig CSCS, trainer at
					Soho Strength Lab. “As you adapt, you can increase your
					frequency of training".
				</p>

				<p className='paragraph'>
					At first, it may take a couple weeks to see the initial
					results, but do not doubt, as strength training is one of
					the best ways to build the abs you've always wanted, or tone
					a part of your body. Additionally, it keeps your body
					burning calories even after you have left the gym and
					stopped the workout. This benefit makes strength training a
					superb option for those with weight loss goals. Enough talk,
					here is a quick guide for you to get started on strength
					training.
				</p>

				<Tutorial>
					<h2 className={classNames(classes.header, 'subtitle')}>
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
