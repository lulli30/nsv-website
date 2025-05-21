import React, { useState, useEffect, useRef } from "react";
import { DiscordLogo, ServerIcon, SendHorizontal } from "./Icons";

const JoinSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const colors = ["#7B5BE5", "#9747FF", "#FFC108", "#242038", "#1A1823"];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < 75; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color + "30";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setSubmitted(true);
    setEmail("");

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1823]/90 to-[#1A1823]/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Join Our{" "}
            <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Community
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Become part of our growing Minecraft family and start your adventure
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#242038]/50 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg shadow-black/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Server Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#7B5BE5]/20 to-[#9747FF]/20 rounded-lg transition-transform group-hover:scale-110">
                  <ServerIcon className="h-6 w-6 text-[#7B5BE5]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1 group-hover:text-[#7B5BE5] transition-colors">
                    Server Address
                  </h4>
                  <p className="text-gray-400 mb-2">play.blockcraft.com</p>
                  <button
                    className="text-sm px-3 py-1 bg-gradient-to-r from-[#7B5BE5]/20 to-[#9747FF]/20 text-[#7B5BE5] rounded-lg hover:from-[#7B5BE5]/30 hover:to-[#9747FF]/30 transition-all transform hover:scale-105"
                    onClick={() =>
                      navigator.clipboard.writeText("play.blockcraft.com")
                    }
                  >
                    Copy IP
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#FFC108]/20 to-[#FFD700]/20 rounded-lg transition-transform group-hover:scale-110">
                  <DiscordLogo className="h-6 w-6 text-[#FFC108]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1 group-hover:text-[#FFC108] transition-colors">
                    Join Our Discord
                  </h4>
                  <p className="text-gray-400 mb-2">
                    Connect with the community
                  </p>
                  <a
                    href="https://discord.gg/blockcraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm px-3 py-1 bg-gradient-to-r from-[#FFC108]/20 to-[#FFD700]/20 text-[#FFC108] rounded-lg hover:from-[#FFC108]/30 hover:to-[#FFD700]/30 transition-all transform hover:scale-105"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#242038]/50 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg shadow-black/10">
            <h3 className="text-2xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest server updates, events,
              and announcements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 pl-4 pr-12 bg-[#1A1823]/80 border border-[#7B5BE5]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B5BE5] text-white transition-all placeholder-gray-500 group-hover:border-[#7B5BE5]/40"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#7B5BE5] hover:text-[#9747FF] transition-colors"
                >
                  <SendHorizontal className="h-5 w-5" />
                </button>
              </div>

              {submitted && (
                <div className="text-[#7B5BE5] text-sm animate-fade-in">
                  Thanks for subscribing! We'll keep you updated.
                </div>
              )}
            </form>

            <div className="mt-6 text-xs text-gray-400">
              By subscribing, you agree to receive emails from BlockCraft. You
              can unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
