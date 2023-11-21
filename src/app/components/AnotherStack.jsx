// import './TechStack.css'

function AnotherStack() {
    const revolvingImages = [
        'Images/nodejs-icon.png',
        'Images/postgresql-icon.png',
        'Images/react-icon.png',
        'Images/tailwind_icon.png',
        // Add more images if needed
    ];

    const orbitSize = 150; // Adjust as needed to fit the parent container

    // Inline styles for the revolving images
    const getOrbitStyle = (index) => ({
        position: 'absolute',
        transform: `rotate(${index * (360 / revolvingImages.length)}deg) 
                  translateX(${orbitSize}px) 
                  rotate(-${index * (360 / revolvingImages.length)}deg)`,
        transformOrigin: '0 center',
        // Make sure the images are on the same level as the central image
        top: '50%',
        left: '50%',
        marginLeft: '-50px', // Half of the image width
        marginTop: '-50px', // Half of the image height
    });

    return (
        <div className="tech-stack">
            <div className="center-image">
                <img src="Images/photo.jpg" alt="Center" />
            </div>
            {revolvingImages.map((src, index) => (
                <div key={src} className="orbit" style={getOrbitStyle(index)}>
                    <img src={src} alt={`Revolving ${index}`} style={{ width: '120px', height: '120px' }} />
                </div>
            ))}
        </div>
    );
}

export default AnotherStack;
