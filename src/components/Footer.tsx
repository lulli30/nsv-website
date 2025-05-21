import React from "react";
import { Twitter, Github, Youtube, Heart } from "lucide-react";
import { Cpu } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1823] text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#7B5BE5] to-[#9747FF] rounded-full blur-[128px] transform -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#FFC108] to-[#FFD700] rounded-full blur-[128px] transform translate-x-1/2 translate-y-1/2 opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold mb-4 group">
              <div className="p-2 bg-gradient-to-br from-[#7B5BE5]/20 to-[#9747FF]/20 rounded-lg transition-transform group-hover:scale-110">
                <Cpu className="h-6 w-6 text-[#7B5BE5]" />
              </div>
              <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
                Noble Soverign
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              An elite Minecraft community focused on creativity, competition,
              and friendly gameplay.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gradient-to-br from-[#7B5BE5]/10 to-[#9747FF]/10 rounded-lg hover:from-[#7B5BE5]/20 hover:to-[#9747FF]/20 transition-all transform hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-[#7B5BE5]" />
              </a>
              <a
                href="#"
                className="p-2 bg-gradient-to-br from-[#7B5BE5]/10 to-[#9747FF]/10 rounded-lg hover:from-[#7B5BE5]/20 hover:to-[#9747FF]/20 transition-all transform hover:scale-110"
              >
                <Github className="h-5 w-5 text-[#7B5BE5]" />
              </a>
              <a
                href="#"
                className="p-2 bg-gradient-to-br from-[#FFC108]/10 to-[#FFD700]/10 rounded-lg hover:from-[#FFC108]/20 hover:to-[#FFD700]/20 transition-all transform hover:scale-110"
              >
                <Youtube className="h-5 w-5 text-[#FFC108]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFC108] transition-colors"
                >
                  Server Rules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFC108] transition-colors"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFC108] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFC108] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#7B5BE5]/10 text-sm text-center text-gray-400">
          <div className="flex justify-center items-center gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-[#7B5BE5] fill-[#7B5BE5]" />
            <span>by Noble Soverign Team</span>
          </div>
          <p className="mt-2">
            © {new Date().getFullYear()} Noble Soverign. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Minecraft is a trademark of Mojang Studios. This site is not
            affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
