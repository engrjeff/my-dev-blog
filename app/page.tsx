import Image from 'next/image';

import BlogCard from '@components/BlogCard';
import CallToActionLink from '@components/CallToActionLink';
import MySocialLinks from '@components/MySocialLinks';
import getSortedPosts from '@lib/getSortedPosts';

function Home() {
  const posts = getSortedPosts(3);

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="w-14 md:w-16 h-14 md:h-16 relative rounded-full overflow-hidden ring-4 ring-primary/0">
            <Image
              src="/me.jpg"
              alt="Jeff Segovia"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Jeff Segovia
            </h1>
            <p className="text-gray-900 text-sm md:text-lg font-light dark:text-gray-400">
              Frontend Software Engineer
            </p>
            <MySocialLinks />
          </div>
        </div>
        <p className="text-gray-800 py-3 md:text-lg dark:text-gray-100">
          Contributing to the community by sharing what I know. Helping other
          developers and engineers become more passionate in what they do.
        </p>
        <div className="my-10">
          <CallToActionLink href="/blogs">Read the Blogs</CallToActionLink>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
        <div className="py-10">
          <CallToActionLink href="/blogs">Browse All Posts</CallToActionLink>
        </div>
      </section>

      {/* Call to go to Snippets */}
      <section className="my-10">
        <h2 className="text-4xl font-bold mb-6">
          Want a quick look to code snippets?
        </h2>
        <p className="text-gray-800 py-3 md:text-lg dark:text-gray-100">
          I have curated a list of code snippets which I have found helpful in
          my dev journey. It is my hope that you will also find these useful and
          that these will help you be more productive in your day-to-day work as
          a developer. Happy coding!
        </p>
        <div className="py-10">
          <CallToActionLink href="/snippets">
            Take me to Snippets
          </CallToActionLink>
        </div>
      </section>
    </>
  );
}

export default Home;
