
import styles from "./page.module.css";

export default function Home() {
  console.log('Hola mundo página de inicio')
  return (
    <main className={styles.main}>
      <h1> Hola mundo</h1>
    </main>
  );
}
