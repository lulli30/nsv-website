import React, { useState } from "react";
import {
  Github,
  Globe,
  Twitter,
  Crown,
  Shield,
  Hammer,
  Pickaxe,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  roleColor: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    website?: string;
  };
  children?: TeamMember[];
}

// Role icons mapping
const getRoleIcon = (role: string) => {
  switch (role.toLowerCase()) {
    case "emperor":
      return <Crown className="h-5 w-5" />;
    case "noble":
      return <Shield className="h-4 w-4" />;
    case "monarch of battle":
      return <Zap className="h-4 w-4" />;
    case "monarch of creation":
      return <Hammer className="h-4 w-4" />;
    case "squire":
      return <Users className="h-4 w-4" />;
    case "knight":
      return <Shield className="h-4 w-4" />;
    case "builder":
      return <Hammer className="h-4 w-4" />;
    case "gatherer":
      return <Pickaxe className="h-4 w-4" />;
    default:
      return <Users className="h-4 w-4" />;
  }
};

// Modified hierarchy data structure
const hierarchy: TeamMember = {
  id: 100,
  name: "Lullli",
  role: "Emperor",
  roleColor: "text-purple-400",
  bio: "Co-ruler and master of diplomacy.",
  imageUrl: "/members/staff/lullipfp.png",
  socialLinks: {},
  children: [
    // Emperor 2
    {
      id: 101,
      name: "Rubics",
      role: "Emperor",
      roleColor: "text-purple-400",
      bio: "Supreme ruler and master strategist.",
      imageUrl: "/members/staff/Rubics19pfp.png",
      socialLinks: {},
    },
    // Emperor 3
    {
      id: 102,
      name: "Beanie",
      role: "Emperor",
      roleColor: "text-purple-400",
      bio: "Supreme ruler of the realm. Oversees all server operations and maintains peace.",
      imageUrl: "/members/staff/beaniepfp.png",
      socialLinks: {
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ],
};

// Create a separate array for nobles
const nobles: TeamMember[] = [
  {
    id: 201,
    name: "Angii_werewolves",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Blaze.",
    imageUrl: "/members/staff/angiipfp.png",
    socialLinks: {},
  },
  {
    id: 202,
    name: "KODU45YT",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Cyra.",
    imageUrl: "/members/staff/kodupfp.png",
    socialLinks: {},
  },
  {
    id: 203,
    name: "n0bbi",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Alex.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 204,
    name: "PANDESAL",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to the realm.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
];

// Create a new array for the slider members
const sliderMembers: TeamMember[] = [
  // Monarchs of Battle
  ...Array.from({ length: 1 }, (_, i) => ({
    id: 300 + i,
    name: `Fakali`,
    role: "Monarch of Battle",
    roleColor: "text-pink-400",
    bio: "Leads all combat operations and tournaments.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  })),
  // Monarchs of Creation
  ...Array.from({ length: 1 }, (_, i) => ({
    id: 400 + i,
    name: `MissKonayakapmo`,
    role: "Monarch of Creation",
    roleColor: "text-lime-400",
    bio: "Oversees all building projects and creative endeavors.",
    imageUrl: "/members/staff/misskonayakapmopfp.png",
    socialLinks: {},
  })),
  // Squires
  ...Array.from({ length: 1 }, (_, i) => ({
    id: 500 + i,
    name: `Quad ${i + 1}`,
    role: "Squire",
    roleColor: "text-cyan-300",
    bio: `Rising star in the realm #${i + 1}.`,
    imageUrl: "/members/staff/quadpfp.png",
    socialLinks: {},
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    id: 600 + i,
    name: `Quad ${i + 1}`,
    role: "Squire",
    roleColor: "text-cyan-300",
    bio: `Rising star in the realm #${i + 1}.`,
    imageUrl: "/members/staff/quadpfp.png",
    socialLinks: {},
  })),
];

// Table members: Knights, Builders, Gatherers, Members, Minions
const tableMembers: TeamMember[] = [
  {
    id: 7,
    name: "Diirk",
    role: "Knight",
    roleColor: "text-gray-300",
    bio: "PVP player.",
    imageUrl: "/members/comm-mem/diirkpfp.png",
    socialLinks: {
      twitter: "https://twitter.com",
    },
  },
  {
    id: 6,
    name: "Olivia Builder",
    role: "Builder",
    roleColor: "text-green-400",
    bio: "Creates magnificent structures and landscapes.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {
      github: "https://github.com",
    },
  },
  {
    id: 8,
    name: "Ava Gatherer",
    role: "Gatherer",
    roleColor: "text-yellow-400",
    bio: "Collects resources and maintains the economy.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {
      website: "https://example.com",
    },
  },
  {
    id: 9,
    name: "HINOMORISHIHO277",
    role: "Member",
    roleColor: "text-orange-600",
    bio: "Active community member.",
    imageUrl: "/members/comm-mem/HINOMORISHIHO277pfp.png",
    socialLinks: {},
  },
  {
    id: 10,
    name: "KazueKyoto",
    role: "Member",
    roleColor: "text-orange-600",
    bio: "Active community member.",
    imageUrl: "/members/comm-mem/kazuekyotopfp.png",
    socialLinks: {},
  },
  {
    id: 11,
    name: "Theywantkayll",
    role: "Member",
    roleColor: "text-orange-600",
    bio: "Active community member.",
    imageUrl: "/members/comm-mem/theywantkayllpfp.png",
    socialLinks: {},
  },
  {
    id: 12,
    name: "Bob Minion",
    role: "Minion",
    roleColor: "text-yellow-300",
    bio: "Helps with various tasks.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
];

const MemberCard: React.FC<{ member: TeamMember; isEmperor?: boolean }> = ({
  member,
  isEmperor = false,
}) => (
  <div
    className={`group relative flex flex-col items-center bg-[#242038]/50 backdrop-blur-sm rounded-xl p-4 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
      isEmperor
        ? "w-56 border-2 border-[#7B5BE5]/50 shadow-[#7B5BE5]/20 hover:shadow-[#7B5BE5]/40"
        : "w-44 border border-[#7B5BE5]/30 hover:border-[#FFC108]/50 hover:shadow-[#FFC108]/20"
    }`}
  >
    {/* Crown decoration for Emperor */}
    {isEmperor && (
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] p-1.5 rounded-full shadow-lg">
          <Crown className="h-4 w-4 text-white" />
        </div>
      </div>
    )}

    {/* Glowing effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#7B5BE5]/10 via-[#FFC108]/10 to-[#7B5BE5]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Avatar with enhanced styling */}
    <div className={`relative mb-2 ${isEmperor ? "h-16 w-16" : "h-12 w-12"}`}>
      <div
        className={`${
          isEmperor ? "h-16 w-16" : "h-12 w-12"
        } rounded-full overflow-hidden border-2 ${
          isEmperor ? "border-[#7B5BE5]" : "border-[#FFC108]/50"
        } shadow-lg relative`}
      >
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Avatar glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#7B5BE5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-[#FFC108] rounded-full border border-[#1A1823] shadow-sm" />
    </div>

    {/* Name */}
    <h3
      className={`font-bold mb-1 text-center text-white group-hover:text-[#7B5BE5] transition-colors duration-300 ${
        isEmperor ? "text-lg" : "text-base"
      }`}
    >
      {member.name}
    </h3>

    {/* Role with icon */}
    <div className="flex items-center gap-1 mb-2">
      <span className={member.roleColor}>{getRoleIcon(member.role)}</span>
      <p
        className={`${member.roleColor} font-semibold text-center ${
          isEmperor ? "text-sm" : "text-xs"
        }`}
      >
        {member.role}
      </p>
    </div>

    {/* Bio */}
    <p
      className={`text-gray-400 text-center leading-tight mb-2 ${
        isEmperor ? "text-xs" : "text-xs"
      } line-clamp-2`}
    >
      {member.bio}
    </p>

    {/* Social links */}
    <div className="flex space-x-2 justify-center">
      {member.socialLinks.twitter && (
        <a
          href={member.socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#7B5BE5] transition-all duration-300 p-1 rounded-full hover:bg-[#7B5BE5]/10 transform hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter className="h-3 w-3" />
        </a>
      )}
      {member.socialLinks.github && (
        <a
          href={member.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FFC108] transition-all duration-300 p-1 rounded-full hover:bg-[#FFC108]/10 transform hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="h-3 w-3" />
        </a>
      )}
      {member.socialLinks.website && (
        <a
          href={member.socialLinks.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#7B5BE5] transition-all duration-300 p-1 rounded-full hover:bg-[#7B5BE5]/10 transform hover:scale-110"
          aria-label="Website"
        >
          <Globe className="h-3 w-3" />
        </a>
      )}
    </div>
  </div>
);

const renderTree = (member: TeamMember, level: number = 0) => {
  const hasChildren = member.children && member.children.length > 0;
  const isEmperor = member.role === "Emperor";

  return (
    <div className="flex flex-col items-center">
      <MemberCard member={member} isEmperor={isEmperor} />

      {hasChildren && (
        <div className="flex flex-col items-center mt-4">
          {/* Enhanced vertical connector line */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/60 via-slate-500 to-slate-600 rounded-full shadow-sm" />

          {/* Children container */}
          <div className="relative">
            {/* Enhanced horizontal connector line for multiple children */}
            {member.children!.length > 1 && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent transform -translate-y-1 rounded-full" />
            )}

            {/* Children grid */}
            <div
              className={`flex ${
                member.children!.length === 1
                  ? "justify-center"
                  : "justify-center gap-4 lg:gap-6 xl:gap-8"
              } flex-wrap`}
            >
              {member.children!.map((child) => (
                <div key={child.id} className="relative">
                  {/* Enhanced vertical connector to child */}
                  {member.children!.length > 1 && (
                    <div className="absolute top-0 left-1/2 w-0.5 h-3 bg-gradient-to-b from-purple-500/60 to-slate-600 transform -translate-x-0.5 -translate-y-3 rounded-full" />
                  )}
                  <div className="pt-2 transform transition-all duration-300 hover:scale-105">
                    {renderTree(child, level + 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const membersPerSlide = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + membersPerSlide >= sliderMembers.length
        ? 0
        : prev + membersPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - membersPerSlide < 0
        ? Math.floor((sliderMembers.length - 1) / membersPerSlide) *
          membersPerSlide
        : prev - membersPerSlide
    );
  };

  return (
    <section
      id="team"
      className="py-12 lg:py-20 bg-[#1A1823] text-white relative min-h-screen overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B5BE5]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFC108]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600/20 to-yellow-600/20 rounded-full backdrop-blur-sm border border-purple-500/30">
              <Crown className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Meet the NSV{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-yellow-400 text-transparent bg-clip-text">
              Staff and Members
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of staff and members who keep the server
            running smoothly and create an amazing experience for everyone.
          </p>
        </div>

        {/* Enhanced scrollable container for the hierarchy */}
        <div className="overflow-x-auto pb-8 mb-12">
          <div className="min-w-max flex justify-center">
            <div className="inline-block p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl backdrop-blur-sm border border-slate-700/50">
              {/* Emperors row */}
              <div className="flex justify-center gap-8 mb-8">
                <MemberCard member={hierarchy} isEmperor={true} />
                {hierarchy.children?.map((emperor) => (
                  <MemberCard
                    key={emperor.id}
                    member={emperor}
                    isEmperor={true}
                  />
                ))}
              </div>

              {/* Vertical connector line */}
              <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/60 via-slate-500 to-slate-600 rounded-full shadow-sm mx-auto mb-8" />

              {/* Nobles row */}
              <div className="flex justify-center gap-8">
                {nobles.map((noble) => (
                  <MemberCard key={noble.id} member={noble} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider section */}
        <div className="mt-16">
          <div className="text-center mb-3">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Specialized Roles
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] mx-auto mb-4 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our specialized team members who excel in their respective roles
            </p>
          </div>

          <div className="relative">
            {/* Slider container */}
            <div className="overflow-hidden py-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / membersPerSlide)
                  }%)`,
                }}
              >
                {sliderMembers.map((member) => (
                  <div key={member.id} className="w-1/4 flex-shrink-0 px-6">
                    <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                      <MemberCard member={member} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-[#7B5BE5]/80 to-[#FFC108]/40 p-2 rounded-full shadow-lg hover:from-[#7B5BE5] hover:to-[#FFC108] transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-l from-[#7B5BE5]/80 to-[#FFC108]/40 p-2 rounded-full shadow-lg hover:from-[#7B5BE5] hover:to-[#FFC108] transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Enhanced table section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Community Members
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our valued community members who make the server a vibrant place
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-[#7B5BE5]/20">
            <table className="min-w-full bg-[#242038]/50 backdrop-blur-sm overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#7B5BE5]/20 to-[#FFC108]/20 border-b border-[#7B5BE5]/30">
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold text-sm uppercase tracking-wider">
                    Avatar
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold text-sm uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold text-sm uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold text-sm uppercase tracking-wider">
                    Bio
                  </th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold text-sm uppercase tracking-wider">
                    Links
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={`border-b border-[#7B5BE5]/10 hover:bg-gradient-to-r hover:from-[#7B5BE5]/10 hover:to-[#FFC108]/10 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-[#242038]/30" : "bg-[#1A1823]/30"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="relative">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="h-12 w-12 rounded-full object-cover border-2 border-[#7B5BE5]/30 shadow-lg hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-[#FFC108] rounded-full border border-[#1A1823]" />
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-white text-lg">
                      {member.name}
                    </td>
                    <td className={`px-6 py-4 font-medium ${member.roleColor}`}>
                      <div className="flex items-center gap-2">
                        {getRoleIcon(member.role)}
                        <span>{member.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm max-w-xs">
                      {member.bio}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#7B5BE5] transition-colors p-1 rounded hover:bg-[#7B5BE5]/10"
                            aria-label="Twitter"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#FFC108] transition-colors p-1 rounded hover:bg-[#FFC108]/10"
                            aria-label="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {member.socialLinks.website && (
                          <a
                            href={member.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#7B5BE5] transition-colors p-1 rounded hover:bg-[#7B5BE5]/10"
                            aria-label="Website"
                          >
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
