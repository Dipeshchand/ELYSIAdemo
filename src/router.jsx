import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";
import AlbumPage from "./pages/AlbumPage";

// Lazy-loaded pages
const IntroPage = lazy(() => import("./pages/IntroPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));

// Simple loader
const Loader = () => (
  <div className="h-screen flex items-center justify-center text-lg font-light">
    Loading...
  </div>
);

const router = createBrowserRouter([
  // 1️⃣ INTRO PAGE
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <IntroPage />
      </Suspense>
    ),
  },

  // 2️⃣ MAIN WEBSITE
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "testimonials",
        element: (
          <Suspense fallback={<Loader />}>
            <Testimonials />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "album/:name",
        element: (
          <Suspense fallback={<Loader />}>
            <AlbumPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
