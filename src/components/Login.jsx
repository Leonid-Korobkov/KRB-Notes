import { Button } from 'antd'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { LoginOutlined } from '@ant-design/icons'

function Login() {
  const { auth } = useContext(AuthContext)

  const login = () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account'
    })

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Button icon={<LoginOutlined />} type="primary" onClick={login}>
      Войти
    </Button>
  )
}

export default Login
