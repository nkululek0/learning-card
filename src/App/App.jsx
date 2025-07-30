import styles from './App.module.css'
import { Card } from '../components/Card'

export function App() {

  return (
    <>
      <section className={styles.main}>
        <Card />
      </section>
    </>
  )
}