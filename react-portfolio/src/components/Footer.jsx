import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="contact" className="bg-custom1 text-white py-6">
      <div className="container mx-auto max-w-4xl flex items-center justify-between px-2">
        {/* Left - Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Center - Developer Name */}
        <p className="text-l font-semibold">
          Developed by{" "}
          <span className="text-xl text-yellow-500 darumadrop-one-regular">
            Yatharth
          </span>
        </p>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yatharth1cr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-gray-400 hover:text-white hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-blue-500 hover:text-blue-400 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://x.com/YatharthGiri108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/yatharth1.cr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-pink-500 hover:text-pink-400 hover:scale-110 transition"
            />
          </a>
          <a
            href="mailto:yatharthgiri187@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-yellow-600 hover:text-yellow-400 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
