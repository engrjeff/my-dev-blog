import Link, { LinkProps } from 'next/link';

interface LinkToPartProps {
  href: LinkProps['href'];
  title: string;
  subtitle?: string;
  direction: 'prev' | 'next';
}

const LinkToPart = (props: LinkToPartProps) => {
  const { href, title, subtitle, direction } = props;
  return (
    <Link href={href}>
      <a className='group px-6 py-4 flex items-start justify-between gap-4 md:w-1/2 rounded-md border border-gray-200 bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 ring-2 ring-transparent ring-offset-4 ring-offset-darkest hover:ring-primary'>
        {direction === 'prev' && (
          <span className='transition-transform duration-300 group-hover:-translate-x-2'>
            <PrevIcon />
          </span>
        )}
        <div className='text-left'>
          <span className='font-bold md:text-lg mb-2 flex'>{title}</span>
          {subtitle && <span className='text-gray-500'>{subtitle}</span>}
        </div>
        {direction === 'next' && (
          <span className='transition-transform duration-300 group-hover:translate-x-2'>
            <NextIcon />
          </span>
        )}
      </a>
    </Link>
  );
};

const NextIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 mt-1'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
    </svg>
  );
};

const PrevIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 mt-1'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
    </svg>
  );
};

export default LinkToPart;
