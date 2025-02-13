import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/typescript.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/javascript.svg";
import { ReactComponent as TailwindIcon } from "../assets/tailwind.svg";

export const HEADERS = [
  {
    displayName: "Home",
  },
  {
    displayName: "About",
  },
  {
    displayName: "Skills",
  },
  {
    displayName: "Projects",
  },
  {
    displayName: "Timeline",
  },
  {
    displayName: "Connect",
  },
];

export const HOMEPAGE_SKILLS = [
  "React",
  "Redux",
  "Angular",
  "NextJs",
  "NodeJs",
  "Express",
  "Redis",
  "MySQL",
  ,
  "SQS",
  "Docker",
];

export const ABOUT_INFO = `My name is Vivek Kumar Verma, I am a Passionate Software Developer and enjoy solving complex problems. 
I am a quick learner and eager to explore new technologies and methodologies for real-world applications.
As a tech enthusiast, I constantly seek innovative ways to apply my knowledge effectively`;

export const SKILLS = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Redux", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Redux-Saga", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Angular", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "TypeScript", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "JavaScript", icon: <JavaScriptIcon />, bgColor: "#f0db4f26" },
      { name: "Tailwind CSS", icon: <TailwindIcon />, bgColor: "#44a8b326" },
      { name: "Bootstrap", icon: <TailwindIcon />, bgColor: "#44a8b326" },
      { name: "SCSS", icon: <TailwindIcon />, bgColor: "#44a8b326" },
      { name: "HTML", icon: <TailwindIcon />, bgColor: "#44a8b326" },
      { name: "CSS", icon: <TailwindIcon />, bgColor: "#44a8b326" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "NodeJs", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Express", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Redis", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "SQS", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Kafka", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "MongoDB", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "MySQL", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "Django", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      { name: "Data Structures", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Algorihms", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "OOPs", icon: <ReactIcon />, bgColor: "#7ee1fc26" },
      { name: "Operating Systems", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "Git", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "Shell Scripting", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
    ],
  },
];

export const TIMELINE_DATA = [
  {
    TIME: "June 2023",
    TITLE: "Started working as SDE",
    POINTS: [
      "Started working as Software Developer at Edfora",
      "Also Earned 2 more full-time offers from National Health Authority(NHA) and Global Logic during the campus placement session of December 2022",
    ],
  },
  {
    TIME: "June-August 2022",
    TITLE: "Summer Internship at Northern Trust",
    POINTS: [
      "Completed On-campus summer Internship in Software Development, also earned fulltime offer",
    ],
  },
  {
    TIME: "December 2019",
    TITLE: "Branch change",
    POINTS: [
      "Got my branch changed from Metallurgical Engg. to Mechanical Engg. by scoring 9.46 SGPA",
    ],
  },
  {
    TIME: "April-July 2019",
    TITLE: "Started My Journey at IIT-BHU",
    POINTS: [
      "Secured 92.8% in CBSE Intermediate Board examination",
      "Cleared National Defense Academy(NDA) written examination conducted by UPSC",
      "Obtained AIR-41st in B.Sc. Maths UET examination conducted by Banaras Hindu University(BHU)",
      "Obtained 98.1 percentile in JEE-MAINS 2019",
      "Started studying in Metallurgical Enginnering at IIT BHU(VARANASI)",
    ],
  },
  {
    TIME: "May 2017",
    TITLE: "Secured 10 CGPA in high school",
    POINTS: [
      "Secured 10 CGPA in CBSE HighSchool Board examination",
      "Started studying at Maharshi Patanjali Vidya Mandir,Prayagraj",
    ],
  },
];
