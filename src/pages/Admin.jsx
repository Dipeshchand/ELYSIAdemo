import { useEffect, useState } from "react";

const API = "https://elysiademo.onrender.com";

/* ================= AUTH HEADER ================= */
function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export default function Admin() {
  /* ========== AUTH STATE ========== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  /* ========== DATA STATE ========== */
  const [title, setTitle] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  /* ========== LOAD ALBUMS ONLY WHEN LOGGED IN ========== */
  useEffect(() => {
    if (loggedIn) loadAlbums();
  }, [loggedIn]);

  /* ================= LOGIN ================= */
  async function login() {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Login failed");

    localStorage.setItem("token", data.token);
    setLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  /* ================= API CALLS ================= */
  async function loadAlbums() {
    const res = await fetch(`${API}/albums`, { headers: authHeader() });
    if (res.status === 401) return logout();

    const data = await res.json();
    setAlbums(Array.isArray(data) ? data : []);
  }

  async function createAlbum() {
    if (!title) return alert("Enter album title");

    const res = await fetch(`${API}/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) return alert("Create failed");
    setTitle("");
    loadAlbums();
  }

  async function uploadCover() {
    if (!selectedAlbum || !coverFile) return alert("Missing data");

    const fd = new FormData();
    fd.append("image", coverFile);

    const res = await fetch(`${API}/albums/${selectedAlbum}/cover`, {
      method: "POST",
      headers: authHeader(),
      body: fd,
    });

    if (!res.ok) return alert("Cover upload failed");
    alert("Cover uploaded");
    loadAlbums();
  }

  async function uploadPhoto() {
    if (!selectedAlbum || !photoFile) return alert("Missing data");

    const fd = new FormData();
    fd.append("image", photoFile);

    const res = await fetch(`${API}/upload/${selectedAlbum}`, {
      method: "POST",
      headers: authHeader(),
      body: fd,
    });

    if (!res.ok) return alert("Photo upload failed");
    alert("Photo uploaded");
  }

  async function deleteAlbum() {
    if (!selectedAlbum) return alert("Select album");
    if (!window.confirm("Delete permanently?")) return;

    const res = await fetch(`${API}/albums/${selectedAlbum}`, {
      method: "DELETE",
      headers: authHeader(),
    });

    if (!res.ok) return alert("Delete failed");
    setSelectedAlbum("");
    loadAlbums();
  }

  /* ================= LOGIN UI ================= */
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className="bg-white p-8 rounded-xl shadow-xl space-y-4 w-96">
          <h2 className="text-2xl font-bold text-center">Admin Login</h2>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            onClick={login}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  /* ================= DASHBOARD UI ================= */
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 mt-28">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">

        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <button onClick={logout} className="text-red-600">
            Logout
          </button>
        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Album title"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          onClick={createAlbum}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Create Album
        </button>

        <select
          value={selectedAlbum}
          onChange={(e) => setSelectedAlbum(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        >
          <option value="">Select album</option>
          {albums.map(a => (
            <option key={a._id} value={a._id}>{a.title}</option>
          ))}
        </select>

        <input type="file" onChange={e => setCoverFile(e.target.files[0])} />
        <button onClick={uploadCover} className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Upload Cover
        </button>

        <input type="file" onChange={e => setPhotoFile(e.target.files[0])} />
        <button onClick={uploadPhoto} className="w-full bg-green-600 text-white py-2 rounded-lg">
          Upload Photo
        </button>

        <button onClick={deleteAlbum} className="w-full bg-red-600 text-white py-2 rounded-lg">
          Delete Album
        </button>

      </div>
    </div>
  );
}
