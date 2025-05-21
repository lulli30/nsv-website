import React from "react";
import {
  MapPin,
  Shield,
  Sword,
  Pickaxe,
  Gem,
  Cpu,
  Castle,
  Puzzle,
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: {
    from: string;
    to: string;
  };
}

const features: Feature[] = [
  {
    id: 1,
    title: "Survival Worlds",
    description:
      "Multiple themed survival worlds with custom terrain and unique challenges.",
    icon: <MapPin className="h-6 w-6" />,
    gradient: {
      from: "#7B5BE5",
      to: "#9747FF",
    },
  },
  {
    id: 2,
    title: "Protected Claims",
    description:
      "Advanced land claim system to protect your builds and resources.",
    icon: <Shield className="h-6 w-6" />,
    gradient: {
      from: "#FFC108",
      to: "#FFD700",
    },
  },
  {
    id: 3,
    title: "PvP Arenas",
    description:
      "Competitive combat arenas with regular tournaments and prizes.",
    icon: <Sword className="h-6 w-6" />,
    gradient: {
      from: "#7B5BE5",
      to: "#9747FF",
    },
  },
  {
    id: 4,
    title: "Custom Economy",
    description:
      "Balanced player-driven economy with shops and trading systems.",
    icon: <Gem className="h-6 w-6" />,
    gradient: {
      from: "#FFC108",
      to: "#FFD700",
    },
  },
  {
    id: 5,
    title: "Creative Plots",
    description: "Unlimited creative plots to unleash your building potential.",
    icon: <Pickaxe className="h-6 w-6" />,
    gradient: {
      from: "#7B5BE5",
      to: "#9747FF",
    },
  },
  {
    id: 6,
    title: "Custom Plugins",
    description: "Unique gameplay features and quality-of-life improvements.",
    icon: <Cpu className="h-6 w-6" />,
    gradient: {
      from: "#FFC108",
      to: "#FFD700",
    },
  },
  {
    id: 7,
    title: "Fantasy RPG",
    description:
      "Immersive role-playing experience with quests and custom mobs.",
    icon: <Castle className="h-6 w-6" />,
    gradient: {
      from: "#7B5BE5",
      to: "#9747FF",
    },
  },
  {
    id: 8,
    title: "Minigames",
    description: "Collection of fun minigames to enjoy with friends.",
    icon: <Puzzle className="h-6 w-6" />,
    gradient: {
      from: "#FFC108",
      to: "#FFD700",
    },
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#1A1823] relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B5BE5]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFC108]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Server{" "}
            <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the unique gameplay experiences and features our server
            offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#242038]/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(123,91,229,0.2)] group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient.from}20, ${feature.gradient.to}20)`,
                }}
              >
                <div className="text-white">
                  {React.cloneElement(feature.icon as React.ReactElement, {
                    style: {
                      color: feature.gradient.from,
                    },
                  })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7B5BE5] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#7B5BE5] to-[#9747FF] hover:from-[#9747FF] hover:to-[#7B5BE5] text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-[#7B5BE5]/20">
            Explore Our Server
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
