import { site } from '@lib/constants';

import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function MySocialLinks() {
  return (
    <ul className="flex items-center gap-3 text-gray-500">
      <li>
        <a
          className="hover:text-white"
          href={`mailto:${site.email}`}
          aria-label="Send an email"
        >
          <MdEmail />
        </a>
      </li>
      <li>
        <a
          className="hover:text-white"
          href={site.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Github page"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="hover:text-white"
          href={site.abide}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit abide in the vine website"
        >
          <FaGlobe />
        </a>
      </li>
      <li>
        <a
          className="hover:text-white"
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Linkedin profile"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}

export default MySocialLinks;
