import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { contactUsContent, siteConfig } from '@/constant/config';

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

export function ContactForm() {
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
        toast.success(`Form has been submitted: ${result.text}`, {
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
        toast.error(`Unable to submit form at this time: ${error}`, {
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
                    href={`mailto:${siteConfig.email}`}
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
                  <p>{contactUsContent.disclaimer}</p>
                </div>
                <input type='submit' value='Send' />
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
