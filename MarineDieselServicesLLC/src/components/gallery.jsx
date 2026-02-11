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
  ];

  //Our State >>>
  const [nextIndex, setNextIndex] = useState(0);

  //Update "images" to your array name >>>
  const arrayLength = images.length;

  //Our setTimeout method >>>
  setTimeout(() => {
    if (nextIndex < arrayLength - 1) {
      setNextIndex(nextIndex + 1);
    } else {
      setNextIndex(0);
    }
  }, 3000);

  return (
    <div id="slideshow-container">
      <div id="slideshow-image">
        <img
          style={{ width: 1000}}
          src={images[nextIndex].src}
          alt="Nick"
        ></img>
      </div>
    </div>
  );
}

export default Gallery;
