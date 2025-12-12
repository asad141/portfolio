"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Helper component for animated skill icons
  const SkillIcon = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => (
    <div className="group relative skill-icon">
      <div className={`absolute -inset-0.5 ${gradient} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
      <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
        {children}
      </div>
    </div>
  );

  const projects = [
    "https://www.umarjewellers.com/",
    "https://mawaste-stage.vercel.app/",
    "https://agents.synthesys.live/ai-calls",
    "https://retcon.netlify.app/",
    "https://biglittlerobots.vercel.app/",
    "https://theattributes.com/",
    "https://saver.charlie.com/",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero Section */}
        <div
          className={`flex gap-8 lg:flex-row flex-col items-center lg:items-start mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt="logo"
                className="rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="w-full space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent my-2">
              <Typewriter
                words={["Hi, I am Asad Ali"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              Front End Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              I&apos;m a Front End Developer graduate seeking to find the
              opportunity to work in a challenging working environment that will
              encourage me to improve and learn new and necessary skills as well
              as be motivated by the company to do my best for the sake of helping
              me and the company advancement in the software industry.
            </p>
          </div>
        </div>

        {/* Skills and Projects Section */}
        <div className="lg:w-[90%] w-full mx-auto mb-16">
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="lg:w-2/3 w-full">
              <div className="mb-6">
                <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wide">
                  Skills
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"></div>
              </div>
              <div className="flex flex-wrap items-center gap-4 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <SkillIcon gradient="bg-gradient-to-r from-orange-500 to-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#E44D26" />
                    <path d="M14.5 12L15.9 28.5L24 31L32.1 28.5L33.5 12H14.5Z" fill="#F16529" />
                    <path d="M24 14.8H30.6L30.3 18.1H24V14.8ZM24 21.2H30L29.6 25.3L24 27.1V21.2ZM24 14.8V18.1H17.7L17.4 14.8H24ZM24 21.2V27.1L18.5 25.3L18.2 21.2H24Z" fill="#ffffff" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">HTML</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#7952B3" />
                    <path d="M17 12h11.5c2.9 0 5.5 1.6 5.5 5.2 0 2.1-1.1 3.5-2.8 4.3v0.1c2.5 0.7 3.9 2.5 3.9 5 0 4-3.2 5.9-6.5 5.9H17V12zm5.1 7.4h4.4c1.3 0 2.4-0.8 2.4-2.2 0-1.5-1-2.2-2.4-2.2h-4.4v4.4zm0 7.3h4.6c1.6 0 2.7-0.9 2.7-2.4 0-1.5-1.1-2.3-2.7-2.3h-4.6v4.7z" fill="#ffffff" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">BOOTSTRAP</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#264DE4" />
                    <path d="M14.5 12L15.9 28.5L24 31L32.1 28.5L33.5 12H14.5Z" fill="#2965F1" />
                    <path d="M24 14.8H30.6L30.3 18.1H24V14.8ZM24 21.2H30L29.6 25.3L24 27.1V21.2ZM24 14.8V18.1H17.7L17.4 14.8H24ZM24 21.2V27.1L18.5 25.3L18.2 21.2H24Z" fill="#EBEBEB" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">CSS</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#0EA5E9" />
                    <path d="M24 14c-4.5 0-7.5 2.2-9 6.5 1.5-2.2 3.3-3 5.3-2.5 1.2.3 2 1.2 2.9 2.1 1.5 1.5 3.1 3.1 6.8 3.1 4.5 0 7.5-2.2 9-6.5-1.5 2.2-3.3 3-5.3 2.5-1.2-.3-2-1.2-2.9-2.1-1.5-1.5-3.1-3.1-6.8-3.1zm-9 10c-4.5 0-7.5 2.2-9 6.5 1.5-2.2 3.3-3 5.3-2.5 1.2.3 2 1.2 2.9 2.1 1.5 1.5 3.1 3.1 6.8 3.1 4.5 0 7.5-2.2 9-6.5-1.5 2.2-3.3 3-5.3 2.5-1.2-.3-2-1.2-2.9-2.1-1.5-1.5-3.1-3.1-6.8-3.1z" fill="#fff" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">TAILWIND</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-400 to-violet-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#20232A" />
                    <g fill="none" stroke="#61DAFB" strokeWidth="2">
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" />
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(60 24 24)" />
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(120 24 24)" />
                    </g>
                    <circle cx="24" cy="24" r="2.5" fill="#61DAFB" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">REACT</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-gray-800 to-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#000000" />
                    <text x="12" y="30" fontSize="16" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">Next</text>
                    <line x1="28" y1="16" x2="38" y2="32" stroke="#ffffff" strokeWidth="2" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">NEXT.JS</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#663399" />
                    <path d="M24 10c7.7 0 14 6.3 14 14s-6.3 14-14 14S10 31.7 10 24 16.3 10 24 10zm-11 11c.5 5.3 4.8 9.5 10.2 9.9v-3.1c-3.5-.4-6.4-3-7.1-6.4h-3.1zm2.2-4.7l16.5 16.5c1.6-2 2.5-4.4 2.5-6.8h-3c-.3 1.4-.8 2.7-1.7 3.8L15.2 16.3z" fill="#ffffff" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">GATSBY</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-red-500 to-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#F03E2F" />
                    <path d="M10 14h22v4H14v2h18v4H10v-10zm28 4v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4z" fill="#ffffff" />
                    <text x="24" y="42" fontSize="8" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">SANITY</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-400 to-violet-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#20232A" />
                    <g fill="none" stroke="#61DAFB" strokeWidth="2">
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" />
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(60 24 24)" />
                      <ellipse cx="24" cy="24" rx="10" ry="4.5" transform="rotate(120 24 24)" />
                    </g>
                    <circle cx="24" cy="24" r="2.5" fill="#61DAFB" />
                    <circle cx="24" cy="24" r="14" stroke="#61DAFB" strokeDasharray="4 2" fill="none" strokeWidth="1" />
                    <circle cx="24" cy="24" r="17" stroke="#61DAFB" strokeDasharray="2 2" fill="none" strokeWidth="0.8" />
                    <text x="24" y="44" fontSize="7" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold">CONTEXT API</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#764ABC" />
                    <path d="M32.9 17.3c-.8-.1-1.5.5-1.7 1.2-1.4-.6-3.1-.9-4.9-.9-4.1 0-7.6 1.6-9.8 4.1-.4-.2-.9-.3-1.4-.2-1 .1-1.7 1-1.6 2 .1 1 .9 1.7 1.9 1.6.9-.1 1.5-.8 1.6-1.6 1.8-2.1 4.6-3.5 7.9-3.5 1.3 0 2.6.2 3.7.7-.4.7-.3 1.7.4 2.3.7.6 1.8.5 2.3-.3.5-.8.3-1.9-.4-2.4zm-15.2 4.3c-.6.8-1 1.8-1 2.8 0 3 2.7 5.4 6.3 6.1.1.4.4.8.8 1.1.8.5 1.9.3 2.4-.6.5-.8.3-1.9-.6-2.4-.7-.4-1.5-.3-2.1.2-2.3-.4-4-1.8-4-3.5 0-.6.2-1.1.5-1.6-1.1-.4-2.2-.8-3.3-1.1zm14.8 2.6c-1 .1-1.7 1-1.6 2 .1.6.4 1.1.9 1.4-1.4 1.9-4 3.1-7 3.1-.6 0-1.2 0-1.8-.1 0-.8-.6-1.5-1.4-1.6-1-.1-1.9.6-2 .1-.1 1 .6 1.9 1.6 2 .8.1 1.5-.4 1.8-1 .6.1 1.3.1 1.9.1 4.1 0 7.7-1.7 9.5-4.3.3.1.6.2.9.2 1-.1 1.7-1 1.6-2-.2-1.1-1-1.7-2-1.6z" fill="#ffffff" />
                    <text x="24" y="44" fontSize="7" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">REDUX TK</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 48 48" className="drop-shadow-lg">
                    <rect width="48" height="48" rx="8" fill="#0F62FE" />
                    <circle cx="24" cy="24" r="6" fill="#ffffff" />
                    <text x="24" y="27" fontSize="4.5" textAnchor="middle" fill="#0F62FE" fontFamily="Arial, sans-serif" fontWeight="bold">API</text>
                    <circle cx="8" cy="24" r="3" fill="#ffffff" />
                    <circle cx="40" cy="24" r="3" fill="#ffffff" />
                    <circle cx="24" cy="8" r="3" fill="#ffffff" />
                    <circle cx="24" cy="40" r="3" fill="#ffffff" />
                    <line x1="10.5" y1="24" x2="18" y2="24" stroke="#ffffff" strokeWidth="2" />
                    <line x1="30" y1="24" x2="37.5" y2="24" stroke="#ffffff" strokeWidth="2" />
                    <line x1="24" y1="10.5" x2="24" y2="18" stroke="#ffffff" strokeWidth="2" />
                    <line x1="24" y1="30" x2="24" y2="37.5" stroke="#ffffff" strokeWidth="2" />
                    <text x="24" y="46" fontSize="7" textAnchor="middle" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold">INTEGRATIONS</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-yellow-400 to-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="72" height="72" className="drop-shadow-lg">
                    <rect width="64" height="64" rx="12" fill="#F7DF1E" />
                    <text x="50%" y="50%" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fill="#000000" fontWeight="bold" dy="10">JS</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="72" height="72" className="drop-shadow-lg">
                    <circle cx="32" cy="32" r="30" fill="#00B4D8" />
                    <polygon points="25,16 25,48 45,32" fill="white" />
                    <text x="50%" y="85%" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#FFFFFF" fontWeight="bold" dy="5">AOS</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-pink-500 to-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="72" height="72" className="drop-shadow-lg">
                    <g fill="#E10098">
                      <circle cx="512" cy="512" r="100" fill="none" stroke="#E10098" strokeWidth="50" />
                      <path d="M512 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                      <path d="M712 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                      <path d="M312 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                      <path d="M512 212c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                    </g>
                    <text x="50%" y="80%" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="40" fill="#E10098" fontWeight="bold">GraphQL</text>
                  </svg>
                </SkillIcon>
                <SkillIcon gradient="bg-gradient-to-r from-purple-500 to-purple-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 600 500" className="drop-shadow-lg">
                    <path fill="#007FFF" d="M0 0v317.4l213.6 123.1V317.4L71.2 242.8V123.1L0 81.7z" />
                    <path fill="#007FFF" d="M213.6 0v81.7l142.4 82.2-71.2 41.4-71.2-41.4v82.2l71.2 41.4 213.6-123.1V317.4l-71.2 41.4V476.3L600 353.1V123.1L213.6 0z" />
                    <text x="300" y="495" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="48" fill="#007FFF" fontWeight="bold">Material UI</text>
                  </svg>
                </SkillIcon>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="mb-6">
                <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wide">
                  Projects
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"></div>
              </div>
              <div className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-3">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 dark:from-slate-700 dark:to-slate-800 hover:from-purple-100 hover:to-violet-100 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="text-purple-600 dark:text-purple-400 text-xl mr-3 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                    >
                      <path d="M5 11h14v2H5z"></path>
                    </svg>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 truncate">
                      {project.replace(/^https?:\/\//, "")}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wide">
              Education
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"></div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Bachelor of Computer Science
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-3">
                COMSATS University Abbottabad
              </h3>
              <div className="flex justify-between items-center text-sm md:text-base text-gray-500 dark:text-gray-500 pb-3 border-b border-gray-200 dark:border-gray-700">
                <p>2021 - 2025</p>
                <p>Abbottabad</p>
              </div>
            </div>
            <div className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">FSC</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-3">Dg Khan</h3>
              <div className="flex justify-between items-center text-sm md:text-base text-gray-500 dark:text-gray-500 pb-3 border-b border-gray-200 dark:border-gray-700">
                <p>2021</p>
                <p>Dg Khan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent uppercase tracking-wide">
              Work Experience
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"></div>
          </div>
          <div className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Frontend Developer
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Geekshub
              </h3>
              <div className="flex justify-between items-center text-base text-gray-500 dark:text-gray-500">
                <p>2021 - 2025</p>
                <p>Abbottabad</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Developing and implementing user interfaces using React.js",
                  points: [
                    "Writing clean, efficient, and reusable code using React and its ecosystem. This includes creating components, managing state, handling events, and working with React Router for navigation.",
                  ],
                },
                {
                  title: "Collaborating with designers and backend developers",
                  points: [
                    "Troubleshot interface software and debugged application codes to improve functionality and performance",
                    "Coordinating with backend developers to integrate frontend components with the server-side infrastructure.",
                  ],
                },
                {
                  title: "Translating designs into code",
                  points: [
                    "Working closely with UI/UX designers to understand the visual and functional requirements of the application",
                  ],
                },
                {
                  title: "Testing and debugging",
                  points: [
                    "Strong debugging skills to identify and fix issues in the frontend codebase.",
                  ],
                },
                {
                  title: "Collaborating in an Agile environment",
                  points: ["Daily stand-ups, sprint planning, and other team activities"],
                },
                {
                  title: "Ensuring cross-browser compatibility",
                  points: [
                    "Testing and fixing any compatibility issues that may arise during development",
                  ],
                },
                {
                  title: "UI Components Designing & Application Interface Coding",
                  points: [
                    "Identified web-based user interactions and developed highly-responsive user interface components via React concepts.",
                    "Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows.",
                    "Daily stand-ups, sprint planning, and other team activities.",
                  ],
                },
                {
                  title: "Code Debugging & Front-end Architecture",
                  points: [
                    "Troubleshot interface software and debugged application codes to improve functionality and performance.",
                    "Developed and implemented front-end architecture to support user interface concepts.",
                  ],
                },
                {
                  title: "Performance Optimization & Features Development",
                  points: [
                    "Monitored and improved front-end performance and documented application changes & worked on updates.",
                    "Developed the latest user-facing features using React.js and built reusable components & front-end libraries for future use.",
                    "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
                  ],
                },
                {
                  title: "Application Development & UI Designing",
                  points: [
                    "Coordinated with the designing team to discuss user interface ideas and design changes.",
                    "Reviewed application requirements and interface designs to ensure compatibility with existing applications.",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {item.title}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Astra Work Experience */}
          <div className="mt-8 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Senior Frontend Developer
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                Astra
              </h3>
              <div className="flex justify-between items-center text-base text-gray-500 dark:text-gray-500">
                <p>April 2025 - Present</p>
                <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Web3 | Custodial & Non-Custodial Wallets
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Web3 Interface Development",
                  points: [
                    "Developed secure Web3 interfaces for both custodial and non-custodial wallet systems, ensuring safe key handling and best cryptographic practices.",
                  ],
                },
                {
                  title: "Dashboard & Transaction Interfaces",
                  points: [
                    "Built and optimized user dashboards, transaction flows, staking interfaces, and on-chain data views using React, TypeScript, and Web3 libraries.",
                  ],
                },
                {
                  title: "Blockchain Integration",
                  points: [
                    "Integrated blockchain functionalities including wallet creation, authentication, signing, broadcasting transactions, and interacting with smart contracts.",
                  ],
                },
                {
                  title: "Secure Key Storage",
                  points: [
                    "Worked with WebCrypto + IndexedDB for secure key storage, avoiding vulnerable methods like localStorage.",
                  ],
                },
                {
                  title: "Collaboration & API Development",
                  points: [
                    "Collaborated with blockchain engineers to implement secure API layers, improve UX, and reduce latency in real-time Web3 operations.",
                  ],
                },
                {
                  title: "Performance Optimization",
                  points: [
                    "Improved front-end performance by optimizing components, reducing bundle sizes, and using advanced caching strategies.",
                  ],
                },
                {
                  title: "UI Libraries & Design Systems",
                  points: [
                    "Created reusable UI libraries, design systems, and implemented responsive layouts across all browsers and devices.",
                  ],
                },
                {
                  title: "Code Reviews & Architecture",
                  points: [
                    "Participated in code reviews, architecture discussions, and feature planning for large-scale Web3 applications.",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {item.title}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
