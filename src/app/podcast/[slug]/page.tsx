/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AlternateHeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import { VideoModal } from '@/components/ui/video-modal';

import {
  homepagePodcasts,
  otherPages,
  podcastPageHero,
} from '@/constant/config';
import { fetchData } from '@/utils/fetch-api';

interface Snippet {
  title: string;
  thumbnails: {
    maxres?: {
      url: any;
      width: number;
      height: number;
    };
    // Define other thumbnail sizes if needed
  };
  resourceId?: {
    videoId: string;
  };
  // Define other properties if needed
}

function findPodcastByLink(link: string) {
  const podcast = homepagePodcasts.find((podcast) => podcast.link === link);
  if (podcast) {
    const {
      id: podcastId,
      title: podcastTitle,
      description: podcastDescription,
      image: podcastImage,
    } = podcast;
    return { podcastId, podcastTitle, podcastDescription, podcastImage };
  } else {
    return {
      podcastId: '',
      podcastTitle: '',
      podcastDescription: '',
      podcastImage: '',
    };
  }
}

export default function PodcastRoute({ params }: { params: { slug: string } }) {
  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = params;

  const podcastLink = `/podcast/${slug}`;

  const { podcastId, podcastTitle, podcastDescription, podcastImage } =
    findPodcastByLink(podcastLink);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(podcastId, 3, nextPageToken, '');

      setVideos([...videos, ...response.items]);
      setNextPageToken(response.nextPageToken || ''); // Set empty string if no nextPageToken
    } catch (error) {
      toast.error(`Error fetching videos: ${error}`, {
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
  }, [nextPageToken, slug, videos]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    fetchVideos();
  };

  //if (isLoading) return <Loader />;

  // const data = await getPodcastBySlug(slug);
  if (videos.length === 0) return <Loader />;

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Header */}
        <AlternateHeroHeading
          data={{
            title: podcastTitle,
            description: podcastDescription,
            image: podcastImage,
          }}
        />
        {/* Sub-Heading */}
        <SubHeading
          title={podcastPageHero.podcastAPITitle}
          description={podcastPageHero.podcastAPIDescription}
          color='black'
        />
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
              <div className='flex flex-wrap headline-defaults copy-defaults'>
                <div className='load-more-wrapper no-request'>
                  {/* podcasts */}
                  <div className='fade-hover-area'>
                    <div className='flex flex-wrap load-more-container resource-content'>
                      {videos.map(
                        ({
                          id,
                          snippet = {
                            title: '',
                            thumbnails: {
                              maxres: {
                                url: '',
                                width: 0,
                                height: 0,
                              },
                            },
                          },
                        }: {
                          id: number;
                          snippet: Snippet;
                        }) => {
                          const {
                            title,
                            thumbnails = {},
                            resourceId = {
                              videoId: '',
                            },
                          } = snippet;
                          const { maxres } = thumbnails;

                          return (
                            <div
                              key={id}
                              className='w-full md:w-1/3 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                            >
                              <div className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'>
                                <Image
                                  className='w-full mb-6 ls-is-cached lazyloaded'
                                  width='1200'
                                  height='750'
                                  alt={title}
                                  src={maxres?.url}
                                  sizes='100vw'
                                />

                                <p className='subhead'>PODCAST</p>
                                <h3>{title}</h3>
                                <div className='max-w-2xl mb-4 md:text-lg'>
                                  <p>{podcastDescription}</p>
                                </div>
                                <div className='border-t border-gray-600 flex items-center mt-auto mb-0 py-2'>
                                  <VideoModal video={resourceId.videoId} />
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
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  {/* Load More */}
                  <div className='flex flex-wrap'>
                    <div className='w-full px-4 my-8 text-center copy-defaults'>
                      <p>
                        {nextPageToken && !isLoading && (
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
        <OtherPages data1={otherPages[3]} data2={otherPages[4]} />
      </main>
      <ScrollToTopButton />
      <Footer />
      <ToastContainer />
    </div>
  );
}
