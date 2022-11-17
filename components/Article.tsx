import { type ReactNode } from 'react';

const Article = ({ children }: { children: ReactNode }) => {
  return (
    <article className='prose lg:prose-lg mx-auto prose-code:bg-gray-700 prose-code:font-medium prose-code:before:hidden prose-code:after:hidden prose-code:px-1 prose-code:rounded prose-code:text-white prose-a:no-underline hover:prose-a:text-primary prose-blockquote:font-normal prose-img:rounded-lg prose-img:m-0 prose-headings:text-left prose-img:mx-auto dark:prose-invert'>
      {children}
    </article>
  );
};

export default Article;
