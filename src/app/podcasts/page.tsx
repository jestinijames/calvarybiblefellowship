'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Footer, Header } from '@/components/Layout';

import { homepagePodcasts } from '@/constant/config';

export default function PodcastPage() {
  const [visibleItems, setVisibleItems] = useState(2);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Headings */}
        <section className='relative flex items-center overflow-hidden pt-16 md:pt-32'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults  '>
              <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative '>
                <p className='subhead'>Podcasts</p>
                <h1 className=''>Explore our podcasts page</h1>
                <div className='my-8 text-xl  max-w-lg'>
                  <p>
                    Welcome to our Podcast page, your gateway to captivating
                    conversations and thought-provoking discussions. Tune in for
                    insightful insights and inspiring stories, enriching your
                    mind and fueling your curiosity. Start exploring today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='wrapper relative load-more-wrapper'>
          {/* podcasts list */}
          <div className='fade-hover-area'>
            <div className='flex flex-wrap load-more-container'>
              {homepagePodcasts.slice(0, visibleItems).map((podcast, index) => (
                <div
                  key={index}
                  className='w-full sm:w-1/2 md:w-1/2 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                >
                  <Link
                    className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                    href={podcast.link}
                  >
                    <picture>
                      <source
                        type='image/webp'
                        src={podcast.image}
                        data-sizes='100vw'
                      />
                      <Image
                        className='w-full mb-6 ls-is-cached lazyloaded'
                        width='1600'
                        height='960'
                        alt={podcast.title}
                        src={podcast.image}
                        sizes='100vw'
                      />
                    </picture>
                    <h3>{podcast.title}</h3>
                    <div className='max-w-2xl mb-4 md:text-lg'>
                      <p>{podcast.description}</p>
                    </div>
                    <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                      <span className='font-sans font-bold'>Explore more</span>
                      <svg
                        className='w-4 h-4 ml-auto mr-2 group-hover:mr-0 transition-margin'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 23.6 18.2'
                      >
                        <path
                          fill='currentColor'
                          d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* More button */}
          <div className='flex flex-wrap'>
            <div className='w-full px-4 my-8 text-center copy-defaults'>
              <p>
                {visibleItems < homepagePodcasts.length && (
                  <span
                    className='btn cursor-pointer load-more-trigger'
                    onClick={handleLoadMore}
                  >
                    Load More
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Other section links */}
        <section className='relative z-10 bg-black text-white'>
          <div className='wrapper relative z-20 '>
            <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
              <div className='flex flex-wrap px-2'>
                <div className='w-full md:w-1/2 px-2 my-2'>
                  <a
                    className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-navy text-white hover:bg-white hover:text-black'
                    href='/who-we-are'
                  >
                    <p className='subhead'>EXPLORE</p>
                    <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>
                      Who we are
                    </h3>
                    <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 23.6 18.2'
                      >
                        <path
                          fill='currentColor'
                          d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className='w-full md:w-1/2 px-2 my-2'>
                  <a
                    className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-[#f56d6e] text-black hover:bg-white'
                    href='/what-we-believe'
                  >
                    <p className='subhead'>LEARN</p>
                    <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>
                      What we believe
                    </h3>
                    <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                      <svg
                        className='w-6 h-6'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 23.6 18.2'
                      >
                        <path
                          fill='currentColor'
                          d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
