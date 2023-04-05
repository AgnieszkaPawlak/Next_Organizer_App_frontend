import { clsx } from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/button';

const NotFoundPage = () => {
  return (
    <>
      <div
        className={clsx(
          'z-1 relative block h-[calc(100%-4rem)] w-full overflow-hidden',
          'before:absolute before:z-[-1] before:block before:h-[calc(100%-4rem)] before:w-full before:bg-not-found before:bg-contain before:bg-center before:bg-no-repeat before:opacity-30 before:invert before:sepia'
        )}
      >
        <Link className=" flex h-screen w-screen  items-center justify-center" href="/">
          <Button size="small">Go Home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
