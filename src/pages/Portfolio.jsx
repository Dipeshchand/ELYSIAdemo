import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
// import s1 from "../../src/assets/images/s1.jpg";
import s2 from "../../src/assets/images/s2.jpg";
import s3 from "../../src/assets/images/s3.jpg";
import s4 from "../../src/assets/images/s4.jpg";
import s5 from "../../src/assets/images/s5.jpg";
import s6 from "../../src/assets/images/s6.jpg";
import s7 from "../../src/assets/images/s7.jpg";
import s8 from "../../src/assets/images/s8.jpg";
import s9 from "../../src/assets/images/s9.jpg";
import s10 from "../../src/assets/images/s10.jpg";
import s11 from "../../src/assets/images/s11.jpg";
import s12 from "../../src/assets/images/s12.jpg";
import s13 from "../../src/assets/images/s13.jpg";
import s14 from "../../src/assets/images/s14.jpg";
import s15 from "../../src/assets/images/s15.jpg";
import s16 from "../../src/assets/images/s16.jpg";
import s17 from "../../src/assets/images/s17.jpg";
import s18 from "../../src/assets/images/s18.jpg";
import s19 from "../../src/assets/images/s19.jpg";
import s20 from "../../src/assets/images/s20.jpg";
import s21 from "../../src/assets/images/s21.jpg";
import s22 from "../../src/assets/images/s22.jpg";
import s23 from "../../src/assets/images/s23.jpg";
import s24 from "../../src/assets/images/s24.jpg";
import s25 from "../../src/assets/images/s25.jpg";
import s26 from "../../src/assets/images/s26.jpg";
import s27 from "../../src/assets/images/s27.jpg";
import s28 from "../../src/assets/images/s28.jpg";
import s29 from "../../src/assets/images/s29.jpg";
import s30 from "../../src/assets/images/s30.jpg";
import s31 from "../../src/assets/images/s31.jpg";
import s32 from "../../src/assets/images/s32.jpg";
import s33 from "../../src/assets/images/s33.jpg";
import s34 from "../../src/assets/images/s34.jpg";
import s35 from "../../src/assets/images/s35.jpg";
import s36 from "../../src/assets/images/s36.jpg";
import s37 from "../../src/assets/images/s37.jpg";
import s38 from "../../src/assets/images/s38.jpg";
import s39 from "../../src/assets/images/s39.jpg";
import s40 from "../../src/assets/images/s40.jpg";
import s41 from "../../src/assets/images/s41.jpg";
import s42 from "../../src/assets/images/s42.jpg";
import s43 from "../../src/assets/images/s43.jpg";
import s44 from "../../src/assets/images/s44.jpg";
import s45 from "../../src/assets/images/s45.jpg";
import s46 from "../../src/assets/images/s46.jpg";

 
export default function Portfolio() {
  const [covers, setCovers] = useState([]);
  const navigate = useNavigate();

  // ---------- STATIC DISPLAY IMAGES ----------
  const staticImages =  [
  // { id: "st1", name: "Static 1", url: s1 },
  { id: "st2", name: "Static 2", url: s2 },
  { id: "st3", name: "Static 3", url: s3 },
  { id: "st4", name: "Static 4", url: s4 },
  { id: "st5", name: "Static 5", url: s5 },
  { id: "st6", name: "Static 6", url: s6 },
  { id: "st7", name: "Static 7", url: s7 },
  { id: "st8", name: "Static 8", url: s8 },
  { id: "st9", name: "Static 9", url: s9 },
  { id: "st10", name: "Static 10", url: s10 },
  { id: "st11", name: "Static 11", url: s11 },
  { id: "st12", name: "Static 12", url: s12 },
  { id: "st13", name: "Static 13", url: s13 },
  { id: "st14", name: "Static 14", url: s14 },
  { id: "st15", name: "Static 15", url: s15 },
  { id: "st16", name: "Static 16", url: s16 },
  { id: "st17", name: "Static 17", url: s17 },
  { id: "st18", name: "Static 18", url: s18 },
  { id: "st19", name: "Static 19", url: s19 },
  { id: "st20", name: "Static 20", url: s20 },
  { id: "st21", name: "Static 21", url: s21 },
  { id: "st22", name: "Static 22", url: s22 },
  { id: "st23", name: "Static 23", url: s23 },
  { id: "st24", name: "Static 24", url: s24 },
  { id: "st25", name: "Static 25", url: s25 },
  { id: "st26", name: "Static 26", url: s26 },
  { id: "st27", name: "Static 27", url: s27 },
  { id: "st28", name: "Static 28", url: s28 },
  { id: "st29", name: "Static 29", url: s29 },
  { id: "st30", name: "Static 30", url: s30 },
  { id: "st31", name: "Static 31", url: s31 },
  { id: "st32", name: "Static 32", url: s32 },
  { id: "st33", name: "Static 33", url: s33 },
  { id: "st34", name: "Static 34", url: s34 },
  { id: "st35", name: "Static 35", url: s35 },
  { id: "st36", name: "Static 36", url: s36 },
  { id: "st37", name: "Static 37", url: s37 },
  { id: "st38", name: "Static 38", url: s38 },
  { id: "st39", name: "Static 39", url: s39 },
  { id: "st40", name: "Static 40", url: s40 },
  { id: "st41", name: "Static 41", url: s41 },
  { id: "st42", name: "Static 42", url: s42 },
  { id: "st43", name: "Static 43", url: s43 },
  { id: "st44", name: "Static 44", url: s44 },
  { id: "st45", name: "Static 45", url: s45 },
];


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const fetchCovers = async () => {
      try {
        const res = await API.get("/images");
        setCovers(res.data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchCovers();
  }, []);

  return (
    <div className="portfolio-container  bg-[#F6F3EC] ">
      <h2
        className="section-title"
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          fontFamily: "'Allura', cursive",
          fontSize: "50px",
          color: "black",
        }}
      >
        Portfolio
      </h2>

      <div className="underline" data-aos="fade-down" data-aos-delay="300"></div>

      {/* ------------ STATIC IMAGES SECTION ------------ */}
      <div className="gallery mt-28" data-aos="fade-up" data-aos-delay="200">
        {staticImages.map((img) => (
          <div key={img.id} className="gallery-item">
            <div className="gallery-card">
              <img src={img.url} alt={img.name} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {/* ------------ API ALBUM IMAGES SECTION ------------ */}
      <div className="gallery" data-aos="fade-up" data-aos-delay="300">
        {covers.length > 0 ? (
          covers.map((cover) => {
            const imageSrc = cover.url?.startsWith("http")
              ? cover.url
              : `https://dp-c-backend.onrender.com${cover.url}`;

            return (
              <div
                key={cover._id}
                className="gallery-item"
                onClick={() =>
                  navigate(`/album/${encodeURIComponent(cover.name)}`)
                }
              >
                <div className="gallery-card">
                  <img src={imageSrc} alt={cover.name} loading="lazy" />
                  <span className="magnify-icon">
                    <FaSearch className="gallery-icon" />
                  </span>
                </div>
                <p className="gallery-title">{cover.name}</p>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No albums found
          </p>
        )}
      </div>
    </div>
  );
}
