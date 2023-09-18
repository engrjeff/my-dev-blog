import { site } from "@lib/constants";

import { MdEmail } from "react-icons/md";
import { FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

function MySocialLinks() {
  return (
    <ul className='flex items-center gap-3 text-gray-500'>
      <li>
        <a href={`mailto:${site.email}`} aria-label='Send an email'>
          <MdEmail />
        </a>
      </li>
      <li>
        <a
          href={site.github}
          target='_blank'
          rel='noreferrer'
          aria-label='Visit Github page'
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href={site.abide}
          target='_blank'
          rel='noreferrer'
          aria-label='Visit abide in the vine website'
        >
          <FaGlobe />
        </a>
      </li>
      <li>
        <a
          href={site.linkedin}
          target='_blank'
          rel='noreferrer'
          aria-label='Visit Linkedin profile'
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}

export default MySocialLinks;
