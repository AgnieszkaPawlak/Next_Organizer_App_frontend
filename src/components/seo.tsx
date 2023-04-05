import NextHead from 'next/head';

export interface SeoProps {
  title: string;
}

export const Seo = ({ title }: SeoProps) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};
