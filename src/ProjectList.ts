import { Project } from "./models/Project";
import polygonBooleanImg from "./assets/project-thumbnails/polygon-boolean.png";
import polygonBooleanGif from "./assets/project-thumbnails/polygon-boolean.gif";
import oncraDataToolImg from "./assets/project-thumbnails/oncra_agc_data_tool.png";
import oncraDataToolGif from "./assets/project-thumbnails/oncra_agc_data_tool.gif";
import marsRoverImg from "./assets/project-thumbnails/marsRover.png";
import marsRoverGif from "./assets/project-thumbnails/marsRover.gif";
import rawTalkImg from "./assets/project-thumbnails/rawTalk.svg";
import rawTalkGif from "./assets/project-thumbnails/rawTalk.gif";
import boxRoomImg from "./assets/project-thumbnails/boxRoom.png";
import boxRoomGif from "./assets/project-thumbnails/boxRoom.gif";
import zombieImg from "./assets/project-thumbnails/zombieInteractive.svg";
import zombieGif from "./assets/project-thumbnails/zombieInteractive.gif";

export const ProjectList: Project[] = [
  {
    name: "Polygon Boolean",
    thumbnail_img: polygonBooleanImg,
    thumbnail_gif: polygonBooleanGif,
    demo_link: "https://francochan.co/polygon-boolean",
    code_link: "https://github.com/iamfranco/polygon-boolean",
    description: "Interactive visualisation of polygon intersections computation",
    tags: ["React", "TypeScript"]
  },
  {
    name: "ONCRA Data Tool",
    thumbnail_img: oncraDataToolImg,
    thumbnail_gif: oncraDataToolGif,
    demo_link: "https://oncra.github.io/",
    code_link: "https://github.com/oncra/oncra.github.io",
    description: "Data fetching and visualisation web app for <strong>ONCRA</strong> (a non-profit organisation for carbon removal accounting)",
    tags: ["React", "TypeScript"]
  },
  {
    name: "Mars Rover Challenge",
    thumbnail_img: marsRoverImg,
    thumbnail_gif: marsRoverGif,
    demo_link: "",
    code_link: "https://github.com/iamfranco/MarsRoverChallenge",
    description: "C# solution to the Mars Rover Kata",
    tags: ["C#"]
  },
  {
    name: "Raw Talk Main Website",
    thumbnail_img: rawTalkImg,
    thumbnail_gif: rawTalkGif,
    demo_link: "https://rawistalk.org/",
    code_link: "https://github.com/RawTalk/RawTalk.github.io",
    description: "Main website for Raw Talk (a non-profit organisation for open discussion on mental health, social and spiritial issues)",
    tags: ["JavaScript"]
  },
  {
    name: "My Room",
    thumbnail_img: boxRoomImg,
    thumbnail_gif: boxRoomGif,
    demo_link: "https://francochan.co/BoxRoom/",
    code_link: "https://github.com/iamfranco/BoxRoom",
    description: "A dimensionally accurate model of my room, using <strong>Blender</strong> and <strong>React-three-fiber</strong>",
    tags: ["JavaScript"]
  },
  {
    name: "Zombie Apocalypse Simulation",
    thumbnail_img: zombieImg,
    thumbnail_gif: zombieGif,
    demo_link: "https://francochan.co/zombieInteractive/",
    code_link: "https://github.com/iamfranco/zombieInteractive",
    description: "An \"agent-based\" solution to the university group project: <strong>model a zombie apocalypse</strong>",
    tags: ["JavaScript"]
  }
]