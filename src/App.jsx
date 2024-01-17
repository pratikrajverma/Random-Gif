import React from 'react'
import Tag from './components/Tag'
import Random from './components/Random'

const App = () => {
  return (
    <div className='flex flex-col gap-5 min-h-screen background'>
      <h1 className='bg-white rounded-sm text-center mt-[40px]
           text-2xl font-bold w-[80%] mx-auto'>
           RANDOM GIFS</h1>

      <div className='flex flex-col items-center gap-5'>
          <Random/>
          <Tag/>
      </div> 

    </div>
  )
}

export default App