'use client'
// server component won't use hooks therefore this component is client side

import { categories } from '../types/constants';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className='grid grid-cols-4 gap-4 md:grid-cols-7 text-xs md:text-sm pb-6 border-b max-w-6xl mx-auto'>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)} />
      ))}
    </nav>
  )
}

export default NavLinks