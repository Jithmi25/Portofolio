import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import Services from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./Pages/404";
import { ArrowUp } from "lucide-react";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <Services />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2026{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Jithmi™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2026{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Jithmi™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight
        ? Math.min(
            100,
            Math.max(0, Math.round((window.scrollY / scrollableHeight) * 100)),
          )
        : 0;

      setShowScrollTop(window.scrollY > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Ini route 404 */}
      </Routes>
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={`Scroll to top, currently ${scrollProgress}% down the page`}
          title={`Scroll progress: ${scrollProgress}%`}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#09051f]/90 text-white shadow-[0_8px_30px_rgba(99,102,241,0.3)] ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(129,140,248,0.45)] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-[#030014]"
        >
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 56 56"
            aria-hidden="true"
          >
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="2"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="url(#scroll-progress)"
              strokeLinecap="round"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 24}
              strokeDashoffset={2 * Math.PI * 24 * (1 - scrollProgress / 100)}
              className="transition-[stroke-dashoffset] duration-300"
            />
            <defs>
              <linearGradient id="scroll-progress" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          <span className="relative flex flex-col items-center justify-center leading-none">
            <ArrowUp
              size={15}
              strokeWidth={2.5}
              className="mb-0.5 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span className="text-[9px] font-semibold tracking-tight text-indigo-100">
              {scrollProgress}%
            </span>
          </span>
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
