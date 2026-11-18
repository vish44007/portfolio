import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-sky-500 selection:text-white">
      {/* White blinking circle cursor */}
      <CustomCursor />

      {/* 1. Navbar */}
      <Navbar />

      <main className="flex flex-col">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About (with 2 separate 3D white pop-up boxes for About Me & Technical Skills) */}
        <About />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Contact */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
