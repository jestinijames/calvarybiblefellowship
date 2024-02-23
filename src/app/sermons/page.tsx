/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

import {
  otherPages,
  sermonPageHero,
  sermonPageSermons,
} from '@/constant/config';
import { fetchData } from '@/utils/fetch-api';

export default function SermonPage() {
  const [visibleItems, setVisibleItems] = useState(2);

  // Latest Sermon Fetch
  const [sermon, setSermon] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const fetchSermon = useCallback(async () => {
    setIsLoading(true);
    try {
      const playlistId = process.env.NEXT_PUBLIC_SUNDAY_SERMON_ID;
      const response = await fetchData(playlistId, 1, '', 'date');

      setSermon([response.items]);
    } catch (error) {
      toast.error(`Error fetching sermon: ${error}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };

  useEffect(() => {
    fetchSermon();
  }, []);

  if (isLoading || sermon.length === 0) return <Loader />;

  const { snippet } = sermon[0][0];

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Heading Section */}
        <HeroHeading data={sermonPageHero} />

        {/* latest Sermon */}
        {/* Sub-Heading */}
        <SubHeading
          title={sermonPageHero.latestSermonTitle}
          description={sermonPageHero.latestSermonDescription}
          color='black'
        />
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 '>
            <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
              <div className='flex flex-wrap items-center '>
                <div className='w-full px-4 md:w-full'>
                  <div className='w-full flex flex-wrap'>
                    <div className='w-full xl:w-10/12 mx-auto'>
                      <div className='relative video-overlay-container'>
                        <div
                          id='latest-sermon'
                          className={`absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center no-child-pointers cursor-pointer group video-overlay ${
                            isPlaying ? 'disabled' : ''
                          }`}
                          onClick={handlePlayClick}
                        >
                          <svg
                            className='relative z-30 w-28 h-28 transform scale-90 group-hover:scale-100 transition-transform duration-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 80 80'
                          >
                            <g stroke='#fff' strokeWidth='2' fill='none'>
                              <circle
                                cx='40'
                                cy='40'
                                r='40'
                                stroke='none'
                              ></circle>
                              <circle cx='40' cy='40' r='39'></circle>
                            </g>
                            <path
                              d='M33 32.531v15.864l17-7.537z'
                              fill='#fff'
                            ></path>
                          </svg>
                          <div className='absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50 group-hover:opacity-25 transition-opacity duration-500' />

                          <Image
                            className='absolute z-10 top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded'
                            width='2518'
                            height='1416'
                            alt='Slalom Build logo b on cyan.'
                            src={snippet.thumbnails.standard.url}
                            sizes='100vw'
                          />
                        </div>
                        <div className='relative z-10 aspect-video'>
                          <iframe
                            className={`video-embed my-4 relative w-full h-full  has-overlay focus:outline-none ${
                              isPlaying ? 'autoplay' : ''
                            }`}
                            src={`https://www.youtube.com/embed/${
                              snippet.resourceId.videoId
                            }${isPlaying ? '?autoplay=1&mute=1' : ''}`}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sermons list */}
        {/* Sub-Heading */}
        <SubHeading
          title={sermonPageHero.sermonSeriesTitle}
          description={sermonPageHero.sermonSeriesDescription}
          color='black'
        />
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
              <div className='flex flex-wrap headline-defaults copy-defaults'>
                {/* title */}

                {/* list */}
                <div className='load-more-wrapper no-request'>
                  <div className='fade-hover-area'>
                    <div className='flex flex-wrap load-more-container'>
                      {sermonPageSermons
                        .slice(0, visibleItems)
                        .map((sermon, index) => (
                          <div
                            key={index}
                            className='w-full sm:w-1/2 md:w-1/2 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                          >
                            <Link
                              className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                              href={sermon.link}
                            >
                              <Image
                                className='w-full mb-6 ls-is-cached lazyloaded'
                                width='1600'
                                height='960'
                                alt={sermon.title}
                                src={sermon.image}
                                sizes='100vw'
                              />

                              <h3>{sermon.title}</h3>
                              <div className='max-w-2xl mb-4 md:text-lg'>
                                <p>{sermon.description}</p>
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
                        {visibleItems < sermonPageSermons.length && (
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
        <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
      </main>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}
