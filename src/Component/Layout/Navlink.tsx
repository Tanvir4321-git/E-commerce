'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavlinkProps = {
  href: string;
  children: ReactNode;
};

const Navlink = ({ href, children }: NavlinkProps) => {
  const pathname = usePathname();

  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-[#86d196] text-[#2D1B5A] font-semibold shadow-sm' 
          : 'text-[#2D1B5A] hover:bg-[#86d196] hover:text-black'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;