import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "./SocialIcon";

function Contact() {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl  mb-4 comforter-brush-regular">Contact</h1>
      <form className="max-w-lg mx-auto space-y-6">
        <div className="flex flex-col">
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md text-l"
          />
        </div>
        <div className="flex flex-col">
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md text-l"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 border border-gray-300 rounded-md text-l"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-600 text-white text-l rounded-md hover:bg-yellow-500 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <div className="flex justify-center space-x-6 text-2xl">
          <SocialIcon
            href="mailto:yatharthgiri187@gmail.com"
            icon={faEnvelope}
            color="text-yellow-600 hover:text-yellow-400"
            label="Email"
          />
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
