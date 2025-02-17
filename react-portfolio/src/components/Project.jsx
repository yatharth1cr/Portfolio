const projects = [
  {
    title: "Tourest",
    previewImg: "/tourestReact.png",
    description:
      "Developed a responsive travel website with dynamic navigation, smooth scrolling, and a mobile-friendly menu. Integrated newsletter subscription and social media links for user engagement.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Vercel"],
    liveDemo: "https://tourest-react-k1n7.vercel.app/",
    github: "https://github.com/yatharth1cr/tourest-react",
  },
  {
    title: "FormValidation",
    previewImg: "/formValidation.png",
    description:
      "Built a form validation app using React, Formik, and Yup. Features real-time validation feedback, password visibility toggle, and auto-refresh after submission.",
    tech: ["React", "Formik", "Yup", "React Icons", "Vite", "ESLint"],
    liveDemo: "https://form-validation01-seven.vercel.app/",
    github: "https://github.com/yatharth1cr/form-validation01",
  },
  {
    title: "AltEvent",
    previewImg: "/altEvent.png",
    description:
      "Designed an event management website with a visually appealing UI, interactive event listings, and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    liveDemo: "https://responsive-web-design-91dl.vercel.app/",
    github: "https://github.com/yatharth1cr/Responsive-Web-Design",
  },
  {
    title: "Training Studio",
    previewImg: "/gymStudio.png",
    description:
      "A responsive website for a fictional gym featuring a video background header, class schedules, expert trainers, and a contact form with a Google Maps embed.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://organising-data-table.vercel.app",
    github: "https://github.com/yatharth1cr/TraningStudioGym-Webpage",
  },
  {
    title: "Hydro Company Website",
    previewImg: "/hydraCompany.png",
    description:
      "A responsive website for a fictional company named Hydro, showcasing services, blog, portfolio, and social media links.",
    tech: ["HTML", "CSS", "JavaScript", "Font Awesome"],
    liveDemo: "https://adding-media.vercel.app/",
    github: "https://github.com/yatharth1cr/Hydro_Company_Webpage",
  },
];

function Projects() {
  return (
    <section id="projects" className="text-white">
      <div className="container mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-5xl text-yellow-500 font-bold text-center mb-10 comforter-brush-regular">
          Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-4 border-white shadow-lg transition-all duration-300 ease-in-out  hover:-translate- hover:bg-custom1"
            >
              <img
                src={project.previewImg}
                alt={project.title}
                className="w-full h-64 object-cover rounded-md shadow-md transition-all duration-300 ease-in-out"
              />
              <h3 className="text-2xl font-semibold text-yellow-400 mt-4">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-4">
                <span className="font-semibold text-yellow-500">Tech:</span>
                <ul className="flex flex-wrap mt-2">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs bg-gray-700 text-yellow-300 px-2 py-1 rounded-md mr-2 mt-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
