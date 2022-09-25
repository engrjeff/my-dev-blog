import { type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';

interface CallToActionLinkProps {
  href: LinkProps['href'];
  children: ReactNode;
}

const CallToActionLink = ({ href, children }: CallToActionLinkProps) => {
  return (
    <Link href={href}>
      <a className='bg-primary hover:bg-primary/95 text-white font-medium py-4 px-8 rounded-full shadow-md'>
        {children}
      </a>
    </Link>
  );
};

export default CallToActionLink;
