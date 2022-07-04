import "styles/reset.scss"
import styles from "styles/app.module.scss"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.AppContainer}>
      <Component {...pageProps} />
    </div>
  )
}
