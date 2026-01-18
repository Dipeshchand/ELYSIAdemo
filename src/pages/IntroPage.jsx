import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/full.jpeg";
import img2 from "../assets/images/mains.jpg";
import img3 from "../assets/images/main3.jpg";
import img4 from "../assets/images/main-4.jpg";
import img5 from "../assets/images/hero-bg.png";
import img6 from "../assets/images/fifth.jpg";
import img7 from "../assets/images/seventh.jpg";
import img8 from "../assets/images/story-img-1.jpg";
import img9 from "../assets/images/first.jpg";
import img10 from "../assets/images/bead.jpg";
import img11 from "../assets/images/Third.jpg";
import img12 from "../assets/images/aboutus.jpg";
import img13 from "../assets/images/story-img-2.jpg";
import img14 from "../assets/images/haldi.jpeg";

export default function IntroPage() {
  const navigate = useNavigate();

  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9,
    img10, img11, img12, img13, img14
  ];

  let imageIndex = 0;

  return (
    <div className="w-full h-screen">
      <div
        className="
          grid grid-cols-3 grid-rows-5
          md:grid-cols-5 md:grid-rows-3
          w-full h-full
        "
      >
        {Array.from({ length: 15 }).map((_, i) => {
          if (i === 7) {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-[#DCCDC2]"
              >
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-baskervville mb-4">
                    ELYSIA
                  </h1>
                  <button
                    onClick={() => navigate("/home")}
                    className="px-6 py-2.5 bg-[#5A3F33] text-white rounded-full"
                  >
                    STEP IN
                  </button>
                </div>
              </div>
            );
          }

          const img = images[imageIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                loading="lazy"
                decoding="async"
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
