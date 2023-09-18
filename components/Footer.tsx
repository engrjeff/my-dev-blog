import { site } from "@lib/constants";

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-sm text-[#222] dark:text-gray-500 font-medium cursor-pointer hover:text-primary dark:hover:text-primary'
    >
      {label}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-700'>
      <div className='container max-w-6xl flex flex-col md:flex-row md:items-center py-8 gap-4 '>
        <div className='space-x-4'>
          <FooterLink href={site.github} label='Github' />
          <FooterLink href={site.linkedin} label='Linkedin' />
          <FooterLink href={site.medium} label='Medium' />
          <FooterLink href={site.abide} label='Abide' />
        </div>
        <div className='ml-0 md:ml-auto'>
          <p className='text-sm text-[#222] dark:text-gray-500'>
            &copy; {new Date().getFullYear()} All rights reserved. Jeff Segovia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
