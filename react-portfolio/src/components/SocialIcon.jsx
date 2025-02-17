import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ href, icon, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`${color} text-3xl transition-transform transform hover:scale-110`}
  >
    <FontAwesomeIcon icon={icon} title={label} />
  </a>
);

export default SocialIcon;
