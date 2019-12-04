import React from 'react'

function About(props) {
	const { push } = props.history
	return (
		<div>
			<h1>About</h1>
			<button onClick={() => push('/')}>back home</button>
		</div>
	)
}

export default About
