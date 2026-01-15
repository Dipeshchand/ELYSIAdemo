
import { useState, useEffect } from "react";

// ---------- STATIC LOCAL VIDEOS ----------
import video1 from "../assets/videos/new.mp4";
import video2 from "../assets/videos/colour.mp4";
import video3 from "../assets/videos/entrence.mp4";
import video4 from "../assets/videos/high.mp4";
import video5 from "../assets/videos/propose.mp4";
import video6 from "../assets/videos/team.mp4";
import videos7 from "../assets/videos/video.mp4"

const STATIC_VIDEOS = [
  { type: "local", src: video1 },
  { type: "local", src: video2 },
  { type: "local", src: video3 },
  { type: "local", src: video4 },
  { type: "local", src: video5 },
  { type: "local", src: videos7 },
  { type: "local", src: video6 },
];

// ---------- YOUTUBE SETTINGS ----------
const API_KEY = "AIzaSyA7KSgn6OWkrc6nLsPmjv-ap99BWSe1msA";
const CHANNEL_ID = "UC16yYbO8a2XUj1rK831vaaA";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchYoutubeVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&maxResults=10&order=date&key=${API_KEY}`
        );

        const data = await res.json();

        const ytVideos = (data.items || []).map(v => ({
          type: "youtube",
          videoId: v.id.videoId,
          thumbnail: v.snippet.thumbnails.high.url,
        }));

        setVideos([...STATIC_VIDEOS, ...ytVideos]);
      } catch (error) {
        console.error("YouTube API Error:", error);
        setVideos([...STATIC_VIDEOS]);
      }
    };

    fetchYoutubeVideo();
  }, []);
  return (
    <section className="py-20 px-4 mt-50 bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-14">
          Our Events in Motion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(index)}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-black"
            >
              <div className="aspect-video w-full">

                {/* ---------- LOCAL VIDEO ---------- */}
                {video.type === "local" &&
                  (activeVideo === index ? (
                    <video
                      src={video.src}
                      controls
                      autoPlay
                      playsInline
                      className="w-full  object-cover"
                    />
                  ) : (
                    <>
                      <video
                        src={video.src}
                        muted
                        preload="metadata"
                        playsInline
                        className="w-full  object-cover pointer-events-none"
                      />
                      <OverlayPlayButton />
                    </>
                  ))}

                {/* ---------- YOUTUBE VIDEO ---------- */}
                {video.type === "youtube" &&
                  (activeVideo === index ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt="YouTube thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <OverlayPlayButton />
                    </>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PLAY OVERLAY ----------
function OverlayPlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white/80 backdrop-blur-lg p-4 rounded-full shadow-xl transition group-hover:scale-110">
        <svg
          className="w-8 h-8 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
