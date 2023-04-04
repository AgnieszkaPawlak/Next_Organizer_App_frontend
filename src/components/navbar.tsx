import Link from 'next/link';
import { Button } from './button';

export const Navbar = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex">
          {[
            ['Home', '/'],
            ['Calendar', '/calendar'],
            ['Todo', '/todo'],
            ['Contact', '/contact'],
            ['Logout', '/api/auth/logout'],
          ].map(([title, url]) => (
            <li key={title} className="ml-6 flex-1">
              <Link href={url}>
                <Button size="medium">{title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
