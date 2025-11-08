import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Sns = () => {
  return (
    <>
      {/* sns 입니다 */}
      <div className="sns-Div">
        <ul className="snsIcons">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                className="snsIcon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2xl"
                className="snsIcon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2xl"
                className="snsIcon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2xl"
                className="snsIcon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.threads.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faThreads}
                size="2xl"
                className="snsIcon"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sns;
