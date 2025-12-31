import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api";
import "./AlbumPage.css"
// import FooterSection from "../../Utilites/FooterSection";

export default function AlbumPage() {
  const { name } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await API.get(`/images/album/${name}`);
      setPhotos(res.data);
    };
    fetchPhotos();
  }, [name]);

  return (
    <div className="album-page">
      <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}>Album: {name}</h2>
      <div className="album-photos-grid">
        {photos.map((photo) => (
          <div key={photo._id} className="photo-card">
            <img src={photo.url} alt={photo.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
