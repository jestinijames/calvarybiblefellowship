import Link from 'next/link';

interface OtherData {
  title: string;
  link: string;
  desc: string;
}

export function OtherPages({
  data1,
  data2,
}: {
  data1: OtherData;
  data2: OtherData;
}) {
  const { title: title1, link: link1, desc: desc1 } = data1;
  const { title: title2, link: link2, desc: desc2 } = data2;

  return (
    <section className='relative z-10 bg-black text-white'>
      <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
        <div className='pt-16 md:pt-36 pb-16 md:pb-36'>
          <div className='flex flex-wrap px-2'>
            <div className='w-full md:w-1/2 px-2 my-2'>
              <Link
                className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-[#2e71ea] text-white hover:bg-white hover:text-black'
                href={link1}
              >
                <p className='subhead'>{title1}</p>
                <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>{desc1}</h3>
                <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                  <svg
                    className='w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 23.6 18.2'
                  >
                    <path
                      fill='currentColor'
                      d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className='w-full md:w-1/2 px-2 my-2'>
              <Link
                className='group flex flex-col h-full px-12 py-6 headline-defaults copy-defaults transition-colors no-child-pointers bg-coral text-white hover:bg-white hover:text-black'
                href={link2}
              >
                <p className='subhead'>{title2}</p>
                <h3 className='pb-8 md:pb-12 sm:pr-8 lg:pr-16'>{desc2}</h3>
                <div className='mt-auto mb-2 ml-0 group-hover:ml-2 transition-margin'>
                  <svg
                    className='w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 23.6 18.2'
                  >
                    <path
                      fill='currentColor'
                      d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
