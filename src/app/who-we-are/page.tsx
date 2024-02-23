'use client';
import { Chrono } from 'react-chrono';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

import { otherPages, timelineItems, whoWeAreHero } from '@/constant/config';

export default function AboutUsPage() {
  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Heading Section */}
        <HeroHeading data={whoWeAreHero} />

        {/* Sub-Heading */}
        <SubHeading
          title={whoWeAreHero.timelineHeader}
          description={whoWeAreHero.timelineDescription}
        />

        {/* Timeline  */}
        <section className='relative z-10 overflow-hidden bg-gray-200 text-black'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
              <div className='flex flex-wrap items-center '>
                {/* chrono */}
                <div className='w-full px-4 md:w-full'>
                  <Chrono
                    focusActiveItemOnLoad
                    items={timelineItems}
                    mode='VERTICAL_ALTERNATING'
                    cardHeight={300}
                    cardWidth={650}
                    mediaHeight={300}
                    scrollable={{ scrollbar: true }}
                    contentDetailsHeight={100}
                    fontSizes={{
                      title: '1rem',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other pages links */}
        <OtherPages data1={otherPages[1]} data2={otherPages[2]} />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
