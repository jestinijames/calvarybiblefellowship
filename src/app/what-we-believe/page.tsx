/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  otherPages,
  ourBeliefs,
  whatWeBelieveHero,
  whatWeDoContent,
} from '@/constant/config';

export default function BeliefsPage() {
  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Heading */}
        <HeroHeading data={whatWeBelieveHero} />

        {/* Content */}
        {/* Sub-Heading */}
        <SubHeading
          title={whatWeBelieveHero.whatWeBelieveTitle}
          description={whatWeBelieveHero.whatWeBelieveDescription}
          color='black'
        />

        <WhatWeBelieve />
        <WhatWeDo />
        {/* Other pages links */}
        <OtherPages data1={otherPages[2]} data2={otherPages[0]} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function WhatWeDo() {
  return (
    <>
      {/* Sub-Heading */}
      <SubHeading
        title={whatWeBelieveHero.whatWeDoTitle}
        description={whatWeBelieveHero.whatWeDoDescription}
        color='black'
      />

      {/* What we do Images */}
      <section className='relative z-10 overflow-hidden bg-black text-white'>
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
    </>
  );
}
