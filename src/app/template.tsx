'use client';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const pathArray = pathName.split('/');

  // Get the last element in the array
  const lastElement = pathArray[pathArray.length - 1];

  // Replace all occurrences of '-' with ''
  const withoutHyphens = lastElement.replace(/-/g, ' ');

  // Capitalize every word in the string
  const capitalized = withoutHyphens
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'
      >
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl font-bold cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {capitalized}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  );
}
