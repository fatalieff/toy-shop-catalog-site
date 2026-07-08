'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayKey, setDisplayKey] = useState(pathname);

  useEffect(() => {
    setDisplayKey(pathname);
  }, [pathname]);

  return (
    <div key={displayKey} className="page-transition page-transition-enter">
      {children}
    </div>
  );
}
