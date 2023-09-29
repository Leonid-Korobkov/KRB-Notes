import { firebaseConfig } from './firebaseConfig/firebaseConfig.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { initializeApp } from 'firebase/app'
import App from './App.jsx'
import { AuthContext } from './context/AuthContext.js'
import { useEffect, useState } from 'react'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// , fireStore, user, isLoading

function Auth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [])

  console.log('he')

  return (
    <AuthContext.Provider value={{ app, auth, user, isLoading }}>
      <App />
    </AuthContext.Provider>
  )
}

export default Auth
