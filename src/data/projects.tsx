import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";

import { SiDotnet } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiKotlin,
  SiJetpackcompose,
  SiGooglemaps,
  SiCloudinary,
  SiSqlite,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  dotnet: {
    title: ".NET 8",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  sql: {
    title: "SQL Server",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  jira: {
    title: "Jira",
    bg: "black",
    fg: "white",
    icon: <SiJira />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  kotlin: {
    title: "Kotlin",
    bg: "black",
    fg: "white",
    icon: <SiKotlin/>,
  },
  jetpackCompose: {
    title: "Jetpack Compose",
    bg: "black",
    fg: "white",
    icon: <SiJetpackcompose/>,
  },
  mvvm: {
    title: "MVVM",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>MVVM</strong>
      </span>
    ),
  },
  roomDb: {
    title: "Room DB",
    bg: "black",
    fg: "white",
    icon: <SiSqlite/>,
  },
  googleMaps: {
    title: "Google Maps",
    bg: "black",
    fg: "white",
    icon: <SiGooglemaps/>,
  },
  cloudinary: {
    title: "Cloudinary",
    bg: "black",
    fg: "white",
    icon: <SiCloudinary/>,
  },
  navigation: {
    title: "Jetpack Navigation",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Nav</strong>
      </span>
    ),
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: (
      <span className="text-xs font-bold">
        JWT
      </span>
    ),
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // {
  //   id: "codingducks",
  //   category: "Coding platform",
  //   title: "Coding Ducks",
  //   src: "/assets/projects-screenshots/codingducks/landing.png",
  //   screenshots: ["landing.png"],
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.reactQuery,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.sockerio,
  //     ],
  //   },
  //   live: "https://www.codingducks.xyz/",
  //   github: "https://github.com/Naresh-Khatri/Coding-Ducks",
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono text-2xl text-center">
  //           Coding ducks = LeetCode + CodePen + CSS Battles
  //         </TypographyP>
  //         <TypographyP className="font-mono ">
  //           Coding Ducks is your coding dojo — where you level up your skills,
  //           battle in real-time code duels, and earn badges like a true code
  //           warrior. Track your progress, flex your brain, and climb the
  //           leaderboard. Ready to quack the code?
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Solve coding problems similar to LeetCode, enhancing your
  //           problem-solving skills across various languages.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/problems.png`,
  //             `${BASE_PATH}/codingducks/problem.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Collaborate in real-time with others in a multiplayer coding
  //           environment, just like CodePen but with a social twist.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/ducklets.png`,
  //             `${BASE_PATH}/codingducks/ducklet1.png`,
  //             `${BASE_PATH}/codingducks/ducklet2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

  //         <p className="font-mono mb-2">
  //           Challenge yourself to create UI components with HTML/CSS/JS, and get
  //           instant feedback with an automated similarity scoring.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/css-battles.png`,
  //             `${BASE_PATH}/codingducks/css-battle.png`,
  //             `${BASE_PATH}/codingducks/css-battle2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Organize or participate in coding competitions. Successfully used to
  //           host three contests during college.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Test and execute your code instantly in my versatile online code
  //           runner.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Track your progress, earn badges, and climb the rankings with
  //           detailed user profiles and activity tracking.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/users.png`,
  //             `${BASE_PATH}/codingducks/user.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "couponluxury",
  //   category: "Coupon site",
  //   title: "Coupon Luxury",
  //   src: "/assets/projects-screenshots/couponluxury/landing.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  //   live: "https://www.couponluxury.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.vue,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content(): JSX.Element {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           CouponLuxury is your go-to destination for snagging the best deals
  //           without lifting a finger. Whether you&apos;re hunting for the latest
  //           discounts or trying to save a buck at your favorite stores,
  //           CouponLuxury&apos;s got you covered.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-4">
  //           As soon as you land, boom! You&apos;re greeted with the freshest
  //           coupons and top-tier deals that&apos;ll make your wallet happy.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
  //         <TypographyH3 className="my-4 ">Stores</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into a comprehensive list of stores, each packed with exclusive
  //           deals and discounts. It&apos;s like having a VIP pass to every sale
  //           in town.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/stores.png`,
  //             `${BASE_PATH}/couponluxury/store.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
  //           neatly organized here. No more endless scrolling; just pick a
  //           category and get the best offers instantly.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Powered by Vue.js, this bad boy allows us to keep the content
  //           dynamic and up-to-date. From flash sales to limited-time offers, my
  //           CMS ensures everything&apos;s live and relevant.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/cms-1.png`,
  //             `${BASE_PATH}/couponluxury/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-5">
  //           Plus, I&apos;ve sprinkled in some extra magic like personalized
  //           deal recommendations, user-friendly search features, and a sleek,
  //           responsive design that works like a charm on any device.
  //         </p>
  //         <p className="font-mono mb-2">
  //           CouponLuxury isn&apos;t just a website; it&apos;s your personal deal-hunting
  //           assistant, ensuring you never miss out on a bargain!
  //         </p>
  //         {/* <TypographyP className="my-4 mt-8">
  //         <strong>Misc:</strong>
  //         Hosted not one, not two, but THREE coding contests (Codemacha) during
  //         college. Safe to say, Coding Ducks passed the vibe check.
  //       </TypographyP>
  //       <TypographyP className="my-4 mt-8">
  //         <strong>Target Audience:</strong>
  //         For all the novice coders out there ready to make their mark.
  //       </TypographyP> */}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "the-booking-desk",
  //   category: "Travel",
  //   title: "The Booking Desk",
  //   src: "/assets/projects-screenshots/the-booking-desk/landing.png",
  //   screenshots: ["1.png"],
  //   live: "https://thebookingdesk.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.tailwind,
  //     ],
  //     backend: [PROJECT_SKILLS.sanity],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Booking Desk is your ultimate travel consultation hub, designed
  //           to turn your wanderlust dreams into reality. With a focus on smooth
  //           and visually captivating animations, navigating the site feels like
  //           a breeze—it&apos;s almost as if the destinations are calling you.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-8">
  //           A sleek, modern interface greets you, featuring the latest travel
  //           tips, deals, and must-visit spots around the globe.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into the curated articles written by travel experts. Whether
  //           you&apos;re looking for hidden gems or travel hacks, our blog section has
  //           you covered.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/blogs.png`,
  //             `${BASE_PATH}/the-booking-desk/blog.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
  //           to manage all the content with ease, ensuring you always get the
  //           latest and greatest information.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/cms-1.png`,
  //             `${BASE_PATH}/the-booking-desk/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 my-8">
  //           With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
  //           just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
  //           next adventure or just daydreaming, our site delivers a top-notch
  //           experience that&apos;s both informative and enjoyable.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // Portfolio project
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://nareshkhatri.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // GhostChat project
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },

  // +
  { // 01. Chargehood App project
    id: "ChargehoodApp",
    category: "App Development",
    title: "ChagreHood App",
    src: "/assets/projects-screenshots/ChargehoodApp/4.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://www.youtube.com/watch?v=3nHAvhUWASM",
    github:"https://github.com/NitzanNaveh/ChargehoodApp",
    skills: {
      frontend: [
        PROJECT_SKILLS.kotlin,
        PROJECT_SKILLS.jetpackCompose,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.roomDb,
        PROJECT_SKILLS.googleMaps,
        PROJECT_SKILLS.cloudinary,
        PROJECT_SKILLS.navigation,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Chargehood is an electric vehicle charging app that helps users find nearby charging stations, start and manage charging sessions, and track booking history.
          It supports station owners with tools to add, edit, and delete their stations, upload photos via Cloudinary, and manage payments. 
          The app integrates Google Maps for navigation, offers secure authentication via Firebase, and stores data with Room DB for offline access. 
          Built with Kotlin, Jetpack Compose, and MVVM architecture, it ensures smooth navigation through Jetpack Navigation Component.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ChargehoodApp/5.png`,
              `${BASE_PATH}/ChargehoodApp/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Roomatch app
    id: "RoomatchApp",
    category: "App Development",
    title: "Roomatch App",
    src: "/assets/projects-screenshots/RoomatchApp/1.png",
    screenshots: ["/assets/projects-screenshots/RoomatchApp/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://www.youtube.com/watch?v=kSwQQ943zFM",
    github: "https://github.com/NitzanNaveh/RooMatchApp",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
          RooMatch App – Find Your Perfect Living Match
          </TypographyP>
          <TypographyP className="font-mono ">
          RooMatch is an Android application designed to help users find the perfect apartment 
        and roommate by matching personal preferences with real listings and profiles. 
        Using a smart matching algorithm that learns from user behavior, it improves match 
        quality over time. Built as a final-year project by a team of five, it delivers a 
        smooth, personalized experience for both renters and property owners.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          
          <ul className="font-mono mb-2 list-disc ml-6 space-y-2">
        <li> Discover Matches – Swipe through personalized roommate and property matches.</li>
        <li> Smart Preferences – Advanced filtering based on lifestyle and needs.</li>
        <li> Property Management – Owners can add, manage, and publish rentals.</li>
        <li> Roommate Profiles – View potential roommates&apos; details and match scores.</li>
        <li> Google Places Integration – Autocomplete for property addresses.</li>
        <li> Secure Login/Register – JWT and Google Authentication support.</li>
        <li> Offline-First – Caching for smooth UX even with poor connectivity.</li>
        <li> Gemini Bio Suggestion – AI-generated personal bios.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/RoomatchApp/2.png`,
              `${BASE_PATH}/RoomatchApp/3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Automating Infrastructure Provisioning</TypographyH3>
          <div className="font-mono mb-2 space-y-1">
            <strong>Language:</strong> Kotlin<br />
            <strong>UI:</strong> Jetpack Compose, Material 3<br />
            <strong>Architecture:</strong> MVVM + Clean Architecture<br />
            <strong>Networking:</strong> Ktor Server, Retrofit Client<br />
            <strong>Database:</strong> Room, MongoDB Atlas<br />
            <strong>Navigation:</strong> Compose Destinations<br />
            <strong>Image Uploading:</strong> Cloudinary SDK<br />
            <strong>Places API:</strong> Google Places SDK<br />
            <strong>Async:</strong> Kotlin Coroutines, Flow
          </div>
          <SlideShow
            images={[
              `${BASE_PATH}/RoomatchApp/5.png`,
              `${BASE_PATH}/RoomatchApp/4.png`,
              `${BASE_PATH}/RoomatchApp/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://www.nitzannaveh.com/",
    github:"https://github.com/Abhiz2411/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. Mini Project Manager
    id: "MiniProjectManager",
    category: "Full Stack",
    title: "Mini Project Manager",
    src: "/assets/projects-screenshots/MiniProjectManager/1.png",
    screenshots: ["1.png"],
    live: "https://frontend-mpm.vercel.app/login",
    github:"https://github.com/NitzanNaveh/frontend-MPM",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.dotnet, PROJECT_SKILLS.sql, PROJECT_SKILLS.jwt],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            <strong>Mini Project Manager (MPM)</strong> – A full-featured backend system built with 
            .NET 8 Web API. This project provides secure project and task management with modern 
            best practices:  
            <br/><br/>
            <strong>JWT Authentication</strong> for secure user access  
            <strong>Entity Framework Core</strong> with SQL Server for data persistence  
            <strong>Dependency Injection</strong> for clean service structure  
            <strong>RESTful API</strong> for projects and tasks CRUD operations  
            <strong>Swagger UI</strong> for interactive API documentation  
            <br/><br/>
            The backend handles users, projects, and tasks with validation, error handling, and 
            CORS support – making it production-ready for real-world project management needs.
            <br/><br/>
            🚧 <em>This project is still under active development – new features, improvements, 
            and frontend integration are being added.</em>
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/MiniProjectManager/1.png`,
            ]}
          />
        </div>
      );
    },
  },
  

  { // 05. Movie Club
    id: "MovieClub",
    category: "Full Stack",
    title: "Movie Club",
    src: "/assets/projects-screenshots/MovieClub/6.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://github.com/NitzanNaveh/MovieClub", 
    github: "https://github.com/NitzanNaveh/MovieClub",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.jwt,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Movie Club – Your Ultimate Movie Community Forum.  
            A social movie forum where users can share, like, and discuss their favorite films.  
            The app includes secure authentication, AI-powered recommendations (via Google Gemini),  
            and integrates external APIs like IMDb for ratings, posters, and metadata.  
            Features include user profiles, a main forum feed, and smart movie suggestions that  
            help you discover your next obsession. 
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
                      <SlideShow
              images={[
                `${BASE_PATH}/MovieClub/1.png`,
                `${BASE_PATH}/MovieClub/2.png`,
                `${BASE_PATH}/MovieClub/3.png`,
                `${BASE_PATH}/MovieClub/4.png`,
                `${BASE_PATH}/MovieClub/5.png`,
                `${BASE_PATH}/MovieClub/6.png`,
              ]}
            />
        </div>
      );
    },
  },
  
];
export default projects;
