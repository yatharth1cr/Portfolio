import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faNpm,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faTerminal,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const skillIcons = [
  { icon: faHtml5, color: "#E34F26", title: "HTML5" },
  { icon: faCss3Alt, color: "#1572B6", title: "CSS3" },
  { icon: faJs, color: "#F7DF1E", title: "JavaScript" },
  { icon: faReact, color: "#61DAFB", title: "React.js" },
  { icon: faNodeJs, color: "#339933", title: "Node.js" },
  { icon: faGitAlt, color: "#F05032", title: "Git" },
  { icon: faGithub, color: "#808080", title: "GitHub" },
  { icon: faNpm, color: "#CB3837", title: "NPM" },
  { icon: faDatabase, color: "#4DB33D", title: "Database" },
  { icon: faTerminal, color: "#CCCCCC", title: "Terminal" },
  { icon: faKey, color: "#8E44AD", title: "OAuth" },
];

const skillImages = [
  { src: "https://www.svgrepo.com/show/354201/postman.svg", title: "Postman" },
  { src: "https://www.svgrepo.com/show/452102/slack.svg", title: "Slack" },
  { src: "https://www.svgrepo.com/show/452129/vs-code.svg", title: "VS Code" },
  {
    src: "https://www.svgrepo.com/show/330398/express.svg",
    title: "Express.js",
  },
  { src: "https://www.svgrepo.com/show/373845/mongo.svg", title: "MongoDB" },
  { src: "https://www.svgrepo.com/show/354512/vercel.svg", title: "Vercel" },
];

function Skills() {
  return (
    <section id="skills" className="py-25 bg-gray-900 text-white text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-semibold mb-8 text-yellow-600 comforter-brush-regular">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {skillIcons.map(({ icon, color, title }, index) => (
            <div key={index} className="p-4 flex justify-center">
              <FontAwesomeIcon
                icon={icon}
                title={title}
                className="text-6xl transition-transform duration-300 hover:scale-120"
                style={{ color }}
              />
            </div>
          ))}
          {skillImages.map(({ src, title }, index) => (
            <div key={index} className="p-4 flex justify-center">
              <img
                src={src}
                alt={title}
                title={title}
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-120"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
