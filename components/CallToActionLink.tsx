import Link, { type LinkProps } from 'next/link';
import { type ReactNode } from 'react';

interface CallToActionLinkProps {
  href: LinkProps['href'];
  children: ReactNode;
}

const CallToActionLink = ({ href, children }: CallToActionLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-primary hover:bg-primary/95 text-white font-medium py-4 px-8 rounded-full shadow-md inline-block"
    >
      {children}
    </Link>
  );
};

export default CallToActionLink;
