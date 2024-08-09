'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Snippets', path: '/snippets' },
  { label: 'About', path: '/about' },
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === '/' ? pathname === path : pathname?.includes(path);

  return (
    <div className="hidden md:flex items-center gap-3">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.path}
          className={`px-2 py-1 rounded-md ${
            isActive(route.path)
              ? 'text-primary'
              : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
