import React from 'react'

const Page = ( {children} ) => {
  return (
    <div className='page h-screen bg-zinc-950' >
      {children}
    </div>
  )
}

export default Page