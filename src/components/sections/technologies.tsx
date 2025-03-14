import React from "react";
import img1 from "../../assets/Redis_logo.svg"; // Replace with actual image paths
import img2 from "../../assets/expologo.svg";
import img3 from "../../assets/Prisma-IndigoLogo.svg";
import img4 from "../../assets/-yL5G8Z-greensock.svg";
import img5 from "../../assets/docker.svg";
import img6 from "../../assets/mongodb.svg";
import img7 from "../../assets/langchain.svg";
import img8 from "../../assets/github.png";
import img9 from "../../assets/next.svg";
import img10 from "../../assets/groq.svg";
import img11 from "../../assets/docker.svg";
import img12 from "../../assets/tailwind.svg";
import img13 from "../../assets/expologo.svg";
import img14 from "../../assets/-yL5G8Z-greensock.svg";
import img15 from "../../assets/icons8-nodejs (1).svg";
import Image from "next/image";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const GridComponent = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-y-[-10%] py-4">
      {images.map((src, i) => (
        <div key={i} className="  p-10 flex items-center justify-center">
          <Image src={src} alt={`Image ${i + 1}`} className="w-full h-auto   object-cover filter grayscale" />
        </div>
        
      ))}
    </div>
  );
};

export default GridComponent;
