import { initializeApp } from "firebase/app"
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  Timestamp,
} from "firebase/firestore"
import firebaseConfig from "firebase_api/client"
import useUser from "./useUser"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default function useFirestore() {
  const { user } = useUser()

  const addDweet = (content) => {
    if (!content)
      return Promise.reject(new Error("Que intentas hacer Pillin 👀"))
    if (!user)
      return Promise.reject(new Error("Algo muy malo paso con el Usuario."))

    const dweet = {
      avatar: user.avatar,
      content,
      createdAt: Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0,
      userId: user.uid,
      username: user.username,
    }

    return addDoc(collection(db, "dweets"), dweet)
      .catch((docRef) => docRef)
      .catch((err) => err)
  }

  const getAllDweets = () => {
    return getDocs(collection(db, "dweets"))
      .then(({ docs }) =>
        docs.map((doc) => {
          const data = doc.data()

          return { id: doc.id, ...data }
        })
      )
      .catch((err) => err)
  }
  return {
    addDweet,
    getAllDweets,
  }
}
