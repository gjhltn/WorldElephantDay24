import React from 'react'
import { Finished } from '@/components/Finished'
import { Masthead } from '@/components/Masthead'
import { Logo } from '@/components/Logo'


const Home = () => {

	return (
		<main>
			<noscript>
				Sorry, tnis needs JavaScript to work!
			</noscript>
			<Masthead />
			<Logo />
			<Finished />
		</main>
	)
}

export default Home
