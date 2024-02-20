/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import { Dialog, DialogContent, DialogTrigger } from '@/components/dialog';
import { Footer, Header } from '@/components/Layout';
import Loader from '@/components/loader';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import { sermonPageSermons } from '@/constant/config';
import { fetchData } from '@/utils/fetch-api';

interface Snippet {
  title: string;
  description: any;
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

function findSermonByLink(link: string) {
  const sermon = sermonPageSermons.find((sermon) => sermon.link === link);
  if (sermon) {
    const {
      id: sermonId,
      title: sermonTitle,
      description: sermonDescription,
      image: sermonImage,
    } = sermon;
    return { sermonId, sermonTitle, sermonDescription, sermonImage };
  } else {
    return {
      sermonId: '',
      sermonTitle: '',
      sermonDescription: '',
      sermonImage: '',
    };
  }
}

export default function SermonRoute({ params }: { params: { slug: string } }) {
  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = params;

  const sermonLink = `/sermon/${slug}`;

  const { sermonId, sermonTitle, sermonDescription, sermonImage } =
    findSermonByLink(sermonLink);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(sermonId, 3, nextPageToken, '');

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

  // const data = await getSermonBySlug(slug);
  if (videos.length === 0) return <Loader />;

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Header */}
        <section className='relative flex items-center pt-8 md:pt-16'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults relative '>
              <div className='w-full px-4 headline-defaults copy-defaults text-center'>
                {/* Image */}
                <div
                  className='relative z-10 w-full md:w-3/4 my-8 rellax rellax-reverse mx-auto'
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)',
                  }}
                >
                  <Image
                    className='relative '
                    src={sermonImage}
                    width='1984'
                    height='380'
                    alt={sermonTitle}
                  />
                </div>
                <div className='my-8 md:my-16 text-base sm:text-lg md:text-xl max-w-2xl mx-auto'>
                  <p>{sermonDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-3 md:pt-0 pb-16 md:pb-24'>
              <div className='flex flex-wrap headline-defaults copy-defaults'>
                <div className='w-full px-4 text-center'>
                  <h2 className='mx-auto'>
                    <span className='my-4 md:my-8'>Explore the Series</span>
                  </h2>
                  <div className='rich-text md:my-4 py-px text-lg max-w-4xl mx-auto'>
                    <p>
                      Check back here to see if there's any new content added.
                    </p>
                  </div>
                </div>
                <div className='load-more-wrapper no-request'>
                  {/* sermons */}
                  <div className='fade-hover-area'>
                    <div className='flex flex-wrap load-more-container resource-content'>
                      {videos.map(
                        ({
                          id,
                          snippet = {
                            title: '',
                            description: '',
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
                            description,
                            thumbnails = {},
                            resourceId = {
                              videoId: '',
                            },
                          } = snippet;
                          const { maxres } = thumbnails;

                          // Calculate title, description, scripture and notes
                          const desc = description.substring(
                            0,
                            description.indexOf('Series:')
                          );
                          const sp = description.split('Speaker:').pop();
                          const speaker = sp?.split('Scripture')[0].trim();
                          const scripture = description
                            .split('Scripture:')[1]
                            .split('Sermon')[0]
                            .trim()
                            .split('\n')[0]
                            .trim();
                          const notes = description.split('Notes:')[1].trim();

                          return (
                            <div
                              key={id}
                              className='w-full md:w-1/3 px-4 my-8 md:my-12 animate-in effect-fade-in entered'
                            >
                              <div
                                className='group w-full h-full flex flex-col headline-defaults copy-defaults fade-hover-area-trigger'
                                //href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                              >
                                <picture>
                                  <source
                                    type='image/webp'
                                    src={maxres?.url}
                                    data-sizes='100vw'
                                  />
                                  <Image
                                    className='w-full mb-6 ls-is-cached lazyloaded'
                                    width='1200'
                                    height='750'
                                    alt={title}
                                    src={maxres?.url}
                                    sizes='100vw'
                                  />
                                </picture>

                                <h3>{title}</h3>
                                <div className='max-w-2xl mb-4 md:text-lg'>
                                  <p className='subhead'>
                                    Speaker : {speaker} <br /> Scripture :{' '}
                                    {scripture} <br />
                                    {notes && (
                                      <>
                                        Notes :{' '}
                                        <Link
                                          download='notes'
                                          target='_blank'
                                          rel='noopener noreferrer'
                                          href={notes}
                                          className='underline'
                                        >
                                          Download
                                        </Link>
                                      </>
                                    )}
                                  </p>
                                  <p>{desc}</p>
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
      </main>
      <ScrollToTopButton />
      <Footer />
      <ToastContainer />
    </div>
  );
}

function VideoModal({ video }: { video: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className='font-sans font-bold cursor-pointer'>Listen now</span>
      </DialogTrigger>
      <DialogContent className='ata-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-full max-h-96 max-w-screen-md w-full translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-slate-300 p-[5px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
        <ReactPlayer
          width='100%'
          height='100%'
          url={`https://www.youtube.com/watch?v=${video}`}
        />
      </DialogContent>
    </Dialog>
  );
}
