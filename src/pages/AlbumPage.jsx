// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../../api";
// import "./AlbumPage.css"
// // import FooterSection from "../../Utilites/FooterSection";

// export default function AlbumPage() {
//   const { name } = useParams();
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const res = await API.get(`/images/album/${name}`);
//       setPhotos(res.data);
//     };
//     fetchPhotos();
//   }, [name]);

//   return (
//     <div className="album-page mt-30">
//       <h2 style={{ fontFamily: "'Allura', cursive", fontSize: "35px", color: "black" }}> {name}</h2>
//       <div className="album-photos-grid">
//         {photos.map((photo) => (
//           <div key={photo._id} className="photo-card">
//             <img src={photo.url} alt={photo.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./AlbumPage.css"
// export default function AlbumPage() {
//   const { name } = useParams();
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     async function loadPhotos() {
//       const res = await fetch(
//         `http://localhost:5000/photos/album/${name}`
//       );

//       const data = await res.json();
//       setPhotos(data);
//     }

//     loadPhotos();
//   }, [name]);

//   return (
//     <div className="flex ">
//       {photos.length === 0 ? (
//         <h2>No Photos Found</h2>
//       ) : (
//         photos.map((photo) => (
//           <img className="mt-50  ml-10 mb-20"
//             key={photo._id}
//             src={photo.url}
//             width="400"
//           />
//         ))
//       )}
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AlbumPage.css";

export default function AlbumPage() {
  const { name } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function loadPhotos() {
      const res = await fetch(
        `http://localhost:5000/photos/album/${name}`
      );

      const data = await res.json();
      setPhotos(data);
    }

    loadPhotos();
  }, [name]);

  return (
    <div className="px-4 md:px-10 mt-44 mb-10">

      {/* Album Title */}
      <h2
        className="text-center text-3xl md:text-5xl mb-10"
        style={{ fontFamily: "'Allura', cursive" }}
      >
        {name}
      </h2>

      {/* Photos Grid */}
      {photos.length === 0 ? (
        <h2 className="text-center">
          No Photos Found
        </h2>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={photo.url}
                alt="album"
                className="
                 
                "
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}