import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}
