'use client'
import React, { useEffect, useState,useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import '../../styles/AnimationWraper.css'


function AnimationWraper({ children, customStyles }) {
    console.log("render");
    const handleIntersection = (inView, entry) => {
        if (inView) {
            entry.target.classList.add('animate-on-scroll');
        } else {
            entry.target.classList.remove('animate-on-scroll');
        }
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    React.useEffect(() => {
        if (entry) {
            handleIntersection(inView, entry);
        }
    }, [ handleIntersection]);

    console.log([inView]);

    return (
        <div ref={ref} className={`animation-wrapper ${customStyles} ${inView ? 'animate-on-scroll' : ''}`}>{children}</div>
    )
}

export default AnimationWraper

