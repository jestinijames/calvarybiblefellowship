import Image from 'next/image';

import {
  Jestinian,
  JestinianBody,
  JestinianClose,
  JestinianContent,
  JestinianDescription,
  JestinianFooter,
  JestinianHeader,
  JestinianTitle,
  JestinianTrigger,
} from '@/components/craft/jestinian';
import { SubHeading } from '@/components/layout/sub-heading';
import { Button } from '@/components/ui/button';

import { leadershipElders, leadershipPageHero } from '@/constant/config';

export function EldersList() {
  return (
    <>
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
                      <Jestinian>
                        <JestinianTrigger asChild>
                          <Button className='btn items-center group '>
                            <span>Read More</span>
                          </Button>
                        </JestinianTrigger>
                        <JestinianContent className='bg-white text-black'>
                          <JestinianHeader>
                            <JestinianTitle>{elder.name}</JestinianTitle>
                            <JestinianDescription>
                              {elder.title}
                            </JestinianDescription>
                          </JestinianHeader>
                          <JestinianBody className='space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left'>
                            <p>{elder.bio}</p>
                          </JestinianBody>
                          <JestinianFooter>
                            <JestinianClose asChild>
                              <Button variant='outline'>Close</Button>
                            </JestinianClose>
                          </JestinianFooter>
                        </JestinianContent>
                      </Jestinian>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
