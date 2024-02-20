/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { Footer, Header } from '@/components/Layout';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';

import { ourBeliefs, whatWeDoContent } from '@/constant/config';

export default function BeliefsPage() {
  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Header */}
        <section className='relative flex items-center pt-8 md:pt-16'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults relative '>
              {/* Video title */}
              <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative md:absolute md:vertical-center '>
                <p className='subhead'>What We Believe</p>
                <h1 className=''>
                  Our Core <br />
                  Beliefs.
                </h1>
                <div className='my-8 text-xl  max-w-lg'>
                  <p>
                    We are a gospel-centered community that celebrates the life,
                    death, resurrection and teachings of Jesus.
                  </p>
                </div>
              </div>
              {/* Video */}
              <div
                className='relative z-10 w-full md:w-3/4 ml-auto mr-0 md:mr-4 rellax rellax-reverse'
                style={{ transform: 'translate3d(0px, -36px, 0px)' }}
              >
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  className='video-embed fade-on-load w-full pointer-events-none relative ready'
                >
                  <source type='video/mp4' src='/videos/beliefs.mp4' />
                </video>
              </div>
            </div>
          </div>
        </section>
        <WhatWeBelieve />
        <WhatWeDo />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function WhatWeDo() {
  return (
    <>
      {/* What we do header */}
      <section className='relative z-10 overflow-hidden bg-[#163D4FFF] text-white'>
        <div className='wrapper relative z-20 '>
          <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
            <div className='flex flex-wrap items-center '>
              <div className='w-full px-4 md:w-full'>
                <div className='headline-defaults copy-defaults py-4 md:py-8 text-center mx-auto '>
                  <h2 className='mx-auto '>
                    <span className='my-4 md:my-8'>What We Do</span>
                  </h2>
                  <div className='rich-text md:my-4 py-px max-w-4xl lg:px-4 xl:px-8 mx-auto '>
                    <p>
                      We are committed to being a family made up of different
                      generations, backgrounds, ethnicities and abilities. Unity
                      in the midst of diversity is a big part of God`s Kingdom,
                      and one we celebrate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Images */}
      <section className='relative z-10 overflow-hidden bg-[#163D4FFF] text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-0 pb-16 md:pb-24'>
            <div className='flex flex-wrap items-center  '>
              <div className='w-full px-4 md:w-full'>
                <div className='headline-defaults copy-defaults'>
                  <div className='flex flex-wrap -mx-4 my-4'>
                    {/* Go through what we do images here */}
                    {whatWeDoContent.map((content, index) => (
                      <div
                        key={index}
                        className='w-full xs:w-1/2 px-4 my-4 	md:w-1/4 text-center'
                      >
                        <div className='xl:pr-4'>
                          <div className='w-24 h-24 flex items-center justify-center my-4 md:my-6 mx-auto'>
                            <Image
                              src={content.image}
                              width='71'
                              height='72'
                              alt={content.title}
                            />
                          </div>
                          <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl'>
                            {content.title}
                          </p>
                          <div className='text-sm max-w-md xl:px-4'>
                            <p>{content.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

function WhatWeBelieve() {
  const tabList = useMemo(() => Object.keys(ourBeliefs), []);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const activeTabIndex = useMemo(
    () => tabList.indexOf(activeTab),
    [activeTab, tabList]
  );

  const tabsContent = useMemo(
    () =>
      Object.values(tabList).map((tab: any, i) => (
        <TabsContent key={i} value={tabList[i]}>
          <div className='flex flex-wrap items-center '>
            {/* TC - Left Outer Text */}
            <div className='w-full px-4 md:w-1/2 xl:w-11/24'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <p className='subhead '>Our Beliefs</p>
                <h2 className=' '>
                  <span className='my-4 md:my-8'>{ourBeliefs[tab].title}</span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  {ourBeliefs[tab].content}
                </div>
              </div>
            </div>
            {/* RIght Image */}
            <div className='w-full px-4 md:w-11/24 md:mr-1/24 md:ml-auto'>
              <div className=''>
                <video
                  className='video-embed my-4 relative w-full pointer-events-none fade-on-load focus:outline-none ready'
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                >
                  <source type='video/mp4' src={ourBeliefs[tab].video} />
                </video>
              </div>
            </div>
          </div>
        </TabsContent>
      )),
    [tabList]
  );
  return (
    <>
      <section className='relative z-10 overflow-hidden bg-black text-white'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered '>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            {/* Heading */}
            <div className='flex flex-wrap headline-defaults copy-defaults'>
              <div className='w-full px-4 text-center'>
                <h2 className='mx-auto'>
                  <span className='my-4 md:my-8'>Mission Statement.</span>
                </h2>
                <div className='max-w-4xl md:my-4 py-px mx-auto'>
                  <p style={{ textAlign: 'center' }}>
                    This is our mission statement from when Calvary Bible
                    Fellowship was formed. It still represents what we think
                    matters most.
                  </p>
                </div>
              </div>
            </div>
            <Tabs defaultValue={tabList[0]} onValueChange={setActiveTab}>
              {/* Tab buttons */}
              <div className='carousel-custom-nav flex justify-center  mb-[8rem] mt-[8rem] px-4'>
                <TabsList className='flex-col md:flex-row'>
                  {tabList.map((tab: any, i: number) => (
                    <TabsTrigger
                      key={i}
                      value={tab}
                      className={`btn cursor-pointer -ml-px
                          
                          ${i === activeTabIndex ? ' is-selected' : ' '}  `}
                    >
                      <span> {ourBeliefs[tab].title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              {tabsContent}
            </Tabs>
          </div>
        </div>
      </section>

      {/* <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
        <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
          <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
            <div className='flex flex-wrap items-center '>
              <div className='w-full px-4 md:w-full'>
                <div className='headline-defaults copy-defaults py-4 md:py-8 text-center mx-auto '>
                  <h2 className='mx-auto '>
                    <span className='my-4 md:my-8'>Mission Statement.</span>
                  </h2>
                  <div className='rich-text md:my-4 py-px max-w-4xl lg:px-4 xl:px-8 mx-auto '>
                    <p>
                      
                    </p>
                    <div className='p-5 mx-auto bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16 '>
                      <div>
                        <Tabs
                          defaultValue={tabList[0]}
                          onValueChange={setActiveTab}
                        >
                          <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
                            <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pe-8'>
                              <TabsList className='text-base space-y-1 text-neutral-700 '>
                                {tabList.map((tab: any, i: number) => (
                                  <TabsTrigger
                                    key={i}
                                    value={tab}
                                    className={`px-6 py-3 font-medium rounded-full flex items-center
                          
                          ${
                            i === activeTabIndex
                              ? ' bg-neutral-100 text-neutral-900'
                              : 'hover:text-neutral-800 hover:bg-neutral-100 '
                          }  `}
                                  >
                                   
                                    <span> {ourBeliefs[tab].title}</span>
                                  </TabsTrigger>
                                ))}
                              </TabsList>
                            </div>

                            <div className='border-t border-neutral-500  md:hidden' />

                            <div className='flex-1'>
                              <div className='rounded-xl md:border md:border-neutral-100  md:p-6'>
                                <div className='wwt-content prose lg:prose-lg !max-w-screen-md mx-auto '>
                                  {tabsContent}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
