import Link from 'next/link';

import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="backdrop-blur-lg py-6 md:py-8 sticky top-0 bg-white dark:bg-darkest/70 border-b border-gray-200 dark:border-gray-700 z-20">
      <nav className="flex container max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          jeffsegovia<span className="text-primary">.dev</span>
        </Link>
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
