import { clsx } from 'clsx';

const NotFoundPage = () => {
  return (
    <>
      <div
        className={clsx(
          'z-1 relative block h-[calc(100%-4rem)] w-full overflow-hidden',
          'before:absolute before:z-[-1] before:block before:h-[calc(100%-4rem)] before:w-full before:bg-not-found before:bg-contain before:bg-center before:bg-no-repeat before:opacity-30 before:invert before:sepia'
        )}
      ></div>
    </>
  );
};

export default NotFoundPage;
