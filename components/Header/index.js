import styles from "./styles.module.scss"

export default function Header({ children, className = "" }) {
  return <header className={`${className} ${styles.Header}`}>{children}</header>
}
