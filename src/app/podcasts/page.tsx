'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

import {
  homepagePodcasts,
  otherPages,
  podcastPageHero,
} from '@/constant/config';

export default function PodcastPage() {
  const [visibleItems, setVisibleItems] = useState(2);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Heading Section */}
        <HeroHeading data={podcastPageHero} />

        {/* Sub-Heading */}
        <SubHeading
          title={podcastPageHero.podcastSeriesTitle}
          description={podcastPageHero.podcastSeriesDescription}
          color='black'
        />

        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-3 md:pt-0 pb-16 md:pb-24'>
              <div className='flex flex-wrap headline-defaults copy-defaults'>
                {/* list */}
                <div className='load-more-wrapper no-request'>
                  {/* podcasts list */}
                  <div className='fade-hover-area'>
                    <div className='flex flex-wrap load-more-container'>
                      {homepagePodcasts
                        .slice(0, visibleItems)
                        .map((podcast, index) => (
                          <div
                            key={index}
                            className='w-full sm:w-1/2 md:w-1/2 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                          >
                            <Link
                              className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                              href={podcast.link}
                            >
                              <Image
                                className='w-full mb-6 ls-is-cached lazyloaded'
                                width='1600'
                                height='960'
                                alt={podcast.title}
                                src={podcast.image}
                                sizes='100vw'
                              />

                              <h3>{podcast.title}</h3>
                              <div className='max-w-2xl mb-4 md:text-lg'>
                                <p>{podcast.description}</p>
                              </div>
                              <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                                <span className='font-sans font-bold'>
                                  Explore more
                                </span>
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
              </div>
            </div>
          </div>
        </section>

        {/* Other pages links */}
        <OtherPages data1={otherPages[2]} data2={otherPages[0]} />
      </main>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}
