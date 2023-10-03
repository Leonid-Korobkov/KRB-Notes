import { firebaseConfig } from '../firebaseConfig/firebaseConfig.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { initializeApp } from 'firebase/app'
import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext.js'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// , fireStore, user, isLoading

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [])

  return <AuthContext.Provider value={{ app, auth, user, isLoading }}>{children}</AuthContext.Provider>
}

export default AuthProvider
