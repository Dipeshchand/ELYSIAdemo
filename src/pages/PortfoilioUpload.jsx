import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* Skeleton */
function AlbumSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-[350px] rounded-xl"></div>
      <div className="h-5 bg-gray-300 mt-4 rounded w-3/4"></div>
    </div>
  );
}

export default function Portfolio() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlbums() {
      try {
        const res = await fetch(
          "https://elysiademo.onrender.com/albums/public",
          {
            cache:"no-store"
          }
        );

        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    loadAlbums();
  }, []);

  return (
    <div className="mt-38 px-6 mb-20" >
      <h1
          className="text-3xl text-center mb-10 bg-gradient-to-r to-red-400"
          style={{ fontFamily: "light" }}
        >
        Events Potfolio 
      </h1>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <AlbumSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link
              key={album._id}
              to={`/portfolio/${album.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={album.coverUrl}
                  className="w-full h-[650px] object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-5">
                  <h3 className="text-white text-xl font-semibold">
                    {album.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
