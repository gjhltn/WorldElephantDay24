import sponsors from '/public/sponsors.png'
import styles from './Masthead.module.css'
import Image from 'next/image'

export const Masthead = () => (
	<div className={styles.Masthead}>
		<Image src={sponsors} alt='TPXImpact x Reteti' width={371} height={110} />
	</div>
)
