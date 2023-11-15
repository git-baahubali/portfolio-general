'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Light from './Light';
import Dark from './Dark';
// import '../globals.css'

function Header({ darkMode, setDarkMode }) {
  const downloadRef = useRef(null);

  useEffect(() => {
    let hoverTimer;

    const handleDownload = () => {
      // Create a new anchor element dynamically
      const anchor = document.createElement('a');
      anchor.href = '/public/Resumes/1.pdf'; // Set the path of the file you want to download
      anchor.download = 'Balaji Dasari.pdf'; // Set the filename for download
      anchor.click(); // Simulate click to trigger download
      anchor.remove(); // Remove the element after download
    };
    const handleMouseEnter = () => {
      hoverTimer = setTimeout(() => {
        console.log('Initiating download...');
        // trigger download
        handleDownload();
      }, 2000); // 2000 milliseconds = 2 seconds
    };

    const handleMouseLeave = () => {
      // Clear the timer when mouse leaves
      clearTimeout(hoverTimer);
    };

    // Add event listeners
    const btnElement = downloadRef.current;
    if (btnElement) {
      btnElement.addEventListener('mouseenter', handleMouseEnter);
      btnElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup the event listeners on component unmount
    return () => {
      if (btnElement) {
        btnElement.removeEventListener('mouseenter', handleMouseEnter);
        btnElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };



  }, [])

  return (
    <div className=' fixed top-0 w-full z-50 flex justify-between items-center border-gray-300 rounded-full border-[1px] text-black py-8 px-4
    backdrop-blur-2xl'>
      <p className='text-3xl font-bold'>B.</p>
      <ul className='flex justify-between items-center gap-8'>
        <Link href={'/'}><li className='hover:underline underline-offset-8'>Home</li> </Link>
        <Link href={'/Projects'}><li className='hover:underline underline-offset-8'>Projects</li> </Link>
        <Link href={'/contact'}><li className='hover:underline underline-offset-8'>Contact</li> </Link>
        {/* <Link href={'/About'}><li>About</li> </Link> */}
      </ul>

      <div className="">
        {/* <button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? <Light /> : <Dark />}
        </button> */}
        <a ref={downloadRef} className='Resume-download-btn rounded-full py-2 px-4  bg-black text-white  hover:scale-110  transition duration-300 ease-in-out' href={'Resumes/Latest.pdf'} download={'Balaji Dasari Resume.pdf'}
        > Download Resume</a>
      </div>
    </div>
  )
}

export default Header