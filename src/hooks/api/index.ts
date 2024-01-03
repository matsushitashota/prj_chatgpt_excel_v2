import axios from "axios"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { getFirestore, setDoc } from "firebase/firestore"
import firebaseConfig from "./firabase"
import { initializeApp } from "firebase/app"
import { doc, getDoc } from "firebase/firestore"

// -------------------------- ChatGPT 関連 -------------------------------------

export type Message = {
  role: "system" | "assistant" | "user"
  content: string
}

export const requestOpenApi = async (message: Message[]) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      // gpt-4はトークン料金が高いため注意
      // model: 'gpt-4',
      messages: message,
      temperature: 0.9,
      max_tokens: 2800
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "OpenAI-Learning-Mode": "off"
      }
    }
  )

  return response.data.choices[0].message
}

// -------------------------- firebase 関連 -------------------------------------

export const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const db = getFirestore(firebaseApp)

export const signInWithGoogle = async (): Promise<boolean> => {
  try {
    await signInWithPopup(auth, provider)
    return true
  } catch (error) {
    console.error("error", error)
    return false
  }
}

export const handleSignOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log("error", error.message)
    })
}

export const postApiKey = async (api_key: string) => {
  const user = await auth.currentUser
  if (user) {
    const docRef = await setDoc(doc(db, "api_key", user.uid), {
      api_key
    })
    console.log("Document written with ID: ", docRef)
  } else {
    console.error("No user is signed in.")
  }
}

export const getApiKey = async (uid: string): Promise<string | null> => {
  const docRef = doc(db, "api_key", uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().api_key)
    return docSnap.data().api_key
  } else {
    console.log("No such document!")
    return null
  }
}
