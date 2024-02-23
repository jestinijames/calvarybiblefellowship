'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { OtherPages } from '@/components/layout/other-pages';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

import {
  aboutMenuSection,
  connectMenuSection,
  homepageHero,
  homepagePodcasts,
  otherPages,
} from '@/constant/config';

export default function HomePage() {
  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      {/* Header */}
      <Header />
      {/* Hero */}
      <main role='main' className='main relative z-10'>
        {/* Hero */}
        <section className='relative flex items-center overflow-hidden pt-16 md:pt-32 lg:min-h-hero'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults  '>
              <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative '>
                <h1 className=''>
                  <span className='text-sm font-medium uppercase'>
                    {homepageHero.header}
                  </span>
                  <br />
                  {homepageHero.title}
                </h1>
                <div className='my-8 text-xl  max-w-lg'>
                  <p>{homepageHero.description}</p>
                </div>
                <p>
                  <a className='btn items-center group outline' href='/contact'>
                    <span>Contact</span>
                  </a>
                </p>
              </div>
              <div
                className='absolute z-10 w-full h-full top-0 left-0 object-cover rellax'
                style={{
                  transform:
                    'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)',
                }}
              >
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  className='video-embed fade-on-load w-full pointer-events-none h-full absolute top-0 left-0 object-cover ready'
                >
                  <source type='video/mp4' src={homepageHero.video} />
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* Menu links Section */}
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 '>
            <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
              <div className='flex flex-wrap items-center '>
                <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
                  <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                    <h2 className=' '>
                      <span className='my-4 md:my-8'>
                        {aboutMenuSection.title}
                      </span>
                    </h2>
                    <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                      <p>{aboutMenuSection.description}</p>
                    </div>
                    <div className='fade-hover-area fade-hover-area-dark'>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/who-we-are'
                        >
                          <span>Who we are</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <span className='block absolute top-0 left-0 w-full h-px bg-gray-800 pointer-events-none'></span>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/what-we-believe'
                        >
                          <span>What we believe</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <span className='block absolute top-0 left-0 w-full h-px bg-gray-800 pointer-events-none'></span>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/leadership'
                        >
                          <span>Leadership</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
                  <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                    <h2 className=' '>
                      <span className='my-4 md:my-8'>
                        {connectMenuSection.title}
                      </span>
                    </h2>
                    <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                      <p>{connectMenuSection.description}</p>
                    </div>
                    <div className='fade-hover-area fade-hover-area-dark'>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/care-group-schedule'
                        >
                          <span>Care Group Schedule</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <span className='block absolute top-0 left-0 w-full h-px bg-gray-800 pointer-events-none'></span>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/faqs'
                        >
                          <span>FAQs</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                      <p className='relative my-0 lg:mr-8 xl:mr-16 max-w-7xl'>
                        <span className='block absolute top-0 left-0 w-full h-px bg-gray-800 pointer-events-none'></span>
                        <a
                          className='group fade-hover-area-trigger flex items-center py-3 font-bold font-sans no-child-pointers'
                          href='/give'
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <span>Give</span>
                          <span className='ml-auto mr-4 group-hover:mr-2 transition-margin'>
                            <svg
                              className='w-4 h-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 23.6 18.2'
                            >
                              <path
                                fill='currentColor'
                                d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Sermon Section */}
        <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-3 md:pb-24'>
              <div className='flex flex-wrap items-center '>
                <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
                  <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                    <h2 className=' '>
                      <span className='my-4 md:my-8'>
                        Watch the latest sermon
                      </span>
                    </h2>
                    <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                      <p>
                        Dive into our latest sermon experience. Watch below and
                        explore more series on our YouTube channel. Join us on
                        this spiritual journey of faith and inspiration
                      </p>
                    </div>
                    <p>
                      <Link
                        className='btn items-center group '
                        href='/sermons#latest-sermon'
                      >
                        <span>Check it out</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
                  <div className=''>
                    <video
                      className='video-embed my-4 relative w-full pointer-events-none fade-on-load focus:outline-none ready'
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                    >
                      <source type='video/mp4' src='/videos/sermon.mp4' />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sunday Gathering Location */}
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='absolute z-10 w-full h-full top-0 left-0'>
            <Image
              className='absolute top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded'
              width='3840'
              height='1560'
              alt='Image of Asset intelligent products home feature 01'
              src='/images/chair.jpg'
            />
          </div>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-3/4 lg:w-1/2 xl:w-2/5 px-4 '>
                  <div className='bg-white text-black p-12 xl:py-20 headline-defaults copy-defaults'>
                    <h2>Sunday Gathering Location</h2>
                    <div className='my-8'>
                      <p>Join us every Sunday at 8:45 AM IST</p>
                      <p>
                        World Cassette Outreach of India (WCOI)90, Osborne Rd,
                        near Lake Side Hospital, Hermit Colony, Sivanchetti
                        Gardens, Bengaluru, Karnataka 560042
                      </p>
                    </div>
                    <p>
                      <a
                        className='btn items-center group '
                        href='https://www.slalombuild.com/intelligent-products'
                      >
                        <span>Learn more</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Podcasts */}
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
              <div className='flex flex-wrap headline-defaults copy-defaults'>
                <div className='w-full px-4 text-center'>
                  <h2 className='mx-auto'>
                    <span className='my-4 md:my-8'>Trending</span>
                  </h2>
                  <div className='rich-text md:my-4 py-px text-lg max-w-4xl mx-auto'>
                    <p>
                      Explore our trending podcast series! Click on any to
                      listen and dive into captivating stories, insightful
                      discussions, and engaging content.
                    </p>
                  </div>
                </div>
                <div className='load-more-wrapper no-request'>
                  <div className='fade-hover-area'>
                    <div className='flex flex-wrap load-more-container'>
                      {homepagePodcasts.slice(0, 3).map(
                        (
                          podcast: {
                            title: string;
                            description: string;
                            link: string;
                            image: string;
                          },
                          index: number
                        ) => (
                          <div
                            key={index}
                            className='w-full md:w-1/3 px-4 my-8 md:my-12 '
                          >
                            <Link
                              href={podcast.link}
                              className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                            >
                              <Image
                                className='w-full mb-6 ls-is-cached lazyloaded'
                                width='1200'
                                height='750'
                                alt='Open whitepaper book, with cover How to Eat an Airplane.'
                                src={podcast.image}
                                sizes='100vw'
                              />

                              <p className='subhead'>Podcast</p>
                              <h3>{podcast.title}</h3>
                              <div className='max-w-2xl mb-4 md:text-lg'>
                                <p>{podcast.description}</p>
                              </div>
                              <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                                <span className='font-sans font-bold'>
                                  Explore
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sermons and Podcasts Home */}
        {/* Other pages links */}
        <OtherPages data1={otherPages[3]} data2={otherPages[4]} />
      </main>

      <ScrollToTopButton />
      <Footer />
      <ToastContainer />
    </div>
  );
}
