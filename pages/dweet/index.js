import Avatar from "components/Avatar"
import Button from "components/Button"
import Header from "components/Header"
import useFirestore from "hooks/useFirestore"
import useUser from "hooks/useUser"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "./styles.module.scss"

export default function Dweet() {
  const { user } = useUser()
  const { addDweet } = useFirestore()
  const router = useRouter()
  const [error, setError] = useState(null)
  const [content, setContent] = useState("")

  const handledTextarea = ({ target }) => {
    setContent(target.value)
  }
  /* Hacer un mejor contro del error 😎 */
  const handledDweet = () => {
    setContent("")
    addDweet(content)
      .then((docRef) => {
        setError(null)
        router.replace("/home")
      })
      .catch(setError)
  }

  return (
    <div>
      <Header className={styles.Header}>
        <Link href="/home">😎</Link>
        <div />
        <Button onClick={handledDweet} disabled={content.length === 0}>
          Dweet
        </Button>
      </Header>
      <main className={styles.Main}>
        <Avatar src={user.avatar} />
        <div className={styles.Content}>
          <textarea
            className={styles.Textarea}
            placeholder="¿Que estas pasando?"
            autoFocus
            maxLength="280"
            rows="11"
            onChange={handledTextarea}
            value={content}
          ></textarea>
          {error && <span>{error.message}</span>}
        </div>
      </main>
    </div>
  )
}
