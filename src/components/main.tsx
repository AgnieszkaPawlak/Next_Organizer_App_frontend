import Link from 'next/link';
import { clsx } from 'clsx';

import { Navbar } from '@/components/navbar';
import { Seo } from '@/components/seo';
import { Button } from '@/components/button';

export const Main = () => {
  return (
    <>
      <Seo title="Organizer App" />
      <Navbar />
      <div className=" flex h-[calc(100%-4rem)] w-screen justify-center text-center">
        <div className=" flex flex-1 overflow-hidden bg-pins bg-cover opacity-20 "></div>
        <div className=" flex-1 flex-row items-center justify-center">
          <div className=" flex h-[60%] flex-wrap justify-center text-dark-blue">
            <h1 className="mt-6">App Organizer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <Link href="/calendar">
              <Button size="small">Go to Calendar</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
