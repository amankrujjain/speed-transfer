import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn ={firstName:'Aman'}
  return (
    <section className='Home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiency"
            
          />
        </header>
      </div>
    </section>
  )
}

export default Home