import React from 'react'
import Stories from './stories'
import Posts from './posts'

export default function Feed() {
  return (
    <main>
        <section>
            {/* stories */}
            <Stories/>

            {/* posts */}
            <Posts/>

        </section>

        <section>
            {/* mini profile */}

            {/* suggestions */}
        </section>
    </main>
  )
}
