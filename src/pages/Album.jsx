import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Album() {
  const { slug } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function load() {
      // Get all public albums
      const albums = await fetch("https://elysiademo.onrender.com/albums/public")
        .then(r => r.json());

      const found = albums.find(a => a.slug === slug);
      setAlbum(found);

      if (!found) return;

      // Get public photos of album
      const images = await fetch(
        `https://elysiademo.onrender.com/upload/album/${found._id}`
      ).then(r => r.json());

      setPhotos(images);
    }

    load();
  }, [slug]);

  if (!album) return <div className="mt-20 text-center">Loading...</div>;

  return (
    <div className="mt-28 px-6 mb-10  ">
      <h2 className="text-3xl text-center mb-10  bg-gradient-to-r  to-red-400">{album.title}</h2>

      <div className="columns-2 md:columns-3 lg:columns-4 [column-gap:1px]">
        {photos.map(photo => (
          <img
            key={photo._id}
            src={photo.url}
            className="w-full block mb-[1px]"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
