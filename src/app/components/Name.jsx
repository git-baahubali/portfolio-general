'use client'
import React from 'react'
import TechStack from './AnotherStack'
import TechStackV2 from './TechStackV2'
import Test from './Test'
import AnimationWraper from './AnimationWraper'

function Name() {
    return (
        <div className="sm:flex justify-between mt-[8rem]  h-[600px] border-sky-950 border-0">
            <div className='flex flex-col w-1/2 justify-center items-start gap-10
                border-[1px] border-gray-300  my-5 px-4 py-24 overflow-hidden'
                style={{
                    borderTopLeftRadius: '0.75rem',
                    borderBottomLeftRadius: '0.75rem'
                }}>
                <p className='font-normal'>👋I'M </p>
                <AnimationWraper>
                    <h1 className='text-8xl font-normal '>Balaji Dasari</h1>
                </AnimationWraper>
                <AnimationWraper>
                <section className='text-gray-600'>
                    <span className='underline underline-offset-4'>Full stack developer</span> committed to
                    delivering high-quality solutions.My
                    journey has been fueled by a
                    commitment to continuous learning and
                    skill enhancement.
                </section>
                </AnimationWraper>
                {/* <button className='border-[1px] border-gray-300 rounded-lg px-2 py-1'>CheckOut my blog</button> */}

                {/* Image */}
            </div>
            <div className="border-r-gray-300 sm:w-1/2  my-5 border-[1px] "
                style={{
                    borderTopRightRadius: '0.75rem',
                    borderBottomRightRadius: '0.75rem',
                    // borderLeft:'none',
                }}>
                <TechStackV2 />
            </div>
        </div>
    )
}

export default Name