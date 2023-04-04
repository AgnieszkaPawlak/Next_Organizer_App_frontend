import NextHead from 'next/head';

export interface Seo {
  title: string;
}

export const Seo = ({ title }: Seo) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};
