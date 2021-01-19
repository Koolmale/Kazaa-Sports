import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

export default function HideOnScroll({ children, opposite }) {
	const trigger = useScrollTrigger()

	return (
		<>
			<Slide
				appear={false}
				direction='down'
				in={opposite ? trigger : !trigger}
				timeout = {0}
			>
				{children}
			</Slide>
		</>
	)
}

HideOnScroll.defaultProps = {
	opposite: false,
}
