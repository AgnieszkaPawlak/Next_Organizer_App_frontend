import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Seo } from '@/components/seo';
import { Navbar } from '@/components/navbar';

const Contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Navbar />
      <div className="flex h-[calc(100%-4rem)] items-center  justify-center">
        <div>Work under construction.</div>
      </div>
    </>
  );
};

export default Contact;
export const getServerSideProps = withPageAuthRequired();
