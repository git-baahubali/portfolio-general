'use client'
import React, { useState,useRef,useEffect } from 'react';
import techStackStyles from './TechStackV2.module.css';

const techStacks = ['nodejs-icon.png', 'postgresql-icon.png', 'react-icon.png', 'tailwind_icon.png', 'html-bw.png', 'css-bw.png', 'express.png', 'javascript-2189147_960_720.png', 'express.png',]
var noOfStacks = techStacks.length


export function TechStackIcon({ imgPath, index }) {
    const rotateThisMuch = (index) * 360 / noOfStacks
    const counterRotate = -rotateThisMuch
    return (
        <p className={techStackStyles.bar} style={{
            rotate: rotateThisMuch + 'deg',
        }}>
            <img src={"Images/" + imgPath} alt="" style={{
                width: '100%',
                transform: `rotate(${counterRotate}deg)`
            }} />
        </p>
    )
}


function TechStackV2() {
    const [showDownloadBtn, setShowDownloadBtn] = useState(false)
    const downloadImgCardRef = useRef(null)

    const toggleFlipperClass = () => {
        if (downloadImgCardRef.current) {
            downloadImgCardRef.current.classList.toggle(techStackStyles.flipper);
        }
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        toggleFlipperClass();
        setTimeout(() => {
           toggleFlipperClass(); 
        }, 3000);
      }, 2000);

      return () => clearTimeout(timer)
    }, [])
    
    return (
        <div className='relative border-0   w-full h-full '>
            <div className="'hover:rotate-180'">
                <section ref={downloadImgCardRef}
                className={techStackStyles.downloadImgCard}
                    onMouseEnter={toggleFlipperClass}
                    onMouseLeave={toggleFlipperClass}
                    style={{ transform: showDownloadBtn ? 'rotateY(180deg)' : '' }}>
                    <div className={techStackStyles.front}>
                        <img src="Images/Photo.jpg" alt="" className={techStackStyles.frontImg}
                        />
                    </div>
                    <div className={techStackStyles.back}>
                        <a href={'Resumes/Latest.pdf'} download={'Balaji Dasari Resume.pdf'}
                        className=' bg-black text-white font-bold'>Click to <br />
                            Download <br />Resume</a>
                    </div>
                </section>
            </div>

            {techStacks.map((x, index) => {
                return <TechStackIcon imgPath={x} index={index} />
            })}

        </div>
    )
}

export default TechStackV2;



