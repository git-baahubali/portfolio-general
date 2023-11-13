'use client'
import Image from 'next/image'
import Header from './components/Header'
import './page.css'
import { Roboto_Mono } from 'next/font/google'
import Name from './components/Name'
import { useState } from 'react'
import AnotherStack from './components/AnotherStack'
import Test from './components/Test'
// import './pen.css'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main style={robotoMono.style} className={'w-full h-[100vh] ' + `${darkMode ? 'bg-black text-gray-300' : 'text-black bg-white'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
        <Name />
        {/* <Test /> */}

    </main>
  )
}

