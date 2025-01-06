'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About', href: '/about'},
  {name: 'Project', href: '/projects'},
  { name: 'Blogs', href: '/blogs'},
];

type NavlinksProps = {
    isMenuOpen: boolean;
  };

  const NavLinks: React.FC<NavlinksProps> = ({ isMenuOpen }) => {
  const pathname=usePathname()
  return (
    <>
       <ul
          className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-8 ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "block py-2 lg:py-0 text-gray-700 text-sm font-medium hover:text-blue-600 transition",
                  {
                    "bg-sky-100 text-blue-600": pathname === link.href,
                  }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Call to Action Button */}
          <li className="mt-2 lg:mt-0">
            <Link
              href="/contact"
              className="block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Contact Me
            </Link>
          </li>
        </ul>
    </>
  ); 
}
export default NavLinks;



