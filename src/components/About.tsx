import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#1A1823] text-white relative overflow-hidden"
    >
      {/* Enhanced background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B5BE5]/8 via-transparent to-[#FFC108]/8 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B5BE5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC108]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] text-transparent bg-clip-text">
              Noble Sovereign
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our community's journey, explore our cutting-edge servers,
            and understand the principles that unite us.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* NSV Lore/History - Featured Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#242038]/60 to-[#1A1823]/60 backdrop-blur-md rounded-2xl border border-[#7B5BE5]/20 p-8 hover:border-[#7B5BE5]/40 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7B5BE5] to-[#FFC108] rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#7B5BE5] transition-colors duration-300">
                NSV Lore & History
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Noble Sovereign (NSV) originated from UNR, a thriving Minecraft
              community group. We split due to internal strife and formed NSV.
              Creating a distinctive and engaging community for gamers and
              enthusiasts is our revitalized vision. Our adventure began in 2023
              with a small group of devoted individuals that had a passion for
              gaming and community development. We initially settled in
              Bayanihan SMP, a Philippine Minecraft server, where we formed
              lasting bonds and had amazing experiences. After Bayanihan SMP
              closed, our community moved to Yakisova SMP, maintaining our
              togetherness and shared adventures. Over time, NSV has become a
              vibrant community, conducting events and establishing friendships
              within the gaming community.
            </p>
            <div className="mt-6 flex items-center text-[#FFC108] font-medium">
              <span>Est. 2023</span>
              <div className="w-2 h-2 bg-[#FFC108] rounded-full mx-3"></div>
              <span>Minecraft Community</span>
              <div className="w-2 h-2 bg-[#FFC108] rounded-full mx-3"></div>
              <span>Yakisova SMP</span>
            </div>
          </div>

          {/* Server Info Card */}
          <div className="bg-gradient-to-br from-[#242038]/60 to-[#1A1823]/60 backdrop-blur-md rounded-2xl border border-[#FFC108]/20 p-8 hover:border-[#FFC108]/40 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFC108] to-[#7B5BE5] rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold group-hover:text-[#FFC108] transition-colors duration-300">
                Server Info
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Join us on Yakisova SMP, our current Minecraft home where we
              build, explore, and create memories together. The server offers a
              welcoming environment for both new and experienced players.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#242038] p-3 rounded-lg">
                <span className="text-[#FFC108] font-mono">
                  yakisova.net:20825
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("yakisova.net:20825");
                    const btn = document.getElementById("copyBtn");
                    if (btn) {
                      btn.textContent = "Copied!";
                      setTimeout(() => {
                        btn.textContent = "Copy";
                      }, 2000);
                    }
                  }}
                  id="copyBtn"
                  className="px-3 py-1 bg-[#7B5BE5] hover:bg-[#6a4bc4] text-white rounded-md transition-colors duration-300 text-sm"
                >
                  Copy
                </button>
              </div>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Active Community</span>
              </div>
              <div className="flex items-center text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>Survival SMP</span>
              </div>
              <div className="flex items-center text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span>Regular Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rules Section - Full Width */}
        <div className="mt-8 bg-gradient-to-r from-[#242038]/60 to-[#1A1823]/60 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Community Guidelines</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#7B5BE5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <p className="text-gray-300">
                Respect all members and staff at all times
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#7B5BE5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-gray-300">No cheating or exploiting bugs</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#7B5BE5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-gray-300">
                Keep language and content appropriate for all ages
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#7B5BE5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <p className="text-gray-300">
                Follow the instructions of staff and moderators
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#FFC108] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-black text-sm font-bold">5</span>
              </div>
              <p className="text-gray-300">
                Have fun and enjoy your time with NSV!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
