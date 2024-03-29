import { Project } from "./models/Project";
import personalFinanceImg from "./assets/project-thumbnails/personal-finance.png";
import personalFinanceGif from "./assets/project-thumbnails/personal-finance.gif";
import polygonBooleanImg from "./assets/project-thumbnails/polygon-boolean.png";
import polygonBooleanGif from "./assets/project-thumbnails/polygon-boolean.gif";
import oncraDataToolImg from "./assets/project-thumbnails/oncra_agc_data_tool.png";
import oncraDataToolGif from "./assets/project-thumbnails/oncra_agc_data_tool.gif";
import marsRoverImg from "./assets/project-thumbnails/marsRover.png";
import marsRoverGif from "./assets/project-thumbnails/marsRover.gif";
import rawTalkImg from "./assets/project-thumbnails/rawTalk.svg";
import rawTalkGif from "./assets/project-thumbnails/rawTalk.gif";
import zombieImg from "./assets/project-thumbnails/zombieInteractive.svg";
import zombieGif from "./assets/project-thumbnails/zombieInteractive.gif";
import { ProjectTag } from "./models/ProjectTag";

export const ProjectList: Project[] = [
  {
    name: "Personal Finance App",
    thumbnail_img: personalFinanceImg,
    thumbnail_gif: personalFinanceGif,
    demo_link: "https://francochan.co/personal-finance",
    code_link: "https://github.com/iamfranco/personal-finance",
    description: "A Progressive Web App to calculate compound interest, it is installable and works offline",
    tags: [ProjectTag.React, ProjectTag.TypeScript]
  },
  {
    name: "Polygon Boolean",
    thumbnail_img: polygonBooleanImg,
    thumbnail_gif: polygonBooleanGif,
    demo_link: "https://francochan.co/polygon-boolean",
    code_link: "https://github.com/iamfranco/polygon-boolean",
    description: "Interactive visualisation of polygon intersections computation",
    tags: [ProjectTag.React, ProjectTag.TypeScript]
  },
  {
    name: "ONCRA Data Tool",
    thumbnail_img: oncraDataToolImg,
    thumbnail_gif: oncraDataToolGif,
    demo_link: "https://oncra.github.io/",
    code_link: "https://github.com/oncra/oncra.github.io",
    description: "Data fetching and visualisation web app for <strong>ONCRA</strong> (a non-profit organisation for carbon removal accounting)",
    tags: [ProjectTag.React, ProjectTag.TypeScript]
  },
  {
    name: "Mars Rover Challenge",
    thumbnail_img: marsRoverImg,
    thumbnail_gif: marsRoverGif,
    demo_link: "",
    code_link: "https://github.com/iamfranco/MarsRoverChallenge",
    description: "C# solution to the Mars Rover Kata",
    tags: [ProjectTag.CSharp]
  },
  {
    name: "Raw Talk Main Website",
    thumbnail_img: rawTalkImg,
    thumbnail_gif: rawTalkGif,
    demo_link: "https://rawistalk.org/",
    code_link: "https://github.com/RawTalk/RawTalk.github.io",
    description: "Main website for Raw Talk (a non-profit organisation for open discussion on mental health, social and spiritial issues)",
    tags: [ProjectTag.JavaScript]
  },
  // {
  //   name: "My Room",
  //   thumbnail_img: boxRoomImg,
  //   thumbnail_gif: boxRoomGif,
  //   demo_link: "https://francochan.co/BoxRoom/",
  //   code_link: "https://github.com/iamfranco/BoxRoom",
  //   description: "A dimensionally accurate model of my room, using <strong>Blender</strong> and <strong>React-three-fiber</strong>",
  //   tags: [ProjectTag.javaScript]
  // },
  {
    name: "Zombie Apocalypse Simulation",
    thumbnail_img: zombieImg,
    thumbnail_gif: zombieGif,
    demo_link: "https://francochan.co/zombieInteractive/",
    code_link: "https://github.com/iamfranco/zombieInteractive",
    description: "An \"agent-based\" solution to the university group project: <strong>model a zombie apocalypse</strong>",
    tags: [ProjectTag.JavaScript]
  }
]