import Bhutan from "../../assets/images/bhutan.jpg"
import Kaziranga from "../../assets/images/kaziranga.jpg"
import Shillong from "../../assets/images/ropebridge.jpg"
import Tawang from "../../assets/images/tawang.jpg"

import { useState, useEffect } from "react"

import { motion } from "framer-motion";


const images = [Bhutan, Kaziranga, Shillong, Tawang]

export const Caraousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval);
      }, []);
    
      return (

        <div className="absolute top-0 left-0 w-full h-full">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-full object-cover opacity-80"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1 }}
      />
    </div>
      );
};