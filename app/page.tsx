import React from "react";
import Link from "next/link";
import { FiSearch, FiUser } from "react-icons/fi"; // Axtarış və profil ikonları üçün

export default function Page() {
  return (
    <>
      <header className="page-hero-float flex w-full flex-col gap-4 px-4 pt-2 pb-8 sm:px-6 sm:pt-4 sm:pb-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:pt-12 lg:pb-6">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#8A6F6F]">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full bg-[#EAC7C6] py-3 pl-10 pr-4 text-sm text-[#fff] shadow-xl transition-shadow duration-300 placeholder:text-[#fff] hover:shadow-2xl focus:outline-none focus:ring-1 focus:ring-[#5C3D3D] sm:py-4"
          />
        </div>

        <div className="flex items-center justify-end self-end pr-1 sm:pr-0 lg:self-auto lg:pr-12">
          <hr className="h-0.5 w-10 rounded-full border-0 bg-[#fff] sm:w-16" />
          <span className="ml-3 text-xl text-[#fff] sm:ml-4 sm:text-2xl">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <FiUser className="ml-3 text-xl text-[#fff] sm:ml-4 sm:text-2xl" />
        </div>
      </header>

      <div className="grid grid-cols-1 items-center gap-8 px-4 pb-8 sm:px-6 sm:pb-10 lg:grid-cols-2 lg:px-12 lg:pb-12">
        <div className="page-hero-float page-stagger-1 max-w-2xl space-y-5 rounded-[2rem] bg-white/55 p-6 shadow-[0_18px_50px_rgba(92,61,61,0.08)] backdrop-blur-[2px] sm:p-8 lg:max-w-xl lg:bg-transparent lg:p-0 lg:shadow-none">
          <h2 className="LuckiestGuy text-4xl leading-tight font-black uppercase text-[#5C3D3D] sm:text-5xl lg:text-6xl">
            Cute <span className="text-[#C05B51]">Toys</span> For Cute <span className="text-[#C05B51]">Kids</span>
          </h2>
          <p className="page-stagger-2 max-w-lg text-sm leading-relaxed text-[#8A6F6F] sm:text-base">
            Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment.
          </p>
          <Link href="/shop" className="page-stagger-3 inline-block rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:px-8 sm:text-base" style={{ background: "linear-gradient(180deg, #DC8F95 0%, #CB655B 100%)" }}>
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}
