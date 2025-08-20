"use client";
import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DiMongodb, DiNpm } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiKotlin,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbTerminal2 } from "react-icons/tb";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "nitzanav80@gmail.com",
    href: "mailto:nitzanav80@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
  {
    name: "Phone",
    content: "052-3228889",
    href: "tel:052-3228889",
    icon: <FaPhone size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nitzannaveh/",
    content: "/nitzan-naveh",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/NitzanNaveh",
    content: "/nitzan-naveh",
    icon: <FaGithub size={20} />,
  },
];

const TOOLS = [
  { name: "JavaScript", content: "JavaScript is a high-level, interpreted programming language", icon: <SiJavascript size={50} color={"#f0db4f"} />, color: "#f0db4f" },
  { name: "TypeScript", content: "TypeScript is a superset of JavaScript that compiles to plain JS", icon: <SiTypescript size={50} color={"#007acc"} />, color: "#007acc" },
  { name: "HTML", content: "HTML is the standard markup language for creating web pages", icon: <FaHtml5 size={50} color="#e34c26" />, color: "#e34c26" },
  { name: "CSS", content: "CSS is the language used for styling web pages", icon: <FaCss3 size={50} color="#563d7c" />, color: "#563d7c" },
  {
    name: "Java",
    content: "Java is a high-level, class-based, object-oriented programming language",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={50} height={50} />,
    color: "#f89820",
  },
  { name: "Python", content: "Python is a high-level, interpreted programming language", icon: <SiPython size={50} color="#3776ab" />, color: "#3776ab" },
  { name: "C", content: "C is a general-purpose programming language", icon: <SiCplusplus size={50} color="#a8b9cc" />, color: "#a8b9cc" },
  { name: "C++", content: "C++ is a general-purpose programming language", icon: <SiCplusplus size={50} color="#00599c" />, color: "#00599c" },
  { name: "Kotlin", content: "Kotlin is a modern programming language for Android development", icon: <SiKotlin size={50} color="#7f52ff" />, color: "#7f52ff" },
  {
    name: "Jira",
    content: "Jira is a project management tool for agile teams",
    icon: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
        alt="Jira"
        width={50}
        height={50}
      />
    ),
    color: "#0052cc",
  },
  { name: "Nodejs", content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine", icon: <FaNodeJs size={50} color="#6cc24a" />, color: "#6cc24a" },
  { name: "React.js", content: "React is a JavaScript library for building user interfaces", icon: <FaReact size={50} color="#61dafb" />, color: "#61dafb" },
  { name: "Docker", content: "Docker is a platform for developing, shipping, and running applications", icon: <FaDocker size={50} color="#2496ed" />, color: "#2496ed" },
  { name: "Express.js", content: "Express.js is a web application framework for Node.js", icon: <SiExpress size={50} color="#fff" />, color: "#000000" },
  { name: "MongoDB", content: "MongoDB is a NoSQL document database", icon: <DiMongodb size={50} color="#4db33d" />, color: "#4db33d" },
  { name: "Tailwind CSS", content: "Tailwind CSS is a utility-first CSS framework", icon: <RiTailwindCssFill size={50} color="#06b6d4" />, color: "#06b6d4" },
  { name: "Firebase", content: "Firebase is a platform for building web and mobile applications", icon: <RiFirebaseFill size={50} color="#FFCA28" />, color: "#FFCA28" },
  { name: "Git", content: "Git is a distributed version control system", icon: <FaGit size={50} color="#f05032" />, color: "#f05032" },
  { name: "GitHub", content: "GitHub is a platform for hosting and collaborating on code", icon: <FaGithub size={50} color="#fff" />, color: "#000000" },
  { name: "VS Code", content: "Visual Studio Code is a code editor", icon: <VscCode size={50} />, color: "#007acc" },
  { name: "NPM", content: "NPM is a package manager for JavaScript", icon: <DiNpm size={50} color="#CB3837" />, color: "#CB3837" },
  { name: "Yarn", content: "Yarn is a package manager for JavaScript", icon: <FaYarn size={50} color="#2C8EBB" />, color: "#2C8EBB" },
  { name: "Linux", content: "Linux is a family of open-source operating systems", icon: <FaLinux size={50} color="#fff" />, color: "#000000" },
  { name: "Kubuntu", content: "Kubuntu is a Linux distribution", icon: <SiKubuntu size={50} color="#0077C4" />, color: "#000000" },
  { name: "Terminal", content: "Terminal is a command-line interface", icon: <TbTerminal2 size={50} color="#fff" />, color: "#000000" },
  { name: "AWS", content: "AWS is a cloud computing platform", icon: <FaAws size={50} color="#3f51b5" />, color: "#000000" },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => setToolsLoaded(true), []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w/full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <Image
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Nitzan profile"
                  src="/assets/me.jpg"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Nitzan Naveh</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">Web Developer</div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md " href={link.href}>
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">{link.content}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div className="p-10 border-[.5px] rounded-md border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Nitzan, a Comp. Sci. Engineer with 1.5 year experience in Development, DevOps and Database management
              with hands-on experience in deploying & automating workflows, and collaborating with foreign clients. Strong analytical
              skills, effective communication, and a team-oriented approach to driving process improvements and delivering results.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me exploring new technologies, or sipping coffee while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Tech carousel"
                >
                  {[...TOOLS].reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md" title={tool.content}>
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
