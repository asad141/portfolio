"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const index = () => {
  return (
    <div className="max-w-[85%] mx-auto p-10">
      <div className="flex gap-10 lg:flex-row flex-col">
        <div className="relative rounded-full">
          <Image
            src="/logo.jpeg"
            alt="logo"
            className="rounded-lg"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold my-2">
            <Typewriter words={["Hi, I am Asad Ali"]}></Typewriter>
          </h1>

          <h2 className="text-2xl">Front End Developer</h2>
          <p>
            I&apos;m a Front End Developer graduate seeking to find the
            opportunity to work in a challenging working environment that will
            encourage me to improve and learn new and necessary skills as well
            as be motivated by the company to do my best for the sake of helping
            me and the company advancement in the software industry.
          </p>
        </div>
      </div>
      <div className="lg:w-[80%] w-full mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/3 w-full">
            <p className="text-2xl font-bold my-2 text-blue-600 uppercase">
              Skills
            </p>
            <div className="flex flex-wrap items-center gap-[6px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#E44D26" />
                  <path
                    d="M14.5 12L15.9 28.5L24 31L32.1 28.5L33.5 12H14.5Z"
                    fill="#F16529"
                  />
                  <path
                    d="M24 14.8H30.6L30.3 18.1H24V14.8ZM24 21.2H30L29.6 25.3L24 27.1V21.2ZM24 14.8V18.1H17.7L17.4 14.8H24ZM24 21.2V27.1L18.5 25.3L18.2 21.2H24Z"
                    fill="#ffffff"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    HTML
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#7952B3" />
                  <path
                    d="M17 12h11.5c2.9 0 5.5 1.6 5.5 5.2 0 2.1-1.1 3.5-2.8 4.3v0.1c2.5 0.7 3.9 2.5 3.9 5 0 4-3.2 5.9-6.5 5.9H17V12zm5.1 7.4h4.4c1.3 0 2.4-0.8 2.4-2.2 0-1.5-1-2.2-2.4-2.2h-4.4v4.4zm0 7.3h4.6c1.6 0 2.7-0.9 2.7-2.4 0-1.5-1.1-2.3-2.7-2.3h-4.6v4.7z"
                    fill="#ffffff"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    BOOTSTRAP
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#264DE4" />
                  <path
                    d="M14.5 12L15.9 28.5L24 31L32.1 28.5L33.5 12H14.5Z"
                    fill="#2965F1"
                  />
                  <path
                    d="M24 14.8H30.6L30.3 18.1H24V14.8ZM24 21.2H30L29.6 25.3L24 27.1V21.2ZM24 14.8V18.1H17.7L17.4 14.8H24ZM24 21.2V27.1L18.5 25.3L18.2 21.2H24Z"
                    fill="#EBEBEB"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    CSS
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#0EA5E9" />
                  <path
                    d="M24 14c-4.5 0-7.5 2.2-9 6.5 1.5-2.2 3.3-3 5.3-2.5 1.2.3 2 1.2 2.9 2.1 1.5 1.5 3.1 3.1 6.8 3.1 4.5 0 7.5-2.2 9-6.5-1.5 2.2-3.3 3-5.3 2.5-1.2-.3-2-1.2-2.9-2.1-1.5-1.5-3.1-3.1-6.8-3.1zm-9 10c-4.5 0-7.5 2.2-9 6.5 1.5-2.2 3.3-3 5.3-2.5 1.2.3 2 1.2 2.9 2.1 1.5 1.5 3.1 3.1 6.8 3.1 4.5 0 7.5-2.2 9-6.5-1.5 2.2-3.3 3-5.3 2.5-1.2-.3-2-1.2-2.9-2.1-1.5-1.5-3.1-3.1-6.8-3.1z"
                    fill="#fff"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    TAILWIND
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#20232A" />
                  <g fill="none" stroke="#61DAFB" strokeWidth="2">
                    <ellipse cx="24" cy="24" rx="10" ry="4.5" />
                    <ellipse
                      cx="24"
                      cy="24"
                      rx="10"
                      ry="4.5"
                      transform="rotate(60 24 24)"
                    />
                    <ellipse
                      cx="24"
                      cy="24"
                      rx="10"
                      ry="4.5"
                      transform="rotate(120 24 24)"
                    />
                  </g>
                  <circle cx="24" cy="24" r="2.5" fill="#61DAFB" />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    REACT
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#000000" />
                  <text
                    x="12"
                    y="30"
                    fontSize="16"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    Next
                  </text>
                  <line
                    x1="28"
                    y1="16"
                    x2="38"
                    y2="32"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    NEXT.JS
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#663399" />
                  <path
                    d="M24 10c7.7 0 14 6.3 14 14s-6.3 14-14 14S10 31.7 10 24 16.3 10 24 10zm-11 11c.5 5.3 4.8 9.5 10.2 9.9v-3.1c-3.5-.4-6.4-3-7.1-6.4h-3.1zm2.2-4.7l16.5 16.5c1.6-2 2.5-4.4 2.5-6.8h-3c-.3 1.4-.8 2.7-1.7 3.8L15.2 16.3z"
                    fill="#ffffff"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    GATSBY
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#F03E2F" />
                  <path
                    d="M10 14h22v4H14v2h18v4H10v-10zm28 4v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4z"
                    fill="#ffffff"
                  />
                  <text
                    x="24"
                    y="42"
                    fontSize="8"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    SANITY
                  </text>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#20232A" />

                  <g fill="none" stroke="#61DAFB" strokeWidth="2">
                    <ellipse cx="24" cy="24" rx="10" ry="4.5" />
                    <ellipse
                      cx="24"
                      cy="24"
                      rx="10"
                      ry="4.5"
                      transform="rotate(60 24 24)"
                    />
                    <ellipse
                      cx="24"
                      cy="24"
                      rx="10"
                      ry="4.5"
                      transform="rotate(120 24 24)"
                    />
                  </g>
                  <circle cx="24" cy="24" r="2.5" fill="#61DAFB" />

                  <circle
                    cx="24"
                    cy="24"
                    r="14"
                    stroke="#61DAFB"
                    strokeDasharray="4 2"
                    fill="none"
                    strokeWidth="1"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="17"
                    stroke="#61DAFB"
                    strokeDasharray="2 2"
                    fill="none"
                    strokeWidth="0.8"
                  />

                  <text
                    x="24"
                    y="44"
                    fontSize="7"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    CONTEXT API
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#764ABC" />

                  <path
                    d="M32.9 17.3c-.8-.1-1.5.5-1.7 1.2-1.4-.6-3.1-.9-4.9-.9-4.1 0-7.6 1.6-9.8 4.1-.4-.2-.9-.3-1.4-.2-1 .1-1.7 1-1.6 2 .1 1 .9 1.7 1.9 1.6.9-.1 1.5-.8 1.6-1.6 1.8-2.1 4.6-3.5 7.9-3.5 1.3 0 2.6.2 3.7.7-.4.7-.3 1.7.4 2.3.7.6 1.8.5 2.3-.3.5-.8.3-1.9-.4-2.4zm-15.2 4.3c-.6.8-1 1.8-1 2.8 0 3 2.7 5.4 6.3 6.1.1.4.4.8.8 1.1.8.5 1.9.3 2.4-.6.5-.8.3-1.9-.6-2.4-.7-.4-1.5-.3-2.1.2-2.3-.4-4-1.8-4-3.5 0-.6.2-1.1.5-1.6-1.1-.4-2.2-.8-3.3-1.1zm14.8 2.6c-1 .1-1.7 1-1.6 2 .1.6.4 1.1.9 1.4-1.4 1.9-4 3.1-7 3.1-.6 0-1.2 0-1.8-.1 0-.8-.6-1.5-1.4-1.6-1-.1-1.9.6-2 .1-.1 1 .6 1.9 1.6 2 .8.1 1.5-.4 1.8-1 .6.1 1.3.1 1.9.1 4.1 0 7.7-1.7 9.5-4.3.3.1.6.2.9.2 1-.1 1.7-1 1.6-2-.2-1.1-1-1.7-2-1.6z"
                    fill="#ffffff"
                  />

                  <text
                    x="24"
                    y="44"
                    fontSize="7"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    REDUX TK
                  </text>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#0F62FE" />

                  <circle cx="24" cy="24" r="6" fill="#ffffff" />
                  <text
                    x="24"
                    y="27"
                    fontSize="4.5"
                    textAnchor="middle"
                    fill="#0F62FE"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    API
                  </text>

                  <circle cx="8" cy="24" r="3" fill="#ffffff" />
                  <circle cx="40" cy="24" r="3" fill="#ffffff" />
                  <circle cx="24" cy="8" r="3" fill="#ffffff" />
                  <circle cx="24" cy="40" r="3" fill="#ffffff" />

                  <line
                    x1="10.5"
                    y1="24"
                    x2="18"
                    y2="24"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="24"
                    x2="37.5"
                    y2="24"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <line
                    x1="24"
                    y1="10.5"
                    x2="24"
                    y2="18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <line
                    x1="24"
                    y1="30"
                    x2="24"
                    y2="37.5"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  <text
                    x="24"
                    y="46"
                    fontSize="7"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    INTEGRATIONS
                  </text>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="64"
                  height="64"
                >
                  <rect width="64" height="64" rx="12" fill="#F7DF1E" />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fill="#000000"
                    fontWeight="bold"
                    dy="10"
                  >
                    JS
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="64"
                  height="64"
                >
                  <circle cx="32" cy="32" r="30" fill="#00B4D8" />

                  <polygon points="25,16 25,48 45,32" fill="white" />

                  <text
                    x="50%"
                    y="85%"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="10"
                    fill="#FFFFFF"
                    fontWeight="bold"
                    dy="5"
                  >
                    AOS
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  width="120"
                  height="120"
                >
                  <g fill="#E10098">
                    <circle
                      cx="512"
                      cy="512"
                      r="100"
                      fill="none"
                      stroke="#E10098"
                      strokeWidth="50"
                    />
                    <path d="M512 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                    <path d="M712 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                    <path d="M312 412c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                    <path d="M512 212c-55.3 0-100 44.7-100 100s44.7 100 100 100 100-44.7 100-100-44.7-100-100-100z" />
                  </g>

                  <text
                    x="50%"
                    y="80%"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="40"
                    fill="#E10098"
                    fontWeight="bold"
                  >
                    GraphQL
                  </text>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 600 500"
                >
                  <path
                    fill="#007FFF"
                    d="M0 0v317.4l213.6 123.1V317.4L71.2 242.8V123.1L0 81.7z"
                  />
                  <path
                    fill="#007FFF"
                    d="M213.6 0v81.7l142.4 82.2-71.2 41.4-71.2-41.4v82.2l71.2 41.4 213.6-123.1V317.4l-71.2 41.4V476.3L600 353.1V123.1L213.6 0z"
                  />

                  <text
                    x="300"
                    y="495"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="48"
                    fill="#007FFF"
                    fontWeight="bold"
                  >
                    Material UI
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <p className="text-2xl font-bold my-2 text-blue-600 uppercase">
              Projects
            </p>
            <div className="working-experince pt-4 text-[12px] lg:text-[16px]">
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://www.umarjewellers.com/">
                    https://www.umarjewellers.com/
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://mawaste-stage.vercel.app/">
                    {" "}
                    https://mawaste-stage.vercel.app/
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a
                    target="blank"
                    href="https://agents.synthesys.live/ai-calls"
                  >
                    {" "}
                    https://agents.synthesys.live/ai-calls
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://retcon.netlify.app/">
                    {" "}
                    https://retcon.netlify.app/
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://biglittlerobots.vercel.app/">
                    {" "}
                    https://biglittlerobots.vercel.app/
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://theattributes.com/">
                    {" "}
                    https://theattributes.com/
                  </a>
                </p>
              </div>
              <div className="working-points flex items-center py-[4px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[#0092db] text-[18px] mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>
                <p className="hover:text-[#048ed8]">
                  Link:{" "}
                  <a target="blank" href="https://saver.charlie.com/">
                    {" "}
                    https://saver.charlie.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-2xl font-bold my-2 text-blue-600 uppercase">
            Education
          </p>
          <div className="working-experince pt-4">
            <h2 className="working-as font-bold text-lg">
              Bachelor of Computer science
            </h2>
            <h2 className="company-name text-[18px] font-[500]">
              comsats university abbottabad
            </h2>
            <div className="data-location flex justify-between text-sm italic pb-2 border-b-[1px]">
              <p className="start-date opacity-[0.8]">2021 - 2025</p>
              <p className="location opacity-[0.8]">Abbottabad</p>
            </div>
          </div>
          <div className="working-experince pt-4">
            <h2 className="working-as font-bold text-lg">FSC</h2>
            <h2 className="company-name text-[18px] font-[500]">Dg khan</h2>
            <div className="data-location flex justify-between text-sm italic pb-2 border-b-[1px]">
              <p className="start-date opacity-[0.8]">2021</p>
              <p className="location opacity-[0.8]">Dg khan</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold my-2 text-blue-600 uppercase">
            WORK EXPERIENCE
          </p>
          <div className="working-experince pt-4">
            <h2 className="working-as font-bold text-lg">Frontend Developer</h2>
            <h2 className="company-name text-[18px] font-[500]">Geekshub</h2>
            <div className="data-location flex justify-between text-sm italic pb-2 border-b-[1px]">
              <p className="start-date opacity-[0.8]">2021 - 2025</p>
              <p className="location opacity-[0.8]">Abbottabad</p>
            </div>
            <h2 className="font-bold text-lg my-2">
              Developing and implementing user interfaces using React.js
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                writing clean, efficient, and reusable code using React and its
                ecosystem. This includes creating components, managing state,
                handling events, and working with React Router for navigation.
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Collaborating with designers and backend developers
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Troubleshot interface software and debugged application codes to
                improve functionality and performance
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Coordinating with backend developers to integrate frontend
                components with the server- side infrastructure..
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Translating designs into code{" "}
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Working closely with UI/UX designers to understand the visual
                and functional requirements of the application
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">Testing and debugging</h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Strong debugging skills to identify and fix issues in the
                frontend codebase.
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Collaborating in an Agile environment
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Daily stand-ups, sprint planning, and other team activities
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Ensuring cross-browser compatibility
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Testing and fixing any compatibility issues that may arise
                during development
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              UI Components Designing & Application Interface Coding
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Identified web-based user interactions and developed
                highly-responsive user interface components via React concepts.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Translated designs & wireframes into high-quality code and wrote
                application interface code via JavaScript following React.js
                workflows.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Daily stand-ups, sprint planning, and other team activities.
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Code Debugging & Front-end Architecture.
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Troubleshot interface software and debugged application codes to
                improve functionality and performance.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Developed and implemented front-end architecture to support user
                interface concepts.
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Performance Optimization & Features Development
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Monitored and improved front-end performance and documented
                application changes & worked on updates.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Developed the latest user-facing features using React.js and
                built reusable components & front-end libraries for future use.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Optimized components for maximum performance across a vast array
                of web-capable devices and browsers.
              </li>
            </ul>
            <h2 className="font-bold text-lg my-2">
              Application Development & UI Designing
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Coordinated with the designing team to discuss user interface
                ideas and design changes.
              </li>
              <li className="text-[14px] 2xl:text-lg 2xl:text-lg">
                Reviewed application requirements and interface designs to
                ensure compatibility with existing applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
