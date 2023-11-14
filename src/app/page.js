'use client'
import Image from 'next/image'
import Header from './components/Header'
import './page.css'
import { Roboto_Mono } from 'next/font/google'
import Name from './components/Name'
import { useState } from 'react'
import AnotherStack from './components/AnotherStack'
import Test from './components/Test'
import Link from 'next/link'


const robotoMono = Roboto_Mono({ subsets: ['latin'] })
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  var skills = ['HTML', 'CSS', 'Javascript', 'Node js', 'React js', 'Tailwind', 'Express', 'PostgreSQL']

  var skillsHoverstyles = 'bg-gray-800 text-gray-300 rounded-full'.split(' ').map(word => `hover:${word}`).join(' ');
  console.log(skillsHoverstyles);

  return (
    <main style={robotoMono.style} className={'w-full h-[100vh] ' + `${darkMode ? 'bg-black text-gray-300' : 'text-black bg-white'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Name />
      {/* <Test /> */}

      {/* Skills */}
      <div className="w-full h-auto 
      px-4 py-24 border-[1px] rounded-lg
        bg-white ">
        <h6 className='font-normal text-xl'>My</h6>
        <h3 class="font-normal text-9xl">Skills</h3>
        <ul class="flex justify-center sm:justify-start items-center flex-wrap
        mt-8 ">
          {skills.map(x => <li className={`px-4 py-2 m-2 transition-all ease-in border-2 border-white hover:border-sky-800 hover:bg-gray-800 hover:text-gray-300 hover:rounded-full`}>{x}</li>)}

        </ul>

      </div>
      {/* work */}
      <div className="w-full h-auto 
      px-4 py-24 border-[1px] rounded-lg
        bg-white  flex flex-col justify-between items-start gap-8">
        <h6 className='font-normal text-xl'>My</h6>
        <h3 class="font-normal text-9xl">Works</h3>
        <Link href={'/Projects'}><button type="button" class=" hover:bg-gray-300 bg-black hover:text-black text-white rounded-full px-8 py-2  transition-all">Check out</button>
        </Link>

        
      </div>
    </main>
  )
}

