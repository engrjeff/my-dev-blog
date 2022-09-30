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
    <footer className='container max-w-6xl flex flex-col md:flex-row md:items-center py-8 gap-4 border-t border-gray-200 dark:border-gray-700'>
      <div className='space-x-4'>
        <FooterLink href='https://github.com/engrjeff' label='Github' />
        <FooterLink
          href='https://www.linkedin.com/in/jeffrey-segovia-ece-ect-321b46190'
          label='Linkedin'
        />
        <FooterLink href='https://ecejhefgrace.medium.com' label='Medium' />
        <FooterLink href='https://www.abideinthevineph.org' label='Abide' />
      </div>
      <div className='ml-0 md:ml-auto'>
        <p className='text-sm text-[#222] dark:text-gray-500'>
          &copy; {new Date().getFullYear()} All rights reserved. Jeff Segovia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
