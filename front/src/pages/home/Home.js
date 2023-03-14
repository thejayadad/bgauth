import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
const Home = () => {
  return (
    <div className='app'>
        <Navbar />
    <List />

      </div>
  )
}

export default Home