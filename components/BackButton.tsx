import Link, { type LinkProps } from 'next/link';

interface BackButtonProps {
  backTo: LinkProps['href'];
  label: string;
}

const BackButton = ({ backTo, label }: BackButtonProps) => {
  return (
    <Link href={backTo}>
      <a
        aria-label={label}
        className='border border-gray-300 dark:border-gray-600 text-gray-300 dark:text-white inline-block p-3 rounded-full group mb-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 group-hover:-translate-x-1 transition-transform'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
          />
        </svg>
      </a>
    </Link>
  );
};

export default BackButton;
