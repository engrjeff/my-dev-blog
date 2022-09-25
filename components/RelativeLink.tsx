import Link, { type LinkProps } from 'next/link';

interface RelativeLinkProps {
  href: LinkProps['href'];
  label: string;
}

const RelativeLink = ({ href, label }: RelativeLinkProps) => {
  return (
    <Link href={href}>
      <a className='not-prose text-sky-500 hover:text-sky-500 hover:underline'>{label}</a>
    </Link>
  );
};

export default RelativeLink;
