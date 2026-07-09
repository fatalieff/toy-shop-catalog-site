'use client';

export default function Page() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:p-10 xl:p-14">
      <div className="max-w-5xl mx-auto bg-white/90 rounded-[36px] border border-[#f1d4d4] shadow-[0_30px_80px_rgba(92,61,61,0.12)] overflow-hidden page-hero-float">
        <div className="p-6 sm:p-8 lg:p-14">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C05B51] font-semibold">About</p>
          <h1 className="mt-4 text-3xl LuckiestGuy text-[#5C3D3D] page-stagger-1 sm:text-4xl lg:text-5xl">Welcome to ToyWorld</h1>
          <p className="mt-6 text-base leading-7 text-[#8A6F6F] page-stagger-2 sm:text-lg sm:leading-8">
            ToyWorld is a playful toy shop built to showcase a friendly and colorful shopping experience. Browse our curated collection of toys and discover gifts designed to delight children of all ages.
          </p>
          <div className="mt-8 rounded-[32px] bg-[#F9E6E6] p-5 text-[#5C3D3D] shadow-sm page-stagger-3 sm:mt-10 sm:p-8">
            <p className="text-sm leading-7 sm:text-base">
              We believe every child deserves a wonderful toy. This shop helps you find the perfect gift with easy browsing and inspiring product selections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
