import Header from '../app/components/Header'
import React, { useEffect, useState, useRef } from 'react'
import '../styles/button.css'
import AnimationWraper from '@/app/components/AnimationWraper'

function Projects() {
  const [ScrollVisiblity, setScrollVisiblity] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setScrollVisiblity(true)
      setTimeout(() => {
        setScrollVisiblity(false)
      }, 3000);
    }, 2000);


    //
  }, [])
  return (
    <div>
      <Header />
      <main className='mt-32 '>
        <h1 className="text-7xl text-center mb-12">Projects
        </h1>

        {/* Patm Project  */}
        <div className='wrapper border-2 border-gray-300  rounded-lg '>
          <h1 className='block text-4xl text-center m-4'>Patym Replica</h1>
          <main className=' sm:flex sm:flex-row sm:justify-start sm:py-8 sm:px-4'>
            <section className=''>
              <div className="paytm  border-[1px] border-gray-300 shadow-2xl relative w-[400px] h-[400px] sm:w-[900px] rounded-lg">
                <div className='absolute top-[-200px] left-[-450px] scale-50 overflow-hidden'>
                  <p className={`${ScrollVisiblity ? 'visible' : 'hidden'} flex justify-center items-center
                absolute inline-block w-full h-full  border-0  border-sky-0 rounded-full
                text-7xl backdrop-blur-sm 
                `}> Scroll to view website</p>
                  <iframe
                    src="https://paytm-replica.vercel.app/"
                    title="Embedded Website"
                    style={{
                      width: '1800px',
                      height: '800px',
                    }}
                    className='border-[1px]  border-gray-300  rounded-xl'
                  ></iframe>
                </div>
              </div>
              <ul >
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </section>
            <article className="About-section ml-10 border-0 border-sky-900 flex flex-col justify-start items-start gap-10">
              <h1>About
                <p className="">
                  Paytm replica made gronud up with 100% tailwind css without any components.
                </p>
              </h1>
              <h2 className='flex justify-start items-center gap-4'>Tech Stack Used:
                <p>HTML</p>
                <p>Tailwind Css</p>
              </h2>
              <a className="button" href="https://paytm-replica.vercel.app/" target='_blank'>Check Out in new tab</a>
              <a className="button" href='https://github.com/git-baahubali/Paytm-Replica'>Project repo</a>
            </article>
          </main>
        </div>

        {/* 100X project  */}
        <div className='wrapper border-2 border-gray-300 rounded-lg my-14'>
          <h1 className='block text-4xl text-center m-4'>100x Microblog</h1>

          <main className='py-8 px-4 sm:flex sm:justify-center '>
            <div className="images-section shadow-2xl flex justify-between items-center w-[900px] h-[450px]  border-[1px] border-gray-300  rounded-lg p-2 overflow-hidden">
              <img src="Images/100x/Create0.png" alt="" className="object-contain h-full" />
              <img src="Images/100x/Home.png" alt="" className="object-contain h-full" />
              <img src="Images/100x/Profile_edit.png" alt="" className="object-contain h-full" />
              <img src="Images/100x/Profile.png" alt="" className="object-contain h-full" />
            </div>
            <article className="About-section ml-10 border-0 border-sky-900 flex flex-col justify-start items-start gap-10">
              <h1>About
                <p className="">
                  100x microblog is a twitter like platform developed for group of upcoming devs
                </p>
              </h1>
              <div className='flex gap-2'>
                <h1 className='grow'>Tech Stack Used:</h1>
                <ul className='grid grid-cols-3 items-center gap-4 grow'>
                  <li>Next js</li>
                  <li>React js</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>Css</li>
                  <li>Tailwind </li>
                  <li>Express js</li>

                  <li>PostgreSQL</li>
                </ul>
              </div>
              <a href="https://paytm-replica.vercel.app/" target='_blank' className='button'>Check Out in new tab</a>
              <a href='https://github.com/git-baahubali/Paytm-Replica' className='button'>Project repo</a>
            </article>
          </main>
        </div>

      </main>

    </div>
  )
}

export default Projects