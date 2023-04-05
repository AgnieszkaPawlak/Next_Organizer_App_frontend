import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/button';
import { Main } from '@/components/main';

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return <Main />;
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
          <Button size="regular">Login</Button>
        </Link>
      </div>
    </>
  );
}
