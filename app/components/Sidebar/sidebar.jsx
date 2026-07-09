'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { subscribeContactInfo } from '../../lib/contactService';

const Sidebar = () => {
  const pathname = usePathname();
  const [socialLinks, setSocialLinks] = useState({ instagram: '', facebook: '', x: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const unsubscribe = subscribeContactInfo((value) => {
      if (!value) return;
      setSocialLinks({
        instagram: value.instagram || '',
        facebook: value.facebook || '',
        x: value.x || ''
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <aside className="animate__animated animate__fadeInLeft w-full px-4 pt-4 md:w-72 md:flex-none md:px-0 md:pt-0">
      <div className="flex h-auto flex-col gap-4 rounded-[2rem] bg-[#F9E6E6] p-4 shadow-[0_16px_40px_rgba(92,61,61,0.08)] md:sticky md:top-5 md:ml-[22px] md:mt-[19px] md:h-[calc(100vh-38px)] md:max-h-[calc(100vh-38px)] md:w-64 md:justify-between md:gap-6 md:overflow-hidden md:p-8">
        <div className="flex items-center justify-between gap-3 md:block">
          <h1 className="text-left text-2xl tracking-wider text-[#9A7272] LuckiestGuy sm:text-3xl md:text-center md:text-4xl">
            TOYWORLD
          </h1>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#5C3D3D] shadow-sm transition-transform hover:scale-105 md:hidden"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className={`${isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100`}>
          <nav className="pt-1 md:flex-1 md:content-center md:pt-0">
            <ul className="flex flex-col gap-3 md:flex-col md:justify-center md:gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <li key={link.path} className="md:w-full">
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`relative block rounded-full px-4 py-3 text-center text-sm font-medium transition-all duration-300 md:w-full md:rounded-none md:px-0 md:py-0 md:pl-10 md:text-left md:text-base ${
                        isActive
                          ? 'bg-white text-[#5C3D3D] shadow-sm md:bg-transparent md:font-bold home-active'
                          : 'text-[#8A6F6F] hover:bg-white/70 hover:text-[#5C3D3D] md:hover:bg-transparent'
                      }`}
                    >
                      <span className={`inline-block transition-transform duration-500 ${isActive ? 'md:pl-2 home-active-text' : 'md:pl-2'}`}>
                        {link.name}
                      </span>
                      {isActive && <span className="home-active-line hidden md:block"></span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-4 flex flex-col items-center gap-4 border-t border-[#E8C5C5] pt-5 md:mt-0">
            <div className="flex space-x-5 text-lg text-[#5C3D3D]">
              <a
                href={socialLinks.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href={socialLinks.facebook || 'https://facebook.com'}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href={socialLinks.x || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="text-center text-[10px] font-light text-[#8A6F6F]">
              Designed by Mutaob Mehraj
            </p>
          </div>
        </div>

        <nav className="hidden md:flex-1 md:content-center">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.path} className="md:w-full">
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative block rounded-full px-4 py-2 text-center text-sm font-medium transition-all duration-300 md:w-full md:rounded-none md:px-0 md:py-0 md:pl-10 md:text-left md:text-base ${
                      isActive
                        ? 'bg-white text-[#5C3D3D] shadow-sm md:bg-transparent md:font-bold home-active'
                        : 'text-[#8A6F6F] hover:bg-white/70 hover:text-[#5C3D3D] md:hover:bg-transparent'
                    }`}
                  >
                    <span className={`inline-block transition-transform duration-500 ${isActive ? 'md:pl-2 home-active-text' : 'md:pl-2'}`}>
                      {link.name}
                    </span>
                    {isActive && <span className="home-active-line hidden md:block"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden flex-col items-center gap-4 border-t border-[#E8C5C5] pt-5 md:flex">
          <div className="flex space-x-5 text-lg text-[#5C3D3D]">
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.facebook || 'https://facebook.com'}
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.x || 'https://twitter.com'}
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-center text-[10px] font-light text-[#8A6F6F]">
            Designed by Mutaob Mehraj
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
