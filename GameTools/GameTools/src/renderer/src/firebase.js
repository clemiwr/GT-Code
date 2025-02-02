/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  enableCorsCorrelation: 'true'
}

function checkAuth() {
  return new Promise((resolve, _reject) => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
}
function guestLogin() {
  const auth = getAuth()
  return signInAnonymously(auth)
    .then(() => {
      const successs = true
      return successs
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('failed', errorCode, errorMessage)
    })
}
function signup(email, password) {
  const auth = getAuth()
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}
function login(email, password) {
  const auth = getAuth()
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      return user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db }
export { signup }
export { login }
export { checkAuth }
export { guestLogin }
// const analytics = getAnalytics(app);
