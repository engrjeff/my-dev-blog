import Link from 'next/link';
import { useRouter } from 'next/router';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Snippets', path: '/snippets' },
  { label: 'About', path: '/about' },
];

const NavLinks = () => {
  const router = useRouter();

  const isActive = (pathname: string) =>
    pathname === '/' ? router.pathname === pathname : router.pathname.includes(pathname);

  return (
    <div className='hidden md:flex items-center gap-3'>
      {routes.map((route) => (
        <Link key={route.label} href={route.path}>
          <a
            className={`px-2 py-1 rounded-md ${
              isActive(route.path) ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
            }`}
          >
            {route.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
