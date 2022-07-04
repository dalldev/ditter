import { Logo } from "components/Icons"
import Button from "components/Button"
import Loader from "components/Loader"

import useUser from "hooks/useUser"

import styles from "styles/index.module.scss"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const { user, loginWithGithub } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (user.state === "LOGGED") router.replace("/home")
  }, [user.state])

  return (
    <div className={styles.IndexContainer}>
      <div className={styles.InfContainer}>
        <Logo className={styles.Logo} />
        <h1 className={styles.Title}>Bienvenido a Ditter</h1>
        <span className={styles.Description}>
          El entorno de difusión más grande del mundo.
        </span>
      </div>
      <div className={styles.BoardContainer}>
        {user.state === "NOT_KNOWN" && <Loader className={styles.Loader} />}
        {user.state === "NOT_LOGGED" && (
          <Button onClick={loginWithGithub}>Registrate con GitHub</Button>
        )}
        {user.state === "LOGGED" && <span>Redireccionando a Inicio...</span>}
      </div>
      <footer className={styles.Footer}>
        <span>
          Su información no se usa para ningún otro propósito que no sea pintar
          la interfaz. <a href="terminos de uso">mas.</a>
        </span>
      </footer>
    </div>
  )
}
