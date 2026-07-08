import React from "react";
import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi"; // Axtarış və profil ikonları üçün

export default function Page() {
  return (
    <>
      {/* Yuxarı panel (Axtarış və Profil) */}
      <header className="flex justify-between items-center w-full p-12 page-hero-float">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#8A6F6F]">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#EAC7C6] text-[#fff] placeholder:text-[#fff] pl-10 pr-4 py-4 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#5C3D3D] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <div className="flex items-center pr-12">
          <hr className="w-16 h-0.5 border-0 bg-[#fff] rounded-full" />
          <span className="text-[#fff] text-2xl ml-4">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <FiUser className="text-[#fff] text-2xl ml-4" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-12 pb-12">
        <div className="space-y-6 max-w-xl page-hero-float page-stagger-1">
          <h2 className="text-6xl LuckiestGuy font-black text-[#5C3D3D] leading-tight uppercase">
            Cute <span className="text-[#C05B51]">Toys</span> For Cute <span className="text-[#C05B51]">Kids</span>
          </h2>
          <p className="text-[#8A6F6F] text-sm leading-relaxed page-stagger-2">
            Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment.
          </p>
          <Link href="/shop" className="inline-block text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 page-stagger-3" style={{ background: "linear-gradient(180deg, #DC8F95 0%, #CB655B 100%)" }}>
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}
