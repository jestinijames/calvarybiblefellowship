import Image from 'next/image';

import { contactUsContent } from '@/constant/config';

export function Address() {
  return (
    <section className='relative z-10 overflow-hidden bg-black text-white'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-24 pb-16 md:pb-24'>
          <div className='flex flex-wrap items-center '>
            <div className='w-full px-4 md:w-5/12'>
              <div className='headline-defaults copy-defaults py-4 md:py-8 2xl:pr-6 '>
                <h2 className=' '>
                  <span className='my-4 md:my-8'>
                    {contactUsContent.addressHeading}
                  </span>
                </h2>
                <div className='rich-text md:my-4 py-px max-w-4xl lg:pr-8 xl:pr-16 '>
                  <p className='redactor-paragraph font-bold'>
                    <span>{contactUsContent.addressTitle}</span>
                    <br />
                  </p>
                  <p className='redactor-paragraph'>
                    <span>{contactUsContent.address}</span>
                    <br />
                  </p>
                </div>
                <p>
                  <a
                    className='btn items-center group '
                    href={contactUsContent.location}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span>Visit now</span>
                    <span>
                      <svg
                        className='ml-2 w-3 h-3 group-hover:ml-4 group-hover:-mr-2 transition-margin'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 11 10'
                      >
                        <path
                          d='M2 10l5.5-5.5 1.6-1.6C9 3.9 9 4.8 9 5.8v1.7h1.8V0H3.4v1.8h1.7c1 0 1.9 0 2.9-.1-.7.6-1.2 1.1-1.6 1.6L.9 8.8 2 10z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-7/12'>
              <div className='my-4'>
                <Image
                  data-loaded='false'
                  onLoad={(event) => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                  }}
                  className=' lazyloaded data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                  width='1000'
                  height='709'
                  alt={contactUsContent.addressTitle}
                  src={contactUsContent.addressImage}
                  data-srcset=''
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
