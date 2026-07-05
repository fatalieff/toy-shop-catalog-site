'use client';

export default function Page() {
  return (
    <section className="p-10 sm:p-14">
      <div className="max-w-5xl mx-auto bg-white/90 rounded-[36px] border border-[#f1d4d4] shadow-[0_30px_80px_rgba(92,61,61,0.12)] overflow-hidden">
        <div className="p-10 lg:p-14">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C05B51] font-semibold">About</p>
          <h1 className="text-5xl LuckiestGuy text-[#5C3D3D] mt-4">Welcome to ToyWorld</h1>
          <p className="mt-6 text-[#8A6F6F] leading-8 text-lg">
            ToyWorld is a playful toy shop built to showcase a friendly and colorful shopping experience. Browse our curated collection of toys and discover gifts designed to delight children of all ages.
          </p>
          <div className="mt-10 rounded-[32px] bg-[#F9E6E6] p-8 text-[#5C3D3D] shadow-sm">
            <p className="text-base leading-7">
              We believe every child deserves a wonderful toy. This shop helps you find the perfect gift with easy browsing and inspiring product selections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
