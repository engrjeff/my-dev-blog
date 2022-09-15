interface LinkInPageProps {
  text: string;
  href: string;
}

const LinkInPage = ({ text, href }: LinkInPageProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-sky-500 hover:text-sky-500 hover:underline'
    >
      {text}
    </a>
  );
};

export default LinkInPage;
