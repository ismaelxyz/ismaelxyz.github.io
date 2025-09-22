import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItemProps,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Ismael Resume",
  description: "My professional resume is available to everyone",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ismael Belisario.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Venezuelan{" "}
        <strong className="text-stone-100">Software Engineer</strong> that can
        work with{" "}
        <strong className="text-stone-100">different technologies</strong> and
        levels of an application regardless of the platform. For example, I can
        create the design and interaction of the website (front-end), the logic
        and infrastructure behind it (back-end), and automate processes with
        robots (RPA).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time I love to read books, visit new quiet places, play video
        games or just listen to classical music.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Greetings! My name is Ismael Belisario. I am a{" "}
        <strong className="text-stone-100">Software Developer</strong> from the
        Bolivarian Republic of Venezuela, a country rich in culture and
        diversity. Since my childhood, I have been surrounded by inspiration and
        motivation, thanks to my parents, both education professionals, who have
        instilled in me the importance of perseverance and personal growth.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My journey into the world of programming began when I was 14 years old,
        in 2010. Back then, my learning was based on reading technical books, as
        I didn&apos;t have access to the internet very often. Those days of
        self-taught study taught me not only about algorithms and programming
        languages, but also about resilience and determination.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Over time, my arsenal of skills has grown exponentially. I have embraced
        technological evolution, adapting and expanding my knowledge in areas
        such as{" "}
        <strong className="text-stone-100">
          test-driven development (TDD), data structures, frameworks, the
          intricate worlds of interpreters and compilers
        </strong>
        , among other topics.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Today, I pride myself on having a solid technical background and a
        burning passion for my profession. I have had the privilege of
        developing <strong className="text-stone-100">websites</strong> and{" "}
        <strong className="text-stone-100">mobile applications</strong>, as well
        as implementing process automation (
        <strong className="text-stone-100">RPA</strong>), with a particular
        focus on optimising administrative tasks.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My commitment to best practices and design patterns is unwavering, and
        my thirst for knowledge is unquenchable. I am convinced that learning is
        a never-ending journey, and each new project is an opportunity to
        explore unknown horizons.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I look forward to the possibility of collaborating on your project.
        Together, we can take your ideas to new heights and achieve success -
        let&apos;s make your vision a reality😊!
      </p>
    </>
  ),
  aboutItems: [
    { label: "Location", text: "Higuerote, Miranda", Icon: MapIcon },
    {
      label: "Age",
      text: `${new Date().getFullYear() - 2002}`,
      Icon: CalendarIcon,
    },
    { label: "Nationality", text: "Venezuelan", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Video Games, Travel, Reading, Music",
      Icon: SparklesIcon,
    },
    { label: "Study", text: "UPTBAL", Icon: AcademicCapIcon },
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "Spanish",
        level: 10,
      },
      {
        name: "Italian",
        level: 4,
      },
      {
        name: "English",
        level: 4,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "Mongo",
        level: 6,
      },
      {
        name: "SQL",
        level: 10,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Python",
        level: 8,
      },
      {
        name: "Rails",
        level: 7,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Node.js",
        level: 6,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 9,
      },
      {
        name: "C#",
        level: 3,
      },
      {
        name: "Java",
        level: 5,
      },
    ],
  },
  {
    name: "Management capabilities",
    skills: [
      {
        name: "Experience leading teams",
        level: 4,
      },
      {
        name: "Delegating resources",
        level: 4,
      },
      {
        name: "Project management",
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage4,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage5,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemProps[] = [
  {
    date: "January 2020",
    location: "UPTBAL",
    title: "Computer Engineering",
    content: (
      <p>
        Regular student, learning UML, mathematics, software architecture among
        other subjects.
      </p>
    ),
  },
];

export const experience: TimelineItemProps[] = [
  {
    date: "January 2023 - December 2023",
    location: "Sempiterno Group",
    title: "Junior RPA Developer",
    content: (
      <p>
        I&apos;ve mainly worked on RPA using tools like Playwright and
        Python-o365 among others, as well as occasionally working on the backend
        with Django and FastAPI.
      </p>
    ),
  },
  {
    date: "February 2021 - January 2023",
    location: "Freelance Developer",
    title: "Mobile and web developer",
    content: (
      <p>
        As a freelance developer, I specialize in developing dynamic websites
        using JavaScript (Next.js and React) for the frontend and Python
        (Django, Flask and FastApi) for the backend. I also have experience in
        Android app development using Flutter. I excel at taking requirements,
        designing and implementing custom solutions for each project. I am
        committed to technical excellence and customer satisfaction at all
        stages of development.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "If you have reached this point, it is a good idea to get in touch and start cooperating together.",
  items: [
    {
      type: ContactType.Email,
      text: "ismaelbeli.com@gmail.com",
      href: "mailto:ismaelbeli.com@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Higuerote, Venezuela",
      href: "https://maps.app.goo.gl/88MqvDeSrczpEBcVA",
    },
    {
      type: ContactType.Instagram,
      text: "@ismaelb98",
      href: "https://www.instagram.com/ismaelb98/",
    },
    {
      type: ContactType.Github,
      text: "ismaelxyz",
      href: "https://github.com/ismaelxyz",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/ismaelxyz" },
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/ismael-belisario-295024258/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/ismaelb98/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/IsmaelBelisari3",
  },
];
