import React, { useState } from 'react'
// import './TechStack.css'



function TechStack() {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
        <main className={`stack relative w-full h-full container flex justify-center items-center ${isActive ? 'active' : ''}`}>
            <p className="Image" >
                <img src="Images/photo.jpg" alt="" className="" onClick={() => setIsActive(prev => !prev)} />
            </p>
            <ul  className='list-none'>
            <li style={{ '--i': "1" }}><img src="Images/nodejs-icon.png" alt="" className=""/></li>
            <li style={{ '--i': "2" }}><img src="Images/postgresql-icon.png" alt="" className=""/></li>
            <li style={{ '--i': "3" }}> <img src="Images/react-icon.png" alt="" srcset="" /></li>
            <li style={{ '--i': "4" }}> <img src="Images/tailwind_icon.png" alt="" srcset="" /></li>
            <li style={{ '--i': "5" }}><img src="Images/tailwind_icon.png" alt="" srcset="" /></li>
            <li style={{ '--i': "6" }}><img src="Images/tailwind_icon.png" alt="" srcset="" /></li>

            </ul>
            {/* <p>{isActive.toString()}</p> */}

        </main>
        </>
    )
}

export default TechStack