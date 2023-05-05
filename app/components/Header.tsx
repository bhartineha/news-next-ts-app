import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';
import DarkModeButton from './DarkModeButton';

function Header() {
  return (
    <>
      <header>
        <div className='grid grid-cols-3 p-10 items-center'>
          <Bars3Icon className='h-8 w-8 cursor-pointer' />

          <Link href='/' prefetch={false}>
            <h1 className='font-serif text-4xl text-center'>The{" "}
              <span className='decoration-6 underline decoration-orange-400'>LIVE</span>
              {""} News
            </h1>
          </Link>

          <div className='flex justify-end'>
            <DarkModeButton />
            <button className='hidden md:inline bg-slate-900 text-white rounded-full px-4 py-2 dark:bg-slate-700'>Subscribe Now</button>
          </div>
        </div>
        <NavLinks />
        <SearchBox />
      </header>
    </>
  )
}

export default Header