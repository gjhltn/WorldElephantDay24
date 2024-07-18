import Image from "next/image";
import styles from "./page.module.css";
import Head from 'next/head'

export default function Home() {
  return (
    <main>

      <h1 className={styles.h1}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.blue}`}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.lightblue}`}>Hello World</h1>
      <h1 className={`${styles.h1} ${styles.green}`}>Hello World</h1>
    </main>
  );
}
