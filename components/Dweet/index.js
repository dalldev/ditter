import Avatar from "components/Avatar"
import styles from "./styles.module.scss"

export default function Dweet(props) {
  const {
    avatar,
    content,
    createdAt,
    id,
    likesCount,
    sharedCount,
    userId,
    username,
  } = props

  return (
    <div className={styles.Dweet}>
      <Avatar src={avatar} />
      <div className={styles.TextContainer}>
        <header>
          <h3 className={styles.Name}>{username}</h3>
        </header>
        <span className={styles.Content}>{content}</span>
      </div>
    </div>
  )
}
