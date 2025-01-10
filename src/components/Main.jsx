import React from "react";
import "../App.css";
import profile from "../assets/profile.webp";
import yt from "../assets/yt.webp";
import link from "../assets/link.webp";
import insta from "../assets/insta.webp";
import git from "../assets/git.webp";
import one from "../assets/one.webp";
import two from "../assets/two.webp";
import three from "../assets/three.webp";
import four from "../assets/four.webp";
import five from "../assets/five.webp";
import six from "../assets/six.webp";
import seven from "../assets/seven.webp";
import eight from "../assets/eight.webp";
import nine from "../assets/nine.webp";
import ten from "../assets/black.webp";
import eleven from "../assets/todoki.webp";

const Main = () => (
  <main data-aos="fade-down" data-aos-duration="1500" className="p-4">
    <div id="home" className="flex-col grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Profile Image */}
      <div className="flex justify-center items-center xs:order-none">
        <img
          className="rounded-3xl xs:w-[500px] xs:h-[300px] ss:w-[800px] ss:h-[500px] w-full h-full object-cover"
          src={profile}
          alt="Profile"
        />
      </div>
      {/* Home */}
      <section className="border hover:scale-[1.01] transition rounded-3xl px-6 pt-4 col-span-1 ss:col-span-2 bg-gradient border-1 order-2 xs:order-none">
        <h1 className="font-bold leading-[30px] text-[25px] ss:leading-[45px] ss:text-[40px] max-w-[100%] ss:max-w-[70%] mt-5 mb-8">
          Hello, I’m Manish, a Web Developer, Editor and a Human
          <span className="text-[15px]">(I don't think so).</span>
        </h1>
        <p className="mb-10 ss:mb-36 text-gray-700 font-semibold max-w-[100%] ss:max-w-[70%]">
          A passionate and dedicated web developer, eager to create innovative and user-friendly web solutions. Let's have a chat about our next project.
        </p>
        <div className="flex flex-wrap">
          <a href="mailto:mani.phartiyal@gmail.com">
            <button className="w-[270px] h-[50px] font-bold rounded-[30px] text-[14px] text-gray-200 bg-gray-950 hover:bg-gray-800 transition duration-200 mr-5 mb-4">
              Contact Me -{">"}
            </button>
          </a>
          <div className="flex mb-5 flex-wrap w-[300px] items-center justify-between">
            <a href="https://www.instagram.com/msphartiyal/" target="_blank">
              <img src={insta} className="w-[50px] h-[50px] transition-all hover:invert ss:w-[50px]" alt="Instagram" />
            </a>
            <a href="https://github.com/RayX81194" target="_blank">
              <img src={git} className="w-[50px] h-[50px] transition-all hover:invert ss:w-[50px]" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/manishphartiyal/" target="_blank">
              <img src={link} className="w-[50px] h-[50px] transition-all hover:invert ss:w-[50px]" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@RayX81194" target="_blank">
              <img src={yt} className="w-[50px] h-[50px] transition-all hover:invert ss:w-[50px]" alt="YouTube" />
            </a>
          </div>
        </div>
      </section>
    </div>

    {/* Projects */}
    <div id="projects" className="grid xs:grid-cols-1 ss:grid-cols-2 lg:grid-cols-3 grid-cols-3 mt-5 gap-4">
      <a href="https://github.com/RayX81194/racistyt" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={ten}
          alt="Project One"
        />
      </a>
      <a href="https://github.com/RayX81194/PawRangers" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={one}
          alt="Project One"
        />
      </a>
      <a href="https://rayx81194.github.io/onizuka/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={five}
          alt="Project Five"
        />
      </a>
      <a href="https://pokedex-ray.vercel.app/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={nine}
          alt="Project Nine"
        />
      </a>
      <a href="https://github.com/RayX81194/todoki" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={eleven}
          alt="Project One"
        />
      </a>
      <a href="https://manish-p.vercel.app/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={eight}
          alt="Project Eight"
        />
      </a>
      <a href="https://rayx81194.github.io/cortex/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={four}
          alt="Project Four"
        />
      </a>
      <a href="https://rayx81194.github.io/windows-11/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={seven}
          alt="Project Seven"
        />
      </a>
      <a href="https://rayx81194.github.io/paykaro/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={three}
          alt="Project Three"
        />
      </a>
      <a href="https://rayx81194.github.io/mosam/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={two}
          alt="Project Two"
        />
      </a>
      <a href="https://rayx81194.github.io/tickmark/" target="_blank">
        <img
          className="rounded-3xl hover:scale-[1.02] transition w-full h-full"
          src={six}
          alt="Project Six"
        />
      </a>
    </div>

    {/* Contact */}
    <section id="contacts" className="border hover:scale-[1.01] transition rounded-3xl px-6 py-4 mt-5 mb-5 col-span-1 ss:col-span-2 bg-gradient border-1">
      <h1 className="font-bold text-[30px] ss:text-[40px] mb-2">Wanna Work?</h1>
      <p className="mb-3 text-gray-700 font-semibold">
        Email me or just say hello at this email.
      </p>
      <div className="flex flex-wrap">
          <a href="mailto:mani.phartiyal@gmail.com">
            <button className="w-[270px] h-[50px] font-bold rounded-[30px] text-[14px] text-gray-200 bg-gray-950 hover:bg-gray-800 transition duration-200 mr-5 mb-4">
              mani.phartiyal@gmail.com -{">"}
            </button>
          </a>
        </div>
    </section>
  </main>
);

export default Main;
