import styles from './Milk.module.css'

export const Milk = ({ count }) => {
	// 1 bottle = 4 litles = USD 10
	// 0.25 litres = $1.25 = £1
	// £250  = 320 usd

	const num_bottles = Math.floor(count / 8 + 32)

	return (
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
	)
}
