import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { siteConfig } from '@/constant/config';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`main-header fixed top-0 left-0 w-full z-20 pointer-events-none ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className='nav-dropdown-overlay hidden xl:block fixed w-full h-full top-26 left-0 z-10 bg-black bg-opacity-75 opacity-0 transition-opacity pointer-events-none' />
      {/* Desktop navigation */}
      <div className='desktop-nav hidden xl:block xl:py-2 text-white bg-transparent pointer-events-auto transition-header duration-500'>
        <div className='flex flex-wrap items-center'>
          {/* Logo and probably other menu items */}
          <div>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              <li className='ml-10 mr-4 mt-1 hidden xl:block'>
                <Link className='no-child-pointers block' href='/'>
                  <Image
                    className='sb_logo'
                    src='/logos/CBF_WT_Full.png'
                    alt='CBF Logo'
                    width={250}
                    height={102}
                  />
                </Link>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <Link
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-coral transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none ${
                    pathname === '/who-we-are' ? 'text-coral' : ''
                  }  xl:font-bold`}
                  href='/who-we-are'
                >
                  <span>Who We Are</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <Link
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-coral transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none ${
                    pathname === '/what-we-believe' ? 'text-coral' : ''
                  }  xl:font-bold`}
                  href='/what-we-believe'
                >
                  <span>What We Believe</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <Link
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-coral transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none ${
                    pathname === '/leadership' ? 'text-coral' : ''
                  }  xl:font-bold`}
                  href='/leadership'
                >
                  <span>Leadership</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact button */}
          <div className='ml-auto mr-8'>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              {/* Sermons Link */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <a
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-coral transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none ${
                    pathname === '/sermons' ? 'text-coral' : ''
                  } border-none mb-8 xl:mb-0`}
                  href='/sermons'
                >
                  <span>Sermons</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              {/* Podcasts Link */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4'>
                <a
                  className={`group px-0 pt-4 pb-3 flex items-center w-full font-sans font-regular border-b border-white border-opacity-40 xl:hover:text-coral transition-colors xl:inline xl:px-2 xl:py-0 xl:border-none ${
                    pathname === '/podcasts' ? 'text-coral' : ''
                  } border-none mb-8 xl:mb-0`}
                  href='/podcasts'
                >
                  <span>Podcasts</span>
                  <span className='ml-auto mr-4 group-hover:mr-2 transition-margin xl:hidden'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 23.6 18.2'
                    >
                      <path
                        fill='currentColor'
                        d='M23.6 9.138c0-.2-.1-.5-.3-.7l-7.7-8.1c-.4-.4-.9-.4-1.4 0-.4.3-.4 1 0 1.4l6.1 6.5H1c-.5 0-1 .4-1 1 0 .5.4 1 1 1h19.5l-6.1 6.5c-.3.4-.3 1 0 1.4.4.4 1 .3 1.4 0l7.7-8.1c.1-.5.1-.7.1-.9z'
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <p>
                  <Link
                    className='btn items-center group -my-4 btn-nav-contact'
                    href='#'
                  >
                    <span>Contact</span>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className='mobile-nav block h-screen pointer-events-none xl:hidden'>
        <div className='mobile-nav-top-bar relative z-20'>
          <div className='bg-black text-white flex flex-wrap items-center justify-between px-4 py-3 sm:py-4 pointer-events-auto'>
            {/* Hamburger menu */}
            <div className='mobile-nav-toggle'>
              <div className='hamburger'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>
            </div>
            <Link className='block no-child-pointers ml-2' href='/'>
              <Image
                className='sb_logo'
                src='/logos/CBF_WT_Full.png'
                alt='CBF Logo'
                width={150}
                height={62}
              />
            </Link>
            <Link className='block font-sans font-bold text-sm' href='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className='bg-gray-400 text-black headline-defaults copy-defaults relative z-10'>
      <div className='wrapper relative z-10'>
        <div className='flex flex-wrap py-8 md:pt-16 md:pb-24'>
          {/* Logo */}
          <div className='w-full xl:w-2/5 px-4'>
            <Image
              src='/logos/CBF_WT_Full_Coral.png'
              alt='bg'
              loading='eager'
              className='object-cover'
              height={200}
              width={400}
            />
          </div>
          {/* links */}
          <div className='w-full xl:w-3/5'>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>
                  <span className='hover:underline'>About Us</span>
                </p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  <li className='pr-4'>
                    <a className='hover:underline' href='/who-we-are'>
                      Who We Are
                    </a>
                  </li>
                  <li className='pr-4'>
                    <a className='hover:underline' href='/what-we-believe'>
                      What We Believe
                    </a>
                  </li>
                  <li className='pr-4'>
                    <a className='hover:underline' href='/leadership'>
                      Leadership
                    </a>
                  </li>

                  <li className='pr-4'>
                    <a className='hover:underline' href='/care-groups'>
                      Care Groups
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>
                  <span className='hover:underline'>Quick Links</span>
                </p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  <li className='pr-4'>
                    <a
                      className='hover:underline'
                      href='https://www.slalombuild.com/work'
                    >
                      Work
                    </a>
                  </li>
                  <li className='pr-4'>
                    <a
                      className='hover:underline'
                      href='https://www.slalombuild.com/hackathons'
                    >
                      Hackathons
                    </a>
                  </li>
                  <li className='pr-4'>
                    <a
                      className='hover:underline'
                      href='https://www.slalombuild.com/partners-in-building'
                    >
                      Partners in Building
                    </a>
                  </li>
                  <li className='pr-4'>
                    <a
                      className='hover:underline'
                      href='https://www.slalombuild.com/intelligent-products'
                    >
                      Intelligent Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-1/2 md:w-1/3 px-4'>
                <p className='subhead'>
                  <a
                    className='hover:underline'
                    href='https://www.slalombuild.com/how-we-do-it'
                  >
                    Have Questions? Please reach us at
                  </a>
                </p>
                <ul className='list-none pl-0 font-sans xl:mt-8'>
                  <li className='pr-4'>
                    <a
                      className='hover:underline font-bold'
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Social */}
        <div className='flex flex-wrap items-center my-4 md:mt-0 md:mb-8 md:px-2'>
          <a
            href='https://www.youtube.com/channel/UCE0ODfrD_TjdTySfNv9ggeQ'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block w-6 h-6 mx-4 md:mx-2 text-black hover:text-[#c63b3f] transition-colors'
          >
            <svg
              fill='#000000'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='-143 145 512 512'
              xmlSpace='preserve'
            >
              <g>
                <polygon points='78.9,450.3 162.7,401.1 78.9,351.9 	' />
                <path
                  d='M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z'
                  fill='currentColor'
                />
              </g>
            </svg>
          </a>
          <a
            href='https://open.spotify.com/show/07dGkNxqaELnimZKlfqtBY'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block w-6 h-6 mx-4 md:mx-2 text-black hover:text-[#c63b3f] transition-colors'
          >
            <svg
              viewBox='0 0 20 20'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g
                id='Page-1'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Dribbble-Light-Preview'
                  transform='translate(-140.000000, -7479.000000)'
                  fill='#000000'
                >
                  <g id='icons' transform='translate(56.000000, 160.000000)'>
                    <path
                      d='M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z'
                      id='spotify-[#162]'
                      fill='currentColor'
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href='https://podcasts.apple.com/in/podcast/calvary-bible-fellowship-bangalore/id1528884061'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block w-6 h-6 mx-4 md:mx-2 text-black hover:text-[#c63b3f] transition-colors'
          >
            <svg
              fill='#000000'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.12 0c-3.937-0.011-7.131 3.183-7.12 7.12v17.76c-0.011 3.937 3.183 7.131 7.12 7.12h17.76c3.937 0.011 7.131-3.183 7.12-7.12v-17.76c0.011-3.937-3.183-7.131-7.12-7.12zM15.817 3.421c3.115 0 5.932 1.204 8.079 3.453 1.631 1.693 2.547 3.489 3.016 5.855 0.161 0.787 0.161 2.932 0.009 3.817-0.5 2.817-2.041 5.339-4.317 7.063-0.812 0.615-2.797 1.683-3.115 1.683-0.12 0-0.129-0.12-0.077-0.615 0.099-0.792 0.192-0.953 0.64-1.141 0.713-0.296 1.932-1.167 2.677-1.911 1.301-1.303 2.229-2.932 2.677-4.719 0.281-1.1 0.244-3.543-0.063-4.672-0.969-3.595-3.907-6.385-7.5-7.136-1.041-0.213-2.943-0.213-4 0-3.636 0.751-6.647 3.683-7.563 7.371-0.245 1.004-0.245 3.448 0 4.448 0.609 2.443 2.188 4.681 4.255 6.015 0.407 0.271 0.896 0.547 1.1 0.631 0.447 0.192 0.547 0.355 0.629 1.14 0.052 0.485 0.041 0.62-0.072 0.62-0.073 0-0.62-0.235-1.199-0.511l-0.052-0.041c-3.297-1.62-5.407-4.364-6.177-8.016-0.187-0.943-0.224-3.187-0.036-4.052 0.479-2.323 1.396-4.135 2.921-5.739 2.199-2.319 5.027-3.543 8.172-3.543zM16 7.172c0.541 0.005 1.068 0.052 1.473 0.14 3.715 0.828 6.344 4.543 5.833 8.229-0.203 1.489-0.713 2.709-1.619 3.844-0.448 0.573-1.537 1.532-1.729 1.532-0.032 0-0.063-0.365-0.063-0.803v-0.808l0.552-0.661c2.093-2.505 1.943-6.005-0.339-8.296-0.885-0.896-1.912-1.423-3.235-1.661-0.853-0.161-1.031-0.161-1.927-0.011-1.364 0.219-2.417 0.744-3.355 1.672-2.291 2.271-2.443 5.791-0.348 8.296l0.552 0.661v0.813c0 0.448-0.037 0.807-0.084 0.807-0.036 0-0.349-0.213-0.683-0.479l-0.047-0.016c-1.109-0.885-2.088-2.453-2.495-3.995-0.244-0.932-0.244-2.697 0.011-3.625 0.672-2.505 2.521-4.448 5.079-5.359 0.547-0.193 1.509-0.297 2.416-0.281zM15.823 11.156c0.417 0 0.828 0.084 1.131 0.24 0.645 0.339 1.183 0.989 1.385 1.677 0.62 2.104-1.609 3.948-3.631 3.005h-0.015c-0.953-0.443-1.464-1.276-1.475-2.36 0-0.979 0.541-1.828 1.484-2.328 0.297-0.156 0.709-0.235 1.125-0.235zM15.812 17.464c1.319-0.005 2.271 0.463 2.625 1.291 0.265 0.62 0.167 2.573-0.292 5.735-0.307 2.208-0.479 2.765-0.905 3.141-0.589 0.52-1.417 0.667-2.209 0.385h-0.004c-0.953-0.344-1.157-0.808-1.553-3.527-0.452-3.161-0.552-5.115-0.285-5.735 0.348-0.823 1.296-1.285 2.624-1.291z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>
      </div>
      <div className='border-t border-gray-800 relative z-20'>
        <div className='wrapper'>
          <div className='flex flex-wrap px-4 xl:py-4 xl:items-center'>
            <div className='w-full xl:flex-1 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between -mb-4 xl:-mb-0 relative z-20'>
              <p className='subhead xl:mr-8 relative z-10'>
                Copyright © {new Date().getFullYear()} {siteConfig.title}. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
