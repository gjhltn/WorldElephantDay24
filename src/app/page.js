'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {Bottle} from '@/components/Bottle'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Home() {
  return (
    <main>
      <div className="logo">
        <h1 className="world">World</h1>
        <h1 className="elephant">Elephant</h1>
        <h1 className="day">Day</h1>
        </div>
<CountdownCircleTimer
    isPlaying
    duration={10}
    colors={['#183FF4', '#ffffff']}
    colorsTime={[5,0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>

	<Bottle fill={1}/>
	<Bottle fill={2}/>
	<Bottle fill={3}/>
	<Bottle fill={4}/>
	
 <Image
      src="/reteti.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <h1 className={styles.h1}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.blue}`}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.lightblue}`}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.green}`}>Hello World</h1>
    </main>
  );
}
