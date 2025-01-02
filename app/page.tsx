import * as React from 'react';
import { StoryCard } from '../app/ui/layout/StoryCard';
import { ReviewCard } from '../app/ui/layout/ReviewCard';
import { SocialPost } from '../app/ui/layout/SocialPost';
import { featuredStories, reviews, socialPosts } from './lib/stories';
import Image from 'next/image';

const PetStoriesPage: React.FC = () => {
  return (
    <div className="flex flex-col pt-20 bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="flex flex-col pt-20 bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
  <div className="flex flex-col lg:flex-row overflow-hidden relative gap-10 justify-center items-center px-8 lg:px-44 py-16 w-full">
    <div className="flex flex-col flex-1 shrink my-auto text-base text-gray-800 min-w-[240px]">
      <h1 className="text-4xl font-bold leading-10 mb-6 text-center lg:text-left text-gray-800">
        Welcome to Sniffing<span className="text-[var(--color-primary)]">Out</span>Stories
      </h1>
      <p className="mb-6 text-center lg:text-left text-[var(--color-secondary)]">
        Create and share amazing stories about your pets with our AI technology!
      </p>
      <form className="flex flex-col gap-4">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <label htmlFor="petName" className="sr-only">Enter your pet's name</label>
          <input
            id="petName"
            type="text"
            placeholder="Enter your pet's name"
            className="w-full px-4 py-2 bg-white rounded-md border border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
        </div>
        <button className="w-full max-w-md mx-auto lg:mx-0 px-4 py-2 bg-[var(--color-accent)] text-white font-medium rounded-lg hover:bg-yellow-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none">
          Start Their Story
        </button>
      </form>
    </div>

    {/* Image Section */}
    <div className="flex flex-1 justify-center items-center lg:min-w-[50%]">
      <Image
        src="/cartoondezandlila.png"
        width={500}
        height={400}
        alt="Illustration of two happy dogs"
        className="rounded-lg shadow-lg"
        priority
      />
    </div>
  </div>
</div>

      {/* Featured Stories Section */}
      <section className="px-8 lg:px-44 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-primary)]">Featured Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[var(--color-neutral)] px-8 lg:px-44 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-primary)]">What People Are Saying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </section>

      {/* Social Posts Section */}
      <section className="px-8 lg:px-44 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-primary)]">Social Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post, index) => (
            <SocialPost key={index} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PetStoriesPage;