import Image from 'next/image'
import Header from './components/header'
import Feed from './components/feed'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header/>
      <Feed/>
    </div>
  )
}
