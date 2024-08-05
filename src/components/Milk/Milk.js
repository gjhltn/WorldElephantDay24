import styles from './Milk.module.css'
import { Bottle } from '@/components/Bottle'

export const Milk = ({ count }) => {
	// 1 bottle = 4 litles = USD 10
	// 0.25 litres = $1.25 = £1
	// £250  = 320 usd

	// const num_bottles = Math.floor(count / 8 + 32)
	
	const num_bottles = Math.floor(count / 4 + 32)

	return (
		<>
			<div className={styles.milk}>
				<div className={styles.text}>
					Bottles of milk filled
					<br />
					so far today:
				</div>
				<div className={styles.count}>
					<span className={styles.bottles}>{num_bottles}</span>
				</div>
			</div>
			<div className={styles.bottles}>
				<Remainder count={count} />

				{[...Array(num_bottles)].map((_, i) => (
					<div key={_ + i}>
						<Bottle fill={4} />
					</div>
				))}
			</div>
		</>
	)
}

const Remainder = ({ count }) => {
	const num_bottles = Math.floor(count / 4)
	const remainder = count - num_bottles * 4
	if (!remainder) return
	const fill = Math.floor(remainder)
	return (
		<div>
			<Bottle fill={fill} />
		</div>
	)
}

/*
const Remainder = ({ count }) => {
	const num_bottles = Math.floor(count / 8)
	const remainder = count - num_bottles * 8
	if (!remainder) return
	const fill = Math.floor(remainder / 2)
	return (
		<div>
			<Bottle fill={fill} />
		</div>
	)
} */
