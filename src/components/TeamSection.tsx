import React from "react";
import { Github, Globe, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Crafter",
    role: "Server Admin",
    bio: "Building epic Minecraft worlds since 2011. Specializes in redstone contraptions and server management.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Sophia Pixel",
    role: "Lead Builder",
    bio: "Award-winning builder with an eye for detail. Creates stunning landscapes and architectural masterpieces.",
    imageUrl:
      "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
  },
  {
    id: 3,
    name: "Marcus Block",
    role: "PvP Champion",
    bio: "Three-time tournament winner and combat strategist. Leads our team battles and trains new members.",
    imageUrl:
      "https://images.pexels.com/photos/2599510/pexels-photo-2599510.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "Emma Creeper",
    role: "Community Manager",
    bio: "The friendly face of our community. Organizes events and ensures everyone feels welcome.",
    imageUrl:
      "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-[#1A1823] text-white relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B5BE5]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFC108]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Team
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team of dedicated Minecraft enthusiasts brings unique skills and
            passion to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#242038]/50 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(123,91,229,0.3)] group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1823] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#7B5BE5] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#FFC108] text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#7B5BE5] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialLinks.website && (
                    <a
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#FFC108] transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
