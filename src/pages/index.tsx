import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { IoIosLogIn } from 'react-icons/io';
import { Seo } from '@/components/seo';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/button';

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Seo title="Organizer App" />
        <Navbar />
        <div className="flex h-[calc(100%-4rem)] w-[calc(100%-2rem)]  items-center justify-center">
          Witam
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="
        h-full
        w-full
        overflow-hidden
        bg-dairy
        bg-cover
        bg-center
        bg-no-repeat 
        "
      >
        <Link
          className=" flex h-screen w-screen  items-center justify-center"
          href="/api/auth/login"
        >
          <Button size="large">Login</Button>
        </Link>
      </div>
    </>
  );
}
