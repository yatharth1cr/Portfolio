import SocialIcon from "./SocialIcon";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="container mx-auto max-w-5xl pt-25 pb-25 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left - Text & Social Icons */}
        <div className="text-center md:text-left space-y-4 ">
          <h1 className="text-4xl text-white permanent-marker-regular">
            Hi, I'm Yatharth Raj Giri
          </h1>
          <p className="text-4xl text-yellow-600 permanent-marker-regular">
            Web Developer
          </p>
          <h2 className="text-l text-gray-100 permanent-marker-regular">
            Let's Connect
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            <SocialIcon
              href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
              icon={faLinkedin}
              color="text-blue-500 hover:text-blue-400"
              label="LinkedIn"
            />
            <SocialIcon
              href="https://github.com/yatharth1cr"
              icon={faGithub}
              color="text-gray-400 hover:text-white"
              label="GitHub"
            />
            <SocialIcon
              href="https://x.com/YatharthGiri108"
              icon={faXTwitter}
              color="text-gray-300 hover:text-white"
              label="Twitter (X)"
            />
            <SocialIcon
              href="https://www.instagram.com/_yatharth1.cr/"
              icon={faInstagram}
              color="text-pink-500 hover:text-pink-400"
              label="Instagram"
            />
            <SocialIcon
              href="mailto:yatharthgiri187@gmail.com"
              icon={faEnvelope}
              color="text-yellow-600 hover:text-yellow-400"
              label="Email"
            />
          </div>
        </div>

        {/* Right - Profile Image */}
        <img
          src="avatar.img.webp"
          alt="Yatharth"
          className="rounded-full w-100 h-100  shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
