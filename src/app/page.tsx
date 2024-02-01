'use client';

import * as React from 'react';

export default function HomePage() {
  return (
    <div className='bg-black relative z-10 '>
      <main className='main relative z-10'>
        <section className='relative flex items-center overflow-hidden pt-16 md:pt-32 lg:min-h-hero'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults  '>
              <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative '>
                <h1 className=''>
                  Building futures.
                  <br />
                  Daily.
                </h1>
                <div className='my-8 text-xl  max-w-lg'>
                  <p>
                    We help to unlock the power of teams and technology, so you
                    can confidently plan, design &amp; build tomorrow. For your
                    customers, for your people, for your entire organization.
                  </p>
                </div>
                <p>
                  <a
                    className='btn items-center group outline'
                    href='https://www.slalombuild.com/contact'
                  >
                    <span>Contact</span>
                  </a>
                </p>
              </div>
              <div
                className='absolute z-10 w-full h-full top-0 left-0 object-cover rellax'
                style={{ transform: 'translate3d(0px, 57px, 0px)' }}
              >
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  className='video-embed fade-on-load w-full pointer-events-none h-full absolute top-0 left-0 object-cover ready'
                >
                  <source
                    type='video/mp4'
                    src='https://player.vimeo.com/external/511692572.hd.mp4?s=b182387bf7c58ccb132613d0cfee97010d3defda&amp;profile_id=175'
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
