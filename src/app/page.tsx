'use client';

//import localFont from 'next/font/local';
//import * from "../../src/public/fonts/swis721-ex-bt.woff2"
import * as React from 'react';

//const myFont = localFont({ src: '../../public/fonts/swis721-ex-bt.woff2' });

export default function HomePage() {
  return (
    <div
      data-barba='container'
      className='bg-black relative z-10'
      style={{ opacity: 1 }}
    >
      <main role='main' className='main relative z-10'>
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
                style={{
                  transform:
                    'translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)',
                }}
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
                    src='https://uploads-ssl.webflow.com/60ac82be52ddbbcb5e8c15d0/614de3485985cb2729448fe5_Home%20Logo%20Video-transcode.mp4'
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    // <div>
    //   <main className='relative'>
    //     {/* Cover Hero */}
    //     <div className='hero-area relative pt-[100px] pb-[130px] md:py-[170px] xl:pt-[270px] xl:pb-[248px]'>
    //       <div className='absolute inset-0 -z-10'>
    //         <Image
    //           src='/images/cover.jpg'
    //           alt='bg'
    //           loading='eager'
    //           className='w-full h-full object-cover'
    //           height={1000}
    //           width={1920}
    //         />
    //         <div className='absolute inset-0 bg-black opacity-50'></div>

    //         {/* <video
    //         autoPlay={true}
    //         muted={true}
    //         loop={true}
    //         playsInline={true}
    //         className='w-full h-full object-cover'
    //       >
    //         <source
    //           type='video/mp4'
    //           src='https://uploads-ssl.webflow.com/60ac82be52ddbbcb5e8c15d0/614de3485985cb2729448fe5_Home%20Logo%20Video-transcode.mp4'
    //         />
    //       </video> */}
    //       </div>
    //       <div
    //         className='container text-center'
    //         style={{ opacity: 1, transform: 'none' }}
    //       >
    //         <p className='text-lg font-medium leading-relaxed text-white '>
    //           To whoever will come - all who are spiritually weary; all who
    //           mourn, all who struggle, all who sin, all who are lonely - this
    //           church opens wide her doors and offers them welcome in the name of
    //           the Lord and Savior
    //         </p>
    //         <h1
    //           className={`text-[#f56d6e] text-[46px] lg:text-[56px] leading-tight   text-primary font-bold ${myFont.className} `}
    //         >
    //           JESUS CHRIST
    //         </h1>
    //       </div>
    //       <div className='bottom-shape absolute -bottom-px left-0 w-full h-[70px] z-1'>
    //         <svg
    //           className='w-full h-full fill-[#f8f8f8]'
    //           viewBox='0 0 100 100'
    //           preserveAspectRatio='none'
    //           height='100'
    //         >
    //           <path
    //             className='elementor-shape-fill'
    //             d='M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0'
    //           ></path>
    //         </svg>
    //       </div>
    //     </div>
    //     {/* Hero Cards */}
    //     <div
    //       className='wrapper mb-[140px] bg-light-100 relative'
    //       style={{
    //         backgroundImage: `url("./background/background-pattern-grid-line.png")`,
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     >
    //       <section className='service-area'>
    //         <div className='container'>
    //           <h2 className='sr-only'>Service Section</h2>
    //           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 relative z-10 top-[-90px] mb-[-90px] xl:top-[-125px] xl:mb-[-125px]'>
    //             <div
    //               className="image-box relative text-center group bg-white pt-10 pb-7.5 px-5 rounded before:absolute before:content-[''] before:z-1 before:inset-0 before:shadow-lg before:shadow-heading/10 before:rounded-b before:transition-opacity before:opacity-0 hover:before:opacity-100"
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               {/* <img
    //               src='/images/learner/h2-learner-01.png'
    //               alt='Customize Preferences'
    //               className='mb-6 mx-auto'
    //             /> */}
    //               <h3 className='text-secondary leading-normal text-xl m-0'>
    //                 Customize Preferences
    //               </h3>
    //               <p className='leading-relaxed mt-2.5 mb-[34px]'>
    //                 Learners are given the right to arrange and customize their
    //                 study schedule and timetable based on preferences.
    //               </p>
    //               <span className='text-md font-bold leading-none inline-flex items-center py-[5px] text-secondary-light transition-colors duration-300 group-hover:text-primary'>
    //                 Start here{' '}
    //                 <i className='fa fa-arrow-right ml-3.5 text-[16px]'></i>
    //               </span>
    //               <a className='link-overlay' href='/start-here'>
    //                 Customize Preferences
    //               </a>
    //             </div>
    //             <div
    //               className="image-box relative text-center group bg-white pt-10 pb-7.5 px-5 rounded before:absolute before:content-[''] before:z-1 before:inset-0 before:shadow-lg before:shadow-heading/10 before:rounded-b before:transition-opacity before:opacity-0 hover:before:opacity-100"
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               {/* <img
    //               src='/images/learner/learner-02.png'
    //               alt='Cloud Storage'
    //               className='mb-6 mx-auto'
    //             /> */}
    //               <h3 className='text-secondary leading-normal text-xl m-0'>
    //                 Cloud Storage
    //               </h3>
    //               <p className='leading-relaxed mt-2.5 mb-[34px]'>
    //                 You can store online lessons via online cloud or download to
    //                 your device and revise lessons on the way.
    //               </p>
    //               <span className='text-md font-bold leading-none inline-flex items-center py-[5px] text-secondary-light transition-colors duration-300 group-hover:text-primary'>
    //                 Start here{' '}
    //                 <i className='fa fa-arrow-right ml-3.5 text-[16px]'></i>
    //               </span>
    //               <a className='link-overlay' href='/start-here'>
    //                 Cloud Storage
    //               </a>
    //             </div>
    //             <div
    //               className="image-box relative text-center group bg-white pt-10 pb-7.5 px-5 rounded before:absolute before:content-[''] before:z-1 before:inset-0 before:shadow-lg before:shadow-heading/10 before:rounded-b before:transition-opacity before:opacity-0 hover:before:opacity-100"
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               {' '}
    //               {/* <img
    //               src='/images/learner/h2-learner-02.png'
    //               alt='Multimedia Channels'
    //               className='mb-6 mx-auto'
    //             /> */}
    //               <h3 className='text-secondary leading-normal text-xl m-0'>
    //                 Multimedia Channels
    //               </h3>
    //               <p className='leading-relaxed mt-2.5 mb-[34px]'>
    //                 We provide study materials with various formats: video,
    //                 audio, slides, doc, prints, books and applications.
    //               </p>
    //               <span className='text-md font-bold leading-none inline-flex items-center py-[5px] text-secondary-light transition-colors duration-300 group-hover:text-primary'>
    //                 Start here{' '}
    //                 <i className='fa fa-arrow-right ml-3.5 text-[16px]'></i>
    //               </span>
    //               <a className='link-overlay' href='/start-here'>
    //                 Multimedia Channels
    //               </a>
    //             </div>
    //           </div>
    //           <p
    //             className='font-medium text-secondary-light leading-relaxed text-lg lg:w-7/12 mx-auto text-center mt-10'
    //             style={{ opacity: 1, transform: 'none' }}
    //           >
    //             Explore the most appropriate courses and certificate that you
    //             desire will be the sweet ultimate reward.{' '}
    //             <a
    //               className="font-bold leading-none relative py-[3px] text-primary before:absolute before:content-[''] before:w-full before:scale-x-100 before:origin-right before:bg-gray-350 before:transition-transform before:duration-600 before:delay-300 before:ease-in-expo before:bottom-0 before:left-0 before:h-px after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-600 after:delay-75 after:ease-in-expo after:bottom-0 after:left-0 after:h-px hover:before:scale-x-0 hover:after:scale-x-100 hover:after:delay-300 hover:before:delay-75"
    //               href='/start-here'
    //             >
    //               Let’s get started <i className='fas fa-arrow-right'></i>
    //             </a>
    //           </p>
    //         </div>
    //       </section>
    //       <section className='funfact-area py-15 md:py-20 lg:py-[100px]'>
    //         <div className='container grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-7.5'>
    //           <div
    //             className='md:max-w-[470px]'
    //             style={{ opacity: 1, transform: 'none' }}
    //           >
    //             <div className='section-title relative z-20'>
    //               <span className='font-medium text-base leading-none -tracking-tightest block mb-2.5 uppercase text-secondary-light'>
    //                 Everything starts with <strong>MaxCoach</strong>
    //               </span>
    //               <h2 className='title m-0 child:text-primary child:font-normal text-secondary text-4xl lg:text-5xl leading-heading lg:leading-heading'>
    //                 We prioritize &amp; embrace the power of{' '}
    //                 <span>Cooperation</span>
    //               </h2>
    //               <p className='mb-0 mt-[25px] font-medium'>
    //                 Get better choice of course, lessons, duration and tutors
    //                 from our catalog. Free consultation sessions available.
    //               </p>
    //             </div>
    //             <p className='font-medium text-secondary-light leading-relaxed text-base mt-5'>
    //               Have questions?
    //               <a
    //                 className="font-bold leading-none relative py-[3px] text-primary before:absolute before:content-[''] before:w-full before:scale-x-100 before:origin-right before:bg-gray-350 before:transition-transform before:duration-600 before:delay-300 before:ease-in-expo before:bottom-0 before:left-0 before:h-px after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-600 after:delay-75 after:ease-in-expo after:bottom-0 after:left-0 after:h-px hover:before:scale-x-0 hover:after:scale-x-100 hover:after:delay-300 hover:before:delay-75"
    //                 href='/start-here'
    //               >
    //                 Get Free Guidbook <i className='fas fa-arrow-right'></i>
    //               </a>
    //             </p>
    //           </div>
    //           <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3.8 gap-10 md:gap-y-15 h-min'>
    //             <div
    //               className='funfact text-center'
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               <div className='text-4xl md:text-5xl font-extrabold leading-none text-primary'>
    //                 <span>1.926</span>
    //               </div>
    //               <h3 className='text-md md:text-base font-bold mt-2.5 md:mt-[14px] mb-0 uppercase text-secondary -tracking-tightest'>
    //                 Finished Sessions
    //               </h3>
    //             </div>
    //             <div
    //               className='funfact text-center'
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               <div className='text-4xl md:text-5xl font-extrabold leading-none text-primary'>
    //                 <span>3.092</span>+
    //               </div>
    //               <h3 className='text-md md:text-base font-bold mt-2.5 md:mt-[14px] mb-0 uppercase text-secondary -tracking-tightest'>
    //                 Online Enrollment
    //               </h3>
    //             </div>
    //             <div
    //               className='funfact text-center'
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               <div className='text-4xl md:text-5xl font-extrabold leading-none text-primary'>
    //                 <span>200</span>
    //               </div>
    //               <h3 className='text-md md:text-base font-bold mt-2.5 md:mt-[14px] mb-0 uppercase text-secondary -tracking-tightest'>
    //                 Subjects Taught
    //               </h3>
    //             </div>
    //             <div
    //               className='funfact text-center'
    //               style={{ opacity: 1, transform: 'none' }}
    //             >
    //               <div className='text-4xl md:text-5xl font-extrabold leading-none text-primary'>
    //                 <span>100</span>%
    //               </div>
    //               <h3 className='text-md md:text-base font-bold mt-2.5 md:mt-[14px] mb-0 uppercase text-secondary -tracking-tightest'>
    //                 Satisfaction rate
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       <section className='video-area relative z-10 pt-15 md:pt-20 lg:pt-[100px]'>
    //         <h2 className='sr-only'>Video Section</h2>
    //         <div className='container -bottom-[140px] -mt-[140px]'>
    //           <div
    //             className='relative overflow-hidden group z-20 rounded shadow-xxl shadow-black/[22%] max-w-[970px] mx-auto'
    //             style={{ opacity: 1, transform: 'none' }}
    //           >
    //             {/* <img
    //             className='w-full transition-transform duration-1500 group-hover:scale-110'
    //             src='/images/about/about-me/video-about-us-2.jpg'
    //             alt='video poster'
    //             width='970'
    //             height='569'
    //             loading='lazy'
    //           /> */}
    //             <button
    //               type='button'
    //               aria-label='Play video'
    //               className='absolute z-30 inset-0 w-full flex justify-center items-center'
    //             >
    //               {/* <img
    //               className='icon w-16 md:w-auto'
    //               src='/images/icons/icon-youtube-play.png'
    //               alt='youtube play'
    //               loading='lazy'
    //               width='100'
    //               height='70'
    //             /> */}
    //             </button>
    //           </div>
    //           <div
    //             className='absolute z-1 -left-10 top-0 w-[120px] h-[130px] md:-top-20 md:left-16 md:w-[226px] md:h-[226px]'
    //             style={{
    //               transform:
    //                 'translateX(35.0667px) translateY(-17.8667px) translateZ(0px)',
    //             }}
    //           >
    //             <svg
    //               className='fill-putty w-full h-full'
    //               viewBox='0 0 395 397'
    //               version='1.1'
    //               width='395px'
    //               height='397px'
    //             >
    //               <g transform='translate(-51.000000, -1390.000000)'>
    //                 <g transform='translate(-28.000000, 963.000000)'>
    //                   <path d='M353.907509,817.715288 C386.112868,835.281848 455.192882,815.572841 468.907509,740.715288 C483.008804,663.747218 442.907509,661.715288 449.907509,633.715288 C478,592 483.008804,538.76355 453.907509,506.715288 C381.907509,431.715288 363.907509,521.715288 303.907509,466.715288 C279.650772,442.458551 242.907509,413.715288 189.907509,433.715288 C114.974471,461.991907 132.907509,521.005066 132.907509,563.715288 C132.907509,578.753612 85.1423289,607.023718 79.9075093,645.715288 C73.306976,694.501115 103.907509,758.715288 132.907509,780.715288 C178.907509,832.715288 249.907509,820.715288 281.907509,802.715288 C309.384918,787.259246 331.907509,805.715288 353.907509,817.715288 Z'></path>
    //                 </g>
    //               </g>
    //             </svg>
    //           </div>
    //           <div
    //             className='absolute z-1 top-11 -left-5 w-[90px] h-[90px] md:w-auto md:h-auto'
    //             style={{
    //               transform:
    //                 'translateX(-35.0667px) translateY(17.8667px) translateZ(0px)',
    //             }}
    //           >
    //             {/* <img
    //             src='/images/shape-animation/shape-3.png'
    //             alt='shape'
    //             loading='lazy'
    //             width='178'
    //             height='178'
    //           /> */}
    //           </div>
    //           <div
    //             className='absolute z-10 top-15 lg:top-10 right-0'
    //             style={{
    //               transform:
    //                 'translateX(35.0667px) translateY(-17.8667px) translateZ(0px)',
    //             }}
    //           >
    //             <span className='block -indent-[99999px] border-desert rounded-full border-[6px] w-[45px] h-[45px] md:border-[12px] md:w-[90px] md:h-[90px]'>
    //               shape 3
    //             </span>
    //           </div>
    //           <div
    //             className='absolute z-1 -bottom-[45px] right-5 w-[85px] md:w-auto'
    //             style={{
    //               transform:
    //                 'translateX(35.0667px) translateY(-17.8667px) translateZ(0px)',
    //             }}
    //           >
    //             {/* <img
    //             src='/images/shape-animation/shape-1.png'
    //             alt=''
    //             loading='lazy'
    //             width='136'
    //             height='136'
    //           /> */}
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </main>
    // </div>
  );
}
