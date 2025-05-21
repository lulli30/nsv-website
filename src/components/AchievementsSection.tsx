import React from "react";
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
  return (
    <section id="achievements" className="py-20 bg-[#242038] relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B5BE5]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFC108]/5 to-transparent pointer-events-none" />

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
              className="bg-[#1A1823]/50 backdrop-blur-sm p-8 rounded-lg text-center transform transition-all hover:translate-y-[-8px] hover:shadow-[0_0_25px_rgba(123,91,229,0.2)] group"
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

        <div className="bg-[#1A1823]/50 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Notable Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-[#242038]/50 p-6 rounded-lg transition-all hover:bg-[#7B5BE5]/10 hover:shadow-[0_0_25px_rgba(255,193,8,0.2)] group"
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
