
import { useEffect, useState } from "react";

import img1 from "../../assets/images/newadded.jpg";
import img2 from "../../assets/images/mains.jpg";
import img3 from "../../assets/images/main3.jpg";
import img4 from "../../assets/images/main-4.jpg";
import img5 from "../../assets/images/side2s.jpg";

const images = [img1, img2, img3, img4, img5];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative w-full
        h-[100svh]           /* mobile */
        md:h-[80vh]          /* tablet */
        lg:h-[180vh]          /* desktop */
        bg-no-repeat bg-cover
        transition-all duration-700
      "
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Your hero text/buttons here */}
      </div>
    </section>
  );
}
