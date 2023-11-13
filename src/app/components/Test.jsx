import React from 'react';
import styles from './test.module.css'; // Import your CSS module

const techStacks = ['nodejs-icon.png', 'postgresql-icon.png', 'react-icon.png', 'tailwind_icon.png']; // Add your tech stack images here

function Test() {
    const noOfStacks = techStacks.length;

    return (
        <div className={styles.container}>
            <img src="Images/photo.jpg" alt="Your Image" className={styles.centerImage} />
            {techStacks.map((imgPath, index) => (
                <TechStackIcon imgPath={'/Images/'+imgPath} index={index} key={index} noOfStacks={noOfStacks} />
            ))}
        </div>
    );
}


function TechStackIcon({ imgPath, index, noOfStacks }) {
    const rotateThisMuch = index * 360 / noOfStacks;
    const style = {
        transform: `rotate(${rotateThisMuch}deg) translate(100px) rotate(-${rotateThisMuch}deg)`, // Adjust the radius (100px) as needed
    };

    return (
        <div className={styles.techIcon} style={style}>
            <img src={imgPath} alt="" />
        </div>
    );
}
export default Test;
