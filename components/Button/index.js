import helperClassName from "helpers/helperClassName"
import styles from "./styles.module.scss"

export default function Button(props) {
  const className = helperClassName(styles.Button, props.className)

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  )
}
