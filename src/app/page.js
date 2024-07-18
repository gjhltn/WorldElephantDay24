import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
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
