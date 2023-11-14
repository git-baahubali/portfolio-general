import Header from '../app/components/Header'
import React,{useEffect,useState} from 'react'

function Projects() {
const [ScrollVisiblity, setScrollVisiblity] = useState(false)

useEffect(()=>{

  const timer = setTimeout(() => {
    setScrollVisiblity(true)
    setTimeout(() => {
      setScrollVisiblity(false)
    }, 3000);
  }, 2000);
},[])
  return (
    <div>
      <Header />
      <main className='mt-32 '>
        <h1 className="text-7xl text-center mb-12">Projects
        </h1>

        {/* Patm Project  */}
        <main className='border-2 border-gray-300 rounded-lg sm:flex sm:justify-start sm:py-8 sm:px-4'>
          <section className=''>
            <div className="paytm   relative w-full h-[400px] sm:w-[900px] ">
              <div className='absolute top-[-200px] left-[-450px] scale-50 overflow-hidden'>
                <p className={`${ScrollVisiblity?'visible':'hidden'} flex justify-center items-center
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
          <article className="ml-10 border-0 border-sky-900 flex flex-col justify-start items-start gap-10">
            <h1>About
              <p className="">
                Paytm replica made gronud up with 100% tailwind css without any components.
              </p>
            </h1>
            <h2 className='flex justify-start items-center gap-4'>Tech Stack Used:
              <p>HTML</p>
              <p>Tailwind Css</p>
            </h2>
            <a href="https://paytm-replica.vercel.app/" target='_blank'>Check Out in new tab</a>
            <a href='https://github.com/git-baahubali/Paytm-Replica'>Project repo</a>
          </article>
        </main>

        {/* 100X project  */}
        <main className=''>
          <div class="images">
            
          </div>
        </main>

      </main>

    </div>
  )
}

export default Projects