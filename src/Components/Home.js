import React from 'react'
import Landing from './Home/Landing/Landing'
import Form from './Home/Form/Form'

function Home() {
  return (
    <div className='bg-[#00242c] min-h-screen'>
        <Landing />
        <Form />
    </div>
  )
}

export default Home