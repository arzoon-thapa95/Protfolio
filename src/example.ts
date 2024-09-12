import { GlobeIcon, GraduationCapIcon, MoveRightIcon } from "lucide-react";
import { IserviceCard } from "./components/card/serviceCard";

export const navData = [
  {
    id: 1,
    name: "Home",
    link: "/app/home",
  },
  {
    id: 2,
    name: "About",
    link: "/app/about",
  },
  {
    id: 6,
    name: "Project",
    link: "/app/myWork",
  },
  {
    id: 7,
    name: "Contact",
    link: "/app/contact",
  },
];

export const imageData = [
  { id: 1, path: "../images/vscode.svg", alt: "Vs-code" },
  { id: 2, path: "../images/logo-javascript.svg", alt: "javascript logo" },
  { id: 3, path: "../images/typescript.svg", alt: "typescript logo" },
  { id: 4, path: "../images/html-1.svg", alt: "HTML logo" },
  { id: 5, path: "../images/css-3.svg", alt: "CSS logo" },
  { id: 6, path: "../images/react-2.svg", alt: "react logo" },
  { id: 7, path: "../images/tailwind-css-2.svg", alt: "HTML logo" },
  { id: 8, path: "../images/git.svg", alt: "git logo" },
  { id: 9, path: "../images/github-icon.svg", alt: "github logo" },
];

export const servicesData: IserviceCard[] = [
  {
    id: 1,
    titleIcon: GlobeIcon,
    title: "Web design",
    discription: [
      "Responsive Web Design",
      "HTML/CSS Development",
      "JavaScript Development",
      "Version Control (Git)",
    ],
    buttonName: "Read more",
    iconSvg: MoveRightIcon,
  },
  // {
  //   id: 2,
  //   titleIcon: GraduationCapIcon,
  //   title: "Web design",
  //   discription: [
  //     "Responsive Web Design",
  //     "HTML/CSS Development",
  //     "JavaScript Development",
  //     "Version Control (Git)",
  //   ],
  //   buttonName: "Read more",
  //   iconSvg: MoveRightIcon,
  // },
];
