import Link from "components/Link"
import Dweet from "components/Dweet"
import Button from "components/Button"
import Header from "components/Header"
import Avatar from "components/Avatar"
import { Github } from "components/Icons"

import useUser from "hooks/useUser"
import useFirestore from "hooks/useFirestore"

import { useEffect, useState } from "react"

import styles from "./styles.module.scss"

export default function Home() {
  const { user } = useUser()
  const { getAllDweets } = useFirestore()
  const [dweets, setDweets] = useState(null)

  useEffect(() => {
    if (user.state === "LOGGED")
      getAllDweets()
        .then(setDweets)
        .catch((e) => console.log(e))
  }, [user])

  return (
    <div className={styles.Home}>
      <main className={styles.Main}>
        <Header className={styles.Header}>
          <Avatar className={styles.Avatar} src={user.avatar} />
          <h2 className={styles.TitlePage}>Inicio</h2>
          <span className={styles.icon}>😎</span>
        </Header>
        {dweets && dweets.map((dweet) => <Dweet key={dweet.id} {...dweet} />)}
      </main>

      <Link to="/dweet">
        <Button className={[styles.ButtonDweet, "circle"]}>
          <Github fill="currentColor" />
        </Button>
      </Link>

      <nav className={styles.Footer}>Hola</nav>
    </div>
  )
}
