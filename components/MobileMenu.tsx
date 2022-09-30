import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Snippets', path: '/snippets' },
  { label: 'About', path: '/about' },
];

const MenuIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};

const MobileMenu = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    document.body.classList.remove('overflow-hidden');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    document.body.classList.toggle('overflow-hidden');
    setMenuOpen((open) => !open);
  };

  const isActive = (pathname: string) =>
    pathname === '/' ? router.pathname === pathname : router.pathname.includes(pathname);

  return (
    <>
      <button
        aria-label='toggle menu'
        onClick={toggleMenu}
        className='p-2 rounded-full hover:bg-gray-800 md:hidden'
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden absolute h-screen w-screen bg-white dark:bg-darkest top-[89px] left-0 transition-transform duration-300`}
      >
        <div className='flex flex-col' onClick={closeMenu}>
          {routes.map((route) => (
            <Link key={route.label} href={route.path}>
              <a
                className={`px-4 py-6 border-b border-gray-800 text-center text-lg hover:bg-gray-900 ${
                  isActive(route.path) ? 'text-primary' : 'text-inherit'
                }`}
              >
                {route.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
