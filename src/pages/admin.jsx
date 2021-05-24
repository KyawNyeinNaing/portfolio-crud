import { useEffect } from 'react'
import Router from 'next/router'

const Admin = () => {
  useEffect(() => {
    // auth

    Router.push("/admin/dashboard")
  })

  return <div />
}

export default Admin