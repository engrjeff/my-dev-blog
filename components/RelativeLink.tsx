import Link, { type LinkProps } from 'next/link';

interface RelativeLinkProps {
  href: LinkProps['href'];
  label: string;
}

const RelativeLink = ({ href, label }: RelativeLinkProps) => {
  return (
    <Link
      href={href}
      className="not-prose text-sky-500 hover:text-sky-500 hover:underline"
    >
      {label}
    </Link>
  );
};

export default RelativeLink;
