import helperClassName from "helpers/helperClassName"
import styles from "./styles.module.scss"

export default function Loader(props) {
  const className = helperClassName(styles.Loader, props.className)

  return <div className={className} />
}
