function Projects() {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-custom2 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-bold">Project 1</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, ligula nec tincidunt lacinia, mi nisl pretium ipsum, sit
              amet ultricies tortor nisl et purus.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="bg-custom2 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-bold">Project 2</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, ligula nec tincidunt lacinia, mi nisl pretium ipsum, sit
              amet ultricies tortor nisl et purus.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="bg-custom2 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-bold">Project 3</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, ligula nec tincidunt lacinia, mi nisl pretium ipsum, sit
              amet ultricies tortor nisl et purus.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
