import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Hellshot from "./components/Hellshot.jsx";
import PixelGallery from "./components/PixelGallery.jsx";
import AnimationGallery from "./components/AnimationGallery.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="crt" aria-hidden="true" />
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hellshot />
        <PixelGallery />
        <AnimationGallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
