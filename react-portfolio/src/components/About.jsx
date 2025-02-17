function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-5xl py-8 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500 comforter-brush-regular">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm{" "}
            <span className="font-semibold text-white">Yatharth</span>, a
            passionate web developer.
            <br />
            Skilled in{" "}
            <span className="font-semibold text-white">React.js</span>,
            <span className="font-semibold text-white"> JavaScript</span>, and
            modern web technologies.
            <br />
            Enthusiastic about solving complex development challenges and
            optimizing performance. Dedicated to delivering user-friendly,
            efficient solutions.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="/about-img.webp"
            alt="Yatharth coding at his desk"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
