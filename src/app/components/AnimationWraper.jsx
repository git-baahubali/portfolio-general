import React, { useEffect, useRef } from 'react'
import '../../styles/AnimationWraper.css'

function AnimationWraper({ children }) {
    const listRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        {entry.target.classList.add('animate-on-scroll');
                        // entry.target.style.transform = 'translateX(0)';
                    }
                    } else {
                        {entry.target.classList.remove('animate-on-scroll');
                        // entry.target.style.transform = 'translateX(-100)';
                    }
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.1, // adjust as needed
            }
        );

        const { current } = listRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };

    }, [])

    return (
        <div ref={listRef} className="animation-wrapper">{children}</div>
    )
}

export default AnimationWraper