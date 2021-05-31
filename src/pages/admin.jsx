import { useEffect } from 'react'
import Router from 'next/router'

const Admin = () => {
  useEffect(() => {
    // auth

    Router.push("/auth/login")
  })

  return <div />
}

export default Admin