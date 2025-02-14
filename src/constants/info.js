import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/typescript.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/javascript.svg";
import { ReactComponent as TailwindIcon } from "../assets/tailwind.svg";
import { ReactComponent as ReduxIcon } from "../assets/redux.svg";
import { ReactComponent as ReduxSagaIcon } from "../assets/reduxSaga.svg";
import { ReactComponent as AngularIcon } from "../assets/angular.svg";
import { ReactComponent as BootstrapIcon } from "../assets/bootstrap.svg";
import { ReactComponent as SCSSIcon } from "../assets/scss.svg";
import { ReactComponent as HTMLIcon } from "../assets/html.svg";
import { ReactComponent as CSSIcon } from "../assets/css.svg";
import { ReactComponent as NodeIcon } from "../assets/node.svg";
import { ReactComponent as ExpressIcon } from "../assets/express.svg";
import { ReactComponent as RedisIcon } from "../assets/redis.svg";
import { ReactComponent as SQSIcon } from "../assets/sqs.svg";
import { ReactComponent as KafkaIcon } from "../assets/kafka.svg";
import { ReactComponent as MongoIcon } from "../assets/mongo.svg";
import { ReactComponent as MySQLIcon } from "../assets/mysql.svg";
import { ReactComponent as DjangoIcon } from "../assets/django.svg";
import { ReactComponent as DataStructuresIcon } from "../assets/dataStructures.svg";
import { ReactComponent as AlgorithmsIcon } from "../assets/algorith.svg";
import { ReactComponent as OSIcon } from "../assets/os.svg";
import { ReactComponent as GitIcon } from "../assets/git.svg";
import { ReactComponent as ShellIcon } from "../assets/shell.svg";
import { ReactComponent as OOpsIcon } from "../assets/oops.svg";

export const HEADERS = [
  {
    displayName: "Home",
    redirection: '#'
  },
  {
    displayName: "About",
    redirection: '#aboutSection'
  },
  {
    displayName: "Skills",
    redirection: '#skillsSection'
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
      { name: "Redux", icon: <ReduxIcon />, bgColor: "#7ee1fc26" },
      { name: "Redux-Saga", icon: <ReduxSagaIcon />, bgColor: "#7ee1fc26" },
      { name: "Angular", icon: <AngularIcon />, bgColor: "#007acc26" },
      { name: "TypeScript", icon: <TypeScriptIcon />, bgColor: "#007acc26" },
      { name: "JavaScript", icon: <JavaScriptIcon />, bgColor: "#f0db4f26" },
      { name: "Tailwind CSS", icon: <TailwindIcon />, bgColor: "#44a8b326" },
      { name: "Bootstrap", icon: <BootstrapIcon />, bgColor: "#44a8b326" },
      { name: "SCSS", icon: <SCSSIcon />, bgColor: "#44a8b326" },
      { name: "HTML", icon: <HTMLIcon />, bgColor: "#44a8b326" },
      { name: "CSS", icon: <CSSIcon />, bgColor: "#44a8b326" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "NodeJs", icon: <NodeIcon />, bgColor: "#7ee1fc26" },
      { name: "Express", icon: <ExpressIcon />, bgColor: "#7ee1fc26" },
      { name: "Redis", icon: <RedisIcon />, bgColor: "#7ee1fc26" },
      { name: "SQS", icon: <SQSIcon />, bgColor: "#7ee1fc26" },
      { name: "Kafka", icon: <KafkaIcon />, bgColor: "#7ee1fc26" },
      { name: "MongoDB", icon: <MongoIcon />, bgColor: "#007acc26" },
      { name: "MySQL", icon: <MySQLIcon />, bgColor: "#007acc26" },
      { name: "Django", icon: <DjangoIcon />, bgColor: "#007acc26" },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      { name: "Data Structures", icon: <DataStructuresIcon />, bgColor: "#7ee1fc26" },
      { name: "Algorihms", icon: <AlgorithmsIcon />, bgColor: "#7ee1fc26" },
      { name: "OOPs", icon: <OOpsIcon />, bgColor: "#7ee1fc26" },
      { name: "Operating Systems", icon: <OSIcon />, bgColor: "#007acc26" },
      { name: "Git", icon: <GitIcon />, bgColor: "#007acc26" },
      { name: "Shell Scripting", icon: <ShellIcon />, bgColor: "#007acc26" },
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

export const PROJECTS = [
  {
    name: 'My Vocab',
    description: 'A full stack application with feature of account creation, user authentication, daily revision remider mail and infinite scrolling. User can add edit and delete words also revise the least revised word',
    techstack: ['NodeJs', 'Express', 'MongoDB', 'React', 'node cron'],
    githubUrl: 'https://github.com/cyber-vivek/MyVocab',
    liveUrl: 'https://my-vocab-client.vercel.app/',
  },
  {
    name: 'Chat Space',
    description: 'A full stack application with feature of account creation, user authentication, daily revision remider mail and infinite scrolling. User can add edit and delete words also revise the least revised word',
    techstack: ['NodeJs', 'Express', 'MongoDB', 'React', 'node cron'],
    githubUrl: 'https://github.com/cyber-vivek/MyVocab',
    liveUrl: 'https://my-vocab-client.vercel.app/',
  },
  {
    name: 'Chat Space',
    description: 'A full stack application with feature of account creation, user authentication, daily revision remider mail and infinite scrolling. User can add edit and delete words also revise the least revised word',
    techstack: ['NodeJs', 'Express', 'MongoDB', 'React', 'node cron'],
    githubUrl: 'https://github.com/cyber-vivek/MyVocab',
    liveUrl: 'https://my-vocab-client.vercel.app/',
  },
]

export const RESUME_URL = 'https://drive.google.com/file/d/1_OtTZHPkM7F8p6jz0iLzGZQt-fqtpFe2/view?usp=drive_link'