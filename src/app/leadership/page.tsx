'use client';
import Image from 'next/image';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HeroHeading } from '@/components/layout/hero-heading';
import { OtherPages } from '@/components/layout/other-pages';
import { SubHeading } from '@/components/layout/sub-heading';
import { Button } from '@/components/ui/button';
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ui/credenza';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

import {
  leadershipDeacons,
  leadershipElders,
  leadershipPageHero,
  otherPages,
} from '@/constant/config';

export default function LeadershipPage() {
  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        {/* Heading Section */}
        <HeroHeading data={leadershipPageHero} />

        {/* Eldership */}
        {/* Sub-Heading */}
        <SubHeading
          title={leadershipPageHero.eldersTitle}
          description={leadershipPageHero.eldersDescription}
        />

        {/* Elders */}
        <section className='relative z-10 overflow-hidden bg-gray-200 text-black '>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered mb-5'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
              <div className='-my-4  flex flex-wrap'>
                {leadershipElders.map((elder, index) => (
                  <div
                    key={index}
                    className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1 shadow-md mx-2 md:my-2 '
                  >
                    <Image
                      className='w-full mb-8 ls-is-cached object-cover lazyloaded rounded-full '
                      width='1560'
                      height='1000'
                      alt={elder.name}
                      src={elder.image}
                      sizes='100vw'
                    />
                    <h3 className='text-center'>{elder.name}</h3>
                    <div className='my-8 text-center'>
                      <p>
                        <Credenza>
                          <CredenzaTrigger asChild>
                            <Button className='btn items-center group '>
                              <span>Read More</span>
                            </Button>
                          </CredenzaTrigger>
                          <CredenzaContent className='bg-white text-black'>
                            <CredenzaHeader>
                              <CredenzaTitle>{elder.name}</CredenzaTitle>
                              <CredenzaDescription>
                                {elder.title}
                              </CredenzaDescription>
                            </CredenzaHeader>
                            <CredenzaBody className='space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left'>
                              <p>{elder.bio}</p>
                            </CredenzaBody>
                            <CredenzaFooter>
                              <CredenzaClose asChild>
                                <Button variant='outline'>Close</Button>
                              </CredenzaClose>
                            </CredenzaFooter>
                          </CredenzaContent>
                        </Credenza>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not sure what this is for */}
        <div className='anchor-link'>
          <span id='next-corner'></span>
        </div>

        {/* Deacons */}
        {/* Sub-Heading */}
        <SubHeading
          title={leadershipPageHero.deaconsTitle}
          description={leadershipPageHero.deaconsDescription}
        />

        {/* Deacons */}
        <section className='relative z-10 overflow-hidden bg-gray-200 text-black '>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered mb-5'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
              <div className='-my-4  flex flex-wrap'>
                {leadershipDeacons.map((deacon, index) => (
                  <div
                    key={index}
                    className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1 shadow-md mx-2 md:my-2 '
                  >
                    <Image
                      className='w-full mb-8 ls-is-cached object-cover lazyloaded rounded-full '
                      width='1560'
                      height='1000'
                      alt={deacon.name}
                      src={deacon.image}
                      sizes='100vw'
                    />
                    <h3 className='text-center'>{deacon.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other pages links */}
        <OtherPages data1={otherPages[0]} data2={otherPages[1]} />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
