import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutFeatures from "./components/AboutFeatures";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <AboutFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
