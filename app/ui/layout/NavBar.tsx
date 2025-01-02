'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-gray-800" style={{ fontFamily: 'var(--font-primary)' }}>
          Sniffing<span className="text-[var(--color-primary)]">Out</span>Stories
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`} style={{ fontFamily: 'var(--font-primary)' }}>
          {[
            { href: '/create', name: 'Create' },
            { href: '/preview', name: 'Preview' },
            { href: '/profile', name: 'User Profile' },
            { href: '/social', name: 'Community' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'mx-4 text-gray-800 hover:text-[var(--color-primary)] font-medium',
                { 'font-bold text-[var(--color-primary)] underline': pathname === link.href }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
