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
    <div className='flex items-center md:hidden'>
      <button
        aria-label='toggle menu'
        onClick={toggleMenu}
        className='p-2 rounded-full hover:bg-gray-800'
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } fixed h-screen w-screen bg-white dark:bg-darkest top-[77px] right-0`}
      >
        <div className='flex flex-col border-t border-gray-800' onClick={closeMenu}>
          {routes.map((route) => (
            <Link key={route.label} href={route.path}>
              <a
                className={`px-4 py-4 border-b border-gray-800 text-center ${
                  isActive(route.path) ? 'text-primary' : 'text-inherit'
                }`}
              >
                {route.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
