// import { useState } from "react";

// import video1 from "../assets/videos/new.mp4";
// import video2 from "../assets/videos/colour.mp4";
// import video3 from "../assets/videos/entrence.mp4";
// import video4 from "../assets/videos/high.mp4";
// import video5 from "../assets/videos/propose.mp4";
// import video6 from "../assets/videos/team.mp4";

// const videos = [
//   video1,
//   video2,
//   video3,
//   video4,
//   video5,
//   video6,
// ];

// export default function VideoSection() {
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <section className="py-16 px-4 bg-[#F6F3EC]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-serif italic text-center mt-50 mb-12">
//           Our Events in Motion
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
//               onClick={() => setActiveVideo(index)}
//             >
//               {activeVideo === index ? (
//                 <video
//                   src={video}
//                   controls
//                   autoPlay
//                   playsInline
//                   className="w-full h-[520px] md:h-[260px] object-cover"
//                 />
//               ) : (
//                 <>
//                   <video
//                     src={video}
//                     muted
//                     preload="metadata"
//                     className="w-full h-[520px] md:h-[260px] object-cover"
//                   />

//                   {/* Play overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                     <div className="bg-white/70 backdrop-blur-xl p-4 rounded-full shadow-xl group-hover:scale-110 transition">
//                       <svg
//                         className="w-8 h-8 text-gray-900"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";

// ---------- STATIC LOCAL VIDEOS ----------
import video1 from "../assets/videos/new.mp4";
import video2 from "../assets/videos/colour.mp4";
import video3 from "../assets/videos/entrence.mp4";
import video4 from "../assets/videos/high.mp4";
import video5 from "../assets/videos/propose.mp4";
import video6 from "../assets/videos/team.mp4";

const STATIC_VIDEOS = [
  { type: "local", src: video1 },
  { type: "local", src: video2 },
  { type: "local", src: video3 },
  { type: "local", src: video4 },
  { type: "local", src: video5 },
  { type: "local", src: video6 },
];

// ---------- YOUTUBE SETTINGS ----------
const API_KEY = "YOUR_YOUTUBE_API_KEY";
const PLAYLIST_ID = "UU16yYbO8a2XUj1rK831vaaA"; // uploads playlist

export default function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=9&key=${API_KEY}`
        );
        const data = await res.json();

        const ytVideos = (data.items || []).map(v => ({
          type: "youtube",
          videoId: v.snippet.resourceId.videoId,
          thumbnail: v.snippet.thumbnails.high.url
        }));

        // Combine static + youtube
        setVideos([...STATIC_VIDEOS, ...ytVideos]);
      } catch (err) {
        console.log("YouTube Fetch Error:", err);

        // fallback only static videos
        setVideos([...STATIC_VIDEOS]);
      }
    };

    fetchYoutubeVideos();
  }, []);

  return (
    <section className="py-16 px-4 bg-[#F6F3EC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mt-50 mb-12">
          Our Events in Motion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setActiveVideo(index)}
            >

              {/* ---------- LOCAL VIDEO ---------- */}
              {video.type === "local" && (
                activeVideo === index ? (
                  <video
                    src={video.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-[520px] md:h-[260px] object-cover"
                  />
                ) : (
                  <>
                    <video
                      src={video.src}
                      muted
                      preload="metadata"
                      className="w-full h-[520px] md:h-[260px] object-cover"
                    />
                    <OverlayPlayButton />
                  </>
                )
              )}

              {/* ---------- YOUTUBE VIDEO ---------- */}
              {video.type === "youtube" && (
                activeVideo === index ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    className="w-full h-[520px] md:h-[260px]"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      className="w-full h-[520px] md:h-[260px] object-cover"
                      alt="youtube"
                    />
                    <OverlayPlayButton />
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Play Overlay ----------
function OverlayPlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white/70 backdrop-blur-xl p-4 rounded-full shadow-xl group-hover:scale-110 transition">
        <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
