import { initializeApp } from "firebase/app"
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import firebaseConfig from "firebase_api/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const normalizeUser = (user) => {
  const { displayName, photoURL, email, uid } = user

  return {
    username: displayName,
    avatar: photoURL,
    email,
    uid,
    state: "LOGGED",
  }
}

initializeApp(firebaseConfig)
const auth = getAuth()
const githubProvider = new GithubAuthProvider()

export default function useUser() {
  const [user, setUser] = useState({ state: "NOT_KNOWN" })
  const router = useRouter()

  /* Oyente de la sesion */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) router.replace("/")

      setUser(user ? normalizeUser(user) : { state: "NOT_LOGGED" })
    })
  }, [])

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
  }

  const logout = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((err) => console.log("signOut: " + err))
  }
  return {
    user,
    loginWithGithub,
    logout,
  }
}
