//Import Context
import { createContext, useContext, useState, useEffect } from 'react'

//Import API
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
    const response = await api.post('/sessions', { email, password })
    const { user, token } = response.data

    localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    localStorage.setItem('@foodexplorer:token', token)

    api.defaults.headers.common[`Authorization`] = `Bearer ${token}`
    setData({ user, token })

    }catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Failed to sign in')
      }
    }
  }

  function signOut(){
    const token = localStorage.removeItem('@foodexplorer:token')
    const user = localStorage.removeItem('@foodexplorer:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }){
    
    if(avatarFile){
      const fileUploadForm = new FormData()
      fileUploadForm.append("avatar", avatarFile)

      const response = await api.patch('/users/avatar', fileUploadForm)
      user.avatar = response.data.avatar
    }
    
    try{
      await api.put('/users', user)
      user.password = ''
      user.new_password = ''
      user.old_password = ''
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user, token: data.token})
      alert('Profile Updated')

    }catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Failed to update profile')
      }
    }}

  //useEffect to get the data stored on localStorage on your navigator
  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    if(token && user){
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`
     setData({ token,
      user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut, 
      user: data.user,
      updateProfile}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
