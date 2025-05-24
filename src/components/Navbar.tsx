import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Users,
  Trophy,
  Gamepad2,
  MessageSquare,
  Info,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (targetPosition: number, duration: number = 1000) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother animation
      const ease = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      smoothScroll(offsetPosition);
    }
  };

  const scrollToTop = () => {
    smoothScroll(0);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1823]/95 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 text-2xl font-bold text-[#FFC108] hover:text-[#FFC108]/90 transition-colors"
            >
              <img
                src="/nsv-logo.png"
                alt="NSV Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="hidden md:inline mt-3">Noble Soverign</span>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {[
              {
                name: "About",
                icon: <Info className="h-4 w-4" />,
                id: "about",
              },
              { name: "Team", icon: <Users className="h-4 w-4" />, id: "team" },
              {
                name: "Achievements",
                icon: <Trophy className="h-4 w-4" />,
                id: "achievements",
              },
              {
                name: "Features",
                icon: <Gamepad2 className="h-4 w-4" />,
                id: "features",
              },
              {
                name: "Join Us",
                icon: <MessageSquare className="h-4 w-4" />,
                id: "join",
              },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-1.5 text-gray-200 hover:text-[#7B5BE5] px-2 py-1 rounded-md transition-all font-medium text-base"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-[#7B5BE5] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2 bg-[#1A1823]/95 backdrop-blur-sm shadow-md">
          {[
            { name: "About", icon: <Info className="h-4 w-4" />, id: "about" },
            { name: "Team", icon: <Users className="h-4 w-4" />, id: "team" },
            {
              name: "Achievements",
              icon: <Trophy className="h-4 w-4" />,
              id: "achievements",
            },
            {
              name: "Features",
              icon: <Gamepad2 className="h-4 w-4" />,
              id: "features",
            },
            {
              name: "Join Us",
              icon: <MessageSquare className="h-4 w-4" />,
              id: "join",
            },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-gray-200 hover:text-[#7B5BE5] hover:bg-[#FFC108]/10 rounded-md transition-all"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
