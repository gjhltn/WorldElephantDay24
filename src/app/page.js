'use client'

import React, { useEffect, useState } from 'react'
import { CounterAPI } from 'counterapi'
import { useCookies } from 'react-cookie'
import { Thanks } from '@/components/Thanks'
import { Masthead } from '@/components/Masthead'
import { Logo } from '@/components/Logo'
import { Countdown } from '@/components/Countdown'
import { Milk } from '@/components/Milk'

const COUNTER_NAMESPACE = 'tpxelephant'
const COUNTER_NAME = 'milk'
const COOKIE_NAME = 'milkdcookie'

const counter = new CounterAPI()

const Home = () => {
	const [count, setCount] = useState(null)
	const [cookies, setCookie] = useCookies([COOKIE_NAME])
	const [wasCounted, setWasCounted] = useState()

	useEffect(() => {
		if (!cookies[COOKIE_NAME]) {
			console.log('counter')
			counter.up(COUNTER_NAMESPACE, COUNTER_NAME).then(res => {
				setCount(res.Count)
				setCookie(COOKIE_NAME, true)
				setWasCounted(true)
			})
		} else {
			counter.get(COUNTER_NAMESPACE, COUNTER_NAME).then(res => {
				setCount(res.Count)
				setWasCounted(false)
			})
		}
	}, [])

	return (
		<main>
			<noscript>
				Sorry, tnis needs JavaScript to work!
			</noscript>
			<Masthead />
			<Logo />
			{wasCounted && <Thanks />}
			<Countdown jump={true} />
			<Milk count={count} />
		</main>
	)
}

export default Home
