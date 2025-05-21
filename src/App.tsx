import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import AchievementsSection from "./components/AchievementsSection";
import FeaturesSection from "./components/FeaturesSection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <Navbar />
      <Hero />
      <TeamSection />
      <AchievementsSection />
      <FeaturesSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;
