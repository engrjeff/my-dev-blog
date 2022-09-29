import { type ReactNode } from 'react';

const Alert = ({ children }: { children: ReactNode }) => {
  return (
    <div className='not-prose bg-sky-100 p-4 my-8 text-[15px] border-l-4 border-sky-500'>
      <p className='font-bold uppercase text-sky-500'>💡 Info</p>
      <div className='text-gray-600 my-2 [&>p]:inline-block'>{children}</div>
    </div>
  );
};

export default Alert;
