/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SubHeading } from '@/components/layout/sub-heading';
import Loader from '@/components/ui/loader';

import { sermonPageHero } from '@/constant/config';
import { useSermonStore } from '@/utils/sermonStore';

import PlayButton from '~/svg/PlayButton.svg';

export function LatestSermon() {
  const { sermon, isLoading, fetchSermon } = useSermonStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    fetchSermon();
  }, []);

  if (isLoading || sermon.length === 0) return <Loader />;

  const { snippet } = sermon[0][0];

  return (
    <>
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
                        <PlayButton className='relative z-30 w-28 h-28 transform scale-90 group-hover:scale-100 transition-transform duration-500' />

                        <div className='absolute top-0 left-0 w-full h-full z-20 bg-black opacity-50 group-hover:opacity-25 transition-opacity duration-500' />

                        <Image
                          className='absolute z-10 top-0 left-0 w-full h-full object-cover ls-is-cached lazyloaded'
                          width='2518'
                          height='1416'
                          alt={sermonPageHero.latestSermonTitle}
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
    </>
  );
}
