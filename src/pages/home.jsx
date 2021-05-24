import { useEffect } from 'react'
import Router from 'next/router'

const Home = () => {
  useEffect(() => {
    Router.push('/')
  })
  
  return <div />
}

export default Home
