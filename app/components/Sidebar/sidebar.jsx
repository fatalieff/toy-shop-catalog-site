'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { subscribeContactInfo } from '../../lib/contactService';

const Sidebar = () => {
  const pathname = usePathname();
  const [socialLinks, setSocialLinks] = useState({ instagram: '', facebook: '', x: '' });
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
    <aside className="w-64 h-[calc(100vh-38px)] max-h-[calc(100vh-38px)] bg-[#F9E6E6] flex flex-col rounded-4xl justify-between p-8 sticky mt-[19px] ml-[22px] overflow-hidden box-border animate__animated animate__fadeInLeft">
      <div className="mt-4">
        <h1 className="text-4xl LuckiestGuy font-normal tracking-wider text-[#9A7272] text-center">
          TOYWORLD
        </h1>
      </div>

      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block w-full text-base font-medium transition-all duration-300 pl-10  relative overflow-hidden ${
                    isActive
                      ? 'text-[#5C3D3D] font-bold home-active'
                      : 'text-[#8A6F6F] hover:text-[#5C3D3D]'
                  }`}
                >
                  <span className={`inline-block pl-2 transition-transform duration-500 ${isActive ? 'home-active-text' : ''}`}>
                    {link.name}
                  </span>
                  {isActive && <span className="home-active-line"></span>}
                  
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-4 border-t border-[#E8C5C5] pt-6">
        <div className="flex space-x-5 text-lg text-[#5C3D3D]">
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.facebook || 'https://facebook.com'}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebookF />
          </a>
          <a
            href={socialLinks.x || 'https://twitter.com'}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-[10px] text-[#8A6F6F] font-light">
          Designed by Mutaob Mehraj
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;