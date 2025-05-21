import React, { useEffect, useRef } from "react";
import { Trophy, Users, Calendar, Award, Clock, Target } from "lucide-react";

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "100+",
    label: "NSV Members",
    icon: <Users className="h-8 w-8 text-[#7B5BE5]" />,
  },
  {
    id: 2,
    value: "2+",
    label: "Years Online",
    icon: <Calendar className="h-8 w-8 text-[#7B5BE5]" />,
  },
  {
    id: 3,
    value: "150+",
    label: "Tournaments Hosted",
    icon: <Trophy className="h-8 w-8 text-[#7B5BE5]" />,
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "2023 Build Championship",
    description:
      "First place in the international Minecraft building competition.",
    icon: <Award className="h-8 w-8 text-[#FFC108]" />,
  },
  {
    id: 2,
    title: "World Record Speed Run",
    description: "Our team holds the record for fastest Dragon defeat.",
    icon: <Clock className="h-8 w-8 text-[#FFC108]" />,
  },
  {
    id: 3,
    title: "Featured by Mojang",
    description: "Our server was featured on the official Minecraft blog.",
    icon: <Target className="h-8 w-8 text-[#FFC108]" />,
  },
];

const AchievementsSection: React.FC = () => {
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

  return (
    <section id="achievements" className="py-20 relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1823]/90 to-[#1A1823]/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Achievements
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud of our community's accomplishments and milestones over
            the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1A1823]/80 backdrop-blur-sm p-8 rounded-lg text-center transform transition-all hover:translate-y-[-8px] hover:shadow-[0_0_25px_rgba(123,91,229,0.3)] group border border-[#7B5BE5]/10"
            >
              <div className="flex justify-center mb-4 transform transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#7B5BE5] transition-colors">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1823]/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-[#7B5BE5]/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Notable Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-[#1A1823]/50 p-6 rounded-lg transition-all hover:bg-[#7B5BE5]/20 hover:shadow-[0_0_25px_rgba(255,193,8,0.15)] group border border-[#FFC108]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 transform transition-transform group-hover:scale-110">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFC108] transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
