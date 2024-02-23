'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { OtherPages } from '@/components/layout/other-pages';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import { Textarea } from '@/components/ui/textarea';

import { contactUsContent, otherPages, siteConfig } from '@/constant/config';

const formSchema = z.object({
  firstname: z
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(140, 'You have exceeded the limit'),
  lastname: z
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(140, 'You have exceeded the limit'),
  email: z
    .string()
    .email('Invalid email address')
    .max(140, 'You have exceeded the limit'),
  phone: z
    .string()
    .min(3, 'Phone number must be at least 3 characters')
    .max(140, 'You have exceeded the limit'),
  message: z
    .string()
    .min(10, 'Message needs to be atleast 10 characters')
    .max(200, 'You have exceeded the limit'),
});

export default function ContactUsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
      ? process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
      : '';

    const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      ? process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      : '';
    const emailUserId = process.env.NEXT_PUBLIC_EMAIL_USER_ID
      ? process.env.NEXT_PUBLIC_EMAIL_USER_ID
      : '';

    emailjs.send(emailServiceId, emailTemplateId, values, emailUserId).then(
      (result) => {
        toast.success(result.text, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      },
      (error) => {
        toast.error(error.text, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    );
    form.reset();
  }

  return (
    <div className='bg-black relative z-10' style={{ opacity: 1 }}>
      <Header />
      <main role='main' className='main relative z-10'>
        <section className='relative flex items-center pt-8 md:pt-16'>
          <div className='wrapper py-12 md:py-24 lg:py-32'>
            <div className='flex flex-wrap copy-defaults relative '>
              <div className='w-full md:w-3/4 xl:w-1/2 px-4 z-20 headline-defaults copy-defaults relative md:absolute md:vertical-center '>
                <p className='subhead'>{contactUsContent.header}</p>
                <h1 className=''>
                  {contactUsContent.title}
                  <br />
                  {contactUsContent.subtitle}
                </h1>
                <div className='my-8 text-xl  max-w-lg'>
                  <p>{contactUsContent.description}</p>
                </div>
              </div>
              <div
                className='relative z-10 w-full md:w-3/4 ml-auto mr-0 md:mr-4 rellax rellax-reverse'
                style={{ transform: 'translate3d(0px, -33px, 0px)' }}
              >
                <Image
                  className='relative lazyloaded'
                  width='1300'
                  height='745'
                  alt={contactUsContent.title}
                  src={contactUsContent.image}
                  data-srcset=''
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Not sure what this is for */}
        <div className='anchor-link'>
          <span id='next-corner'></span>
        </div>

        {/* Contact Form  */}
        <section className='relative flex items-center pt-8 lg:pt-16'>
          <div className='wrapper py-12 lg:py-32'>
            <div className='flex flex-wrap items-start headline-defaults copy-defaults'>
              {/* email address */}
              <div className='w-full lg:w-2/5 flex flex-wrap'>
                <div className='w-full sm:w-1/2 lg:w-full px-4 my-4 lg:my-8'>
                  <h2>Contact</h2>
                  <div className='mt-12'>
                    <p className='subhead'>Email address:</p>
                    <p className='text-xl sm:text-2xl lg:text-3xl font-bold font-sans'>
                      <Link
                        className='text-white hover:text-coral transition-colors'
                        href='mailto:clients@slalom.com'
                      >
                        {siteConfig.email}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* Form */}
              <div className='w-full lg:w-3/5 xl:w-1/2 px-4 my-4 lg:mt-8'>
                <div className='flex flex-wrap flex-col xs:flex-row xs:items-end'>
                  <h2>Requests</h2>
                  <p className='subhead xs:ml-auto xs:my-6'>* Required</p>
                </div>
                {/* formfields */}
                <Form {...form}>
                  <form
                    id='contactForm'
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='form-defaults xs:mt-8'
                  >
                    <FormField
                      control={form.control}
                      name='firstname'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='First Name*' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lastname'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Last Name*' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Email Address*' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Phone' {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder='Message*'
                              className='resize-none'
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className='my-12 text-sm'>
                      <p>
                        When filling out this form, we kindly request that you
                        respect the content provided. Once your information is
                        received, we will promptly respond to your request. Your
                        message is valuable to us, and we appreciate your
                        cooperation and understanding.
                      </p>
                    </div>
                    <input type='submit' value='Send' />
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
        <div className='anchor-link'>
          <span id='build-centers'></span>
        </div>

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
                      className=' lazyloaded'
                      width='1000'
                      height='709'
                      alt='Inside of whitepaper book against black background.'
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

        {/* FAQ - Heading */}
        <section className='relative z-10 overflow-hidden bg-black text-white'>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-24 pb-16 md:pb-0'>
              <div className='flex flex-wrap items-center '>
                <div className='w-full px-4 md:w-full'>
                  <div className='headline-defaults copy-defaults py-4 md:py-8 text-center mx-auto '>
                    <div className='rich-text md:my-4 py-px max-w-4xl lg:px-4 xl:px-8 mx-auto '>
                      <h2 className='redactor-heading-two'>
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Questions */}
        <section className='relative z-10 overflow-hidden bg-black text-white '>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-0 pb-16 md:pb-0'>
              <div className='-my-4  flex flex-wrap'>
                <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                  <h3>What are the core beliefs of the church?</h3>
                  <div className='my-8'>
                    <p>
                      We are a gospel-centered community that celebrates the
                      life, death, resurrection and teachings of Jesus. To know
                      more, please go through the{' '}
                      <Link
                        className='underline hover:text-coral'
                        href='/what-we-believe'
                      >
                        'Our Beliefs'
                      </Link>{' '}
                      and the{' '}
                      <Link
                        className='underline hover:text-coral'
                        href='/who-we-are'
                      >
                        'Who We Are'
                      </Link>{' '}
                      pages.
                    </p>
                  </div>
                </div>
                <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                  <h3>Who leads the church?</h3>
                  <div className='my-8'>
                    <p>
                      At Calvary Bible Fellowship, a team of{' '}
                      <Link
                        className='underline hover:text-coral'
                        href='/elders'
                      >
                        'Elders'
                      </Link>{' '}
                      carry the responsibility of overseeing the mission,
                      vision, life and doctrine of the church. They do this
                      largely by empowering and caring for the men and women who
                      serve the church to lead ministries, take bible studies,
                      and care for the flock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative z-10 overflow-hidden bg-black text-white '>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-0 pb-16 md:pb-0'>
              <div className='-my-4  flex flex-wrap'>
                <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                  <h3>I’m skeptical about Christianity, am I still welcome?</h3>
                  <div className='my-8'>
                    <p>
                      Yes. Calvary Bible Fellowship was started with you in
                      mind. Please bring your doubts, your brain, and your
                      baggage — they are all welcome here. You will have the
                      opportunity to learn more, ask questions, share hurts from
                      past experiences, all at your own pace. In fact, you can
                      reach out to any of the elders with your big questions any
                      time — even right now. We will always be eager to hear
                      from you.
                    </p>
                  </div>
                </div>
                <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                  <h3>What does the church believe about marriage?</h3>
                  <div className='my-8'>
                    <p>
                      The Bible consistently defines marriage as a covenant
                      relationship instituted by God with 3 parties involved — a
                      woman, a man, and God himself. Scripture is also clear
                      that sex is a gift — one meant to be enjoyed within a
                      life-long, covenantal, monogamous, heterosexual marriage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative z-10 overflow-hidden bg-black text-white '>
          <div className='wrapper relative z-20 animate-in effect-fade-in entered'>
            <div className='pt-16 md:pt-0 pb-16 md:pb-0'>
              <div className='-my-4  flex flex-wrap'>
                <div className='px-4 my-8 headline-defaults copy-defaults w-full md:flex-1'>
                  <h3>What is the Gospel?</h3>
                  <div className='my-8'>
                    <p>
                      We all recognize the brokenness of our world. We see it
                      everywhere and we know it all too well: it’s in the
                      corrupt failing of human systems, in the hurt we’ve known
                      from others, and even in the selfish leanings of our own
                      hearts. But where is the beauty? Where can we find hope?{' '}
                    </p>
                    <p>
                      We believe hope is found in the person of Jesus Christ. He
                      was a real human that existed in history and also the one
                      true God who’d come to save the world. God is personal and
                      powerful. He came in Jesus — not to condemn the world, but
                      to save it. He is good, and is known by his love.
                    </p>
                    <p>
                      {' '}
                      He is the initiator. He personally invites the world to
                      hope, belonging and purpose. That invitation extends to
                      you. The God who created the universe loves you, died for
                      you, and more than anything, he wants you to know him.
                    </p>
                    <p>
                      {' '}
                      We want you to trust Jesus with your everything. You don’t
                      have to come to church first, and you don’t have to have
                      it all figured out. A relationship with God starts with
                      trust. Trust that he is good. Trust that his way of life
                      will mean more good for you than your own desires or
                      opinions.
                    </p>
                    <p>
                      {' '}
                      You can talk to him right now. That’s where it starts.
                      Tell him you trust him with your whole heart. Tell him
                      you’re turning your whole life over to him. He hears you.
                    </p>
                  </div>
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
      <ToastContainer />
    </div>
  );
}
