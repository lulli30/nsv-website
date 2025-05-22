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
  imageUrl: "/members/mcpfp-lullli.png",
  socialLinks: {},
  children: [
    // Emperor 2
    {
      id: 101,
      name: "Rubics",
      role: "Emperor",
      roleColor: "text-purple-400",
      bio: "Supreme ruler and master strategist.",
      imageUrl: "/api/placeholder/80/80",
      socialLinks: {},
    },
    // Emperor 3
    {
      id: 102,
      name: "Beanie",
      role: "Emperor",
      roleColor: "text-purple-400",
      bio: "Supreme ruler of the realm. Oversees all server operations and maintains peace.",
      imageUrl: "/api/placeholder/80/80",
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
    name: "Noble Blaze",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Blaze.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 202,
    name: "Noble Cyra",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Cyra.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 203,
    name: "Noble Alex",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to Emperor Alex.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 204,
    name: "Noble Phoenix",
    role: "Noble",
    roleColor: "text-green-300",
    bio: "Trusted advisor to the realm.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 205,
    name: "Noble Storm",
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
    name: `Monarch of Battle ${i + 1}`,
    role: "Monarch of Battle",
    roleColor: "text-pink-400",
    bio: "Leads all combat operations and tournaments.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  })),
  // Monarchs of Creation
  ...Array.from({ length: 1 }, (_, i) => ({
    id: 400 + i,
    name: `Monarch of Creation ${i + 1}`,
    role: "Monarch of Creation",
    roleColor: "text-lime-400",
    bio: "Oversees all building projects and creative endeavors.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  })),
  // Squires
  ...Array.from({ length: 3 }, (_, i) => ({
    id: 500 + i,
    name: `Squire ${i + 1}`,
    role: "Squire",
    roleColor: "text-cyan-300",
    bio: `Rising star in the realm #${i + 1}.`,
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  })),
];

// Table members: Knights, Builders, Gatherers, Members, Minions
const tableMembers: TeamMember[] = [
  {
    id: 7,
    name: "Noah Knight",
    role: "Knight",
    roleColor: "text-gray-300",
    bio: "Protects the realm and its citizens.",
    imageUrl: "/api/placeholder/64/64",
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
    name: "Steve Player",
    role: "Member",
    roleColor: "text-orange-600",
    bio: "Active community member.",
    imageUrl: "/api/placeholder/64/64",
    socialLinks: {},
  },
  {
    id: 10,
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
    className={`group relative flex flex-col items-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${
      isEmperor
        ? "w-56 border-2 border-purple-500/50 shadow-purple-500/20 hover:shadow-purple-500/40"
        : "w-44 border border-slate-700/50 hover:border-purple-500/50 hover:shadow-purple-500/20"
    }`}
  >
    {/* Crown decoration for Emperor */}
    {isEmperor && (
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-purple-500 to-yellow-400 p-1.5 rounded-full shadow-lg">
          <Crown className="h-4 w-4 text-white" />
        </div>
      </div>
    )}

    {/* Glowing effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Avatar with enhanced styling */}
    <div className={`relative mb-2 ${isEmperor ? "h-16 w-16" : "h-12 w-12"}`}>
      <div
        className={`${
          isEmperor ? "h-16 w-16" : "h-12 w-12"
        } rounded-full overflow-hidden border-2 ${
          isEmperor ? "border-purple-400" : "border-slate-600"
        } shadow-lg relative`}
      >
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Avatar glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border border-slate-800 shadow-sm" />
    </div>

    {/* Name */}
    <h3
      className={`font-bold mb-1 text-center text-white group-hover:text-purple-300 transition-colors duration-300 ${
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
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-1 rounded-full hover:bg-blue-400/10 transform hover:scale-110"
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
          className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-1 rounded-full hover:bg-purple-400/10 transform hover:scale-110"
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
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 p-1 rounded-full hover:bg-yellow-400/10 transform hover:scale-110"
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
      className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative min-h-screen overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-yellow-600/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/15 via-transparent to-purple-900/15" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-1/2 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

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
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 text-transparent bg-clip-text">
              Specialized Roles
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our specialized team members who excel in their respective roles
            </p>
          </div>

          <div className="relative">
            {/* Slider container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / membersPerSlide)
                  }%)`,
                }}
              >
                {sliderMembers.map((member) => (
                  <div key={member.id} className="w-1/4 flex-shrink-0 px-4">
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-purple-600/80 to-purple-600/40 p-2 rounded-full shadow-lg hover:from-purple-600 hover:to-purple-600 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-l from-purple-600/80 to-purple-600/40 p-2 rounded-full shadow-lg hover:from-purple-600 hover:to-purple-600 transition-all duration-300"
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

          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-slate-700/50">
            <table className="min-w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border-b border-slate-600/50">
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
                    className={`border-b border-slate-700/30 hover:bg-gradient-to-r hover:from-slate-700/30 hover:to-slate-800/30 transition-all duration-300 ${
                      index % 2 === 0 ? "bg-slate-800/20" : "bg-slate-900/20"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="relative">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="h-12 w-12 rounded-full object-cover border-2 border-slate-600 shadow-lg hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border border-slate-800" />
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
                            className="text-gray-400 hover:text-blue-400 transition-colors p-1 rounded hover:bg-blue-400/10"
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
                            className="text-gray-400 hover:text-purple-400 transition-colors p-1 rounded hover:bg-purple-400/10"
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
                            className="text-gray-400 hover:text-yellow-400 transition-colors p-1 rounded hover:bg-yellow-400/10"
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
