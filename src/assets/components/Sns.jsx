import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

const Sns = () => {
  return (
    <>
      {/* sns 입니다 */}
      <div className="sns-Div">
        <ul className="snsIcons">
          <li>
            <FontAwesomeIcon icon={faFacebook} size="2xl" className="snsIcon" />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="snsIcon"
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} size="2xl" className="snsIcon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} size="2xl" className="snsIcon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faThreads} size="2xl" className="snsIcon" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sns;
``;
