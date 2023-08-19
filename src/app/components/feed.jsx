import React from 'react'
import Stories from './stories'
import Posts from './posts'
import MiniProfile from './mini-profile'
import Suggestions from './suggestions'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3'>
        <section className='md:col-span-2 md:max-w-6xl mx-auto'>
            {/* stories */}
            <Stories/>

            {/* posts */}
            <Posts/>

        </section>

        <section className='hidden md:col-span-1 md:inline-grid'>
            <div className='fixed w-[380px]'>
                {/* mini profile */}
                <MiniProfile/>


                {/* suggestions */}
                <Suggestions/>
            </div>
        </section>
    </main>
  )
}
