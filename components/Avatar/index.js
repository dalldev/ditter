import styles from "./styles.module.scss"

export default function Avatar({ src, className = "" }) {
  return <img className={`${className} ${styles.Avatar}`} src={src} />
}
