import React, { useState, useEffect } from "react";
import { Menu, X, Users, Trophy, Gamepad2, MessageSquare } from "lucide-react";

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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            <span className="flex items-center gap-3 text-2xl font-bold text-[#FFC108]">
              <img src="/nsv-logo.png" alt="NSV Logo" className="w-8 h-8" />
              <span>Noble Soverign</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            {[
              { name: "Team", icon: <Users className="h-5 w-5" />, id: "team" },
              {
                name: "Achievements",
                icon: <Trophy className="h-5 w-5" />,
                id: "achievements",
              },
              {
                name: "Features",
                icon: <Gamepad2 className="h-5 w-5" />,
                id: "features",
              },
              {
                name: "Join Us",
                icon: <MessageSquare className="h-5 w-5" />,
                id: "join",
              },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-gray-200 hover:text-[#7B5BE5] px-3 py-1 rounded-md transition-all font-medium text-lg"
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
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-3 pb-4 space-y-2 bg-[#1A1823]/95 backdrop-blur-sm shadow-md">
          {[
            { name: "Team", icon: <Users className="h-5 w-5" />, id: "team" },
            {
              name: "Achievements",
              icon: <Trophy className="h-5 w-5" />,
              id: "achievements",
            },
            {
              name: "Features",
              icon: <Gamepad2 className="h-5 w-5" />,
              id: "features",
            },
            {
              name: "Join Us",
              icon: <MessageSquare className="h-5 w-5" />,
              id: "join",
            },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-3 w-full px-4 py-3 text-lg font-medium text-gray-200 hover:text-[#7B5BE5] hover:bg-[#FFC108]/10 rounded-md transition-all"
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
