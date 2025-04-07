import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="max-w-[85%] mx-auto p-10">
      <div className="flex gap-10 lg:flex-row flex-col">
        <div className=" w-32 rounded-full relative">
          <Image
            src="/logo.png"
            alt="logo"
            className="rounded-full object-cover sticky top-24"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full">
          <h1 className="text-4xl font-bold my-2">Hi, I&apos;m Asad Ali</h1>
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
          <div className="lg:w-1/2 w-full">
            <p className="text-2xl font-bold my-2 text-blue-600 uppercase">
              Skills
            </p>
            <div className="flex flex-wrap items-center gap-[6px]">
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#FFFFFF] bg-[#048ed8]">
                HTML
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                CSS
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Bootstrap
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Tailwind
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                React JS
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                {" "}
                Next JS
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                {" "}
                Gatsby
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Sanity (CMS)
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Context Api
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Redux Toolkit
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                API Integrations
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Material UI
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                Ant Design
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                JavaScript
              </p>
              <p className="rounded-xl text-[12px] lg:text-[14px] py-2 px-3 lg:px-5 text-[#ffffff] bg-[#048ed8]">
                AOS Animation
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                Working with React JS, Next JS, Tailwind CSS, JavaScript, HTML,
                Gatsby, Sanity(CMS)
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                Convert website design and link a concept with HTML, CSS, and
                JavaScript
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                Building responsive and interactive UI designs.
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                A high level of experience with Bootstrap, Tailwind, and the CSS
                GRID system.
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                Implementing design changes
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
              <p className="disc text-[14px] 2xl:text-lg 2xl:text-lg">
                Focus on clean and safe coding practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
