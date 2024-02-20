import { useWindowScroll } from '@uidotdev/usehooks';
import { debounce } from 'lodash';
import { useCallback } from 'react';

interface ReturnToTopButtonProps {
  delay?: number;
}

function useReturnToTop(delay = 50) {
  const [{ y }, scrollTo] = useWindowScroll();
  const debouncedScrollTo = debounce(scrollTo, delay);
  const handleClick = useCallback(() => {
    debouncedScrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, [debouncedScrollTo]);

  return { y, handleClick };
}

function ScrollToTopButton({ delay }: ReturnToTopButtonProps) {
  const { y, handleClick } = useReturnToTop(delay);

  return (
    <button
      onClick={handleClick}
      aria-label='scroll to top'
      className={`${
        y === 0 ? 'scale-0' : 'scale-100'
      } w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 bg-[#f56d6e] rounded-full shadow-lg shadow-gray-900 justify-center items-center z-50`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 15.75l7.5-7.5 7.5 7.5'
        />
      </svg>
    </button>
  );
}
export default ScrollToTopButton;
