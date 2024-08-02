'use client'

import React, { useEffect } from 'react'
import styles from './Countdown.module.css'
import CDR from 'count-down-react'

const DELAY = 20 // seconds

const getDelay = () => DELAY * 1000

const Renderer = ({ days, hours, minutes, seconds }) => (
	<span className={styles.digit}>{seconds}</span>
)

export const Countdown = ({ jump = true }) => {
	useEffect(() => {
		if (jump) {
			const timeoutId = setTimeout(() => {
				document.location.href = 'https://www.reteti.org'
			}, getDelay() + 1000)
			return () => clearTimeout(timeoutId)
		}
	})

	return (
		<div className={styles.countdown}>
			<div className={styles.text}>Redirecting you to the elephants in...</div>
			<div className={styles.count}>
				<CDR date={Date.now() + getDelay()} renderer={Renderer} />
			</div>
		</div>
	)
}
