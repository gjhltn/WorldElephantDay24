'use client'

import React, { useEffect, useState } from 'react'
import { CounterAPI } from 'counterapi'
import { useCookies } from 'react-cookie'
import { Thanks } from '@/Components/Thanks'
import { Masthead } from '@/Components/Masthead'
import { Logo } from '@/Components/Logo'
import { Countdown } from '@/Components/Countdown'
import { Milk } from '@/Components/Milk'

const COUNTER_NAMESPACE = 'tpxelephant'
const COUNTER_NAME = 'milk'
const COOKIE_NAME = 'mycookie'

const counter = new CounterAPI()

const Home = () => {
	const [count, setCount] = useState(null)
	const [cookies, setCookie] = useCookies([COOKIE_NAME])
	const [wasCounted, setWasCounted] = useState()

	useEffect(() => {
		if (!cookies[COOKIE_NAME]) {
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
			<Masthead />
			<Logo />
			{wasCounted && <Thanks />}
			<Countdown />
			<Milk count={count} />
		</main>
	)
}

export default Home
