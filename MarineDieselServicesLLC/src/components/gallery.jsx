import { useState } from "react";


function Gallery() {
    const images = [
    {
        src: "/images/8VA132904 (3).jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/4679464.jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/DSC03901.JPG.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/IMG_20200616_1456310.jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/IMG-20240117-WA0001.jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/IMG-20240218-WA0036.jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/P1141383.JPG.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/P8229961.JPG.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/PB090439.JPG.jpeg",
        width: 1500,
        height: 1000,
    },
    {
        src: "/images/Rebuilt engine.jpg.jpeg",
        width: 1500,
        height: 1000,
    },
    ];

 
  return (
    <>
        <div className="grid grid-cols-6 gap-4">
            {images.map((image, index) => (
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
                    <img src={image.src} alt={`Image ${index}`} className="w-full h-auto object-cover" />
                </div>
            ))}
        </div>
    </>
  );
}

export default Gallery;
