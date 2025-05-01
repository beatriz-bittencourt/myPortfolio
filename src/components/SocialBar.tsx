import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const SocialBar = () => {
  return (
    <>
      <div className="social-bar">
        <a href="https://github.com/beatriz-bittencourt" target="_blank">
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/beatriz-bittencourt-51a71b217/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/biaaa_bittencourt/" target="_blank">
          <FiInstagram />
        </a>
        <div className="line"></div>
      </div>

      <div className="email-bar">
        <a href="mailto:beatrizbittencourtdealmeida@gmail.com">
          beatrizbittencourtdealmeida@gmail.com
        </a>
        <div className="line"></div>
      </div>
    </>
  );
};

export default SocialBar;
