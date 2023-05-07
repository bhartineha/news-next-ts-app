'use client'

// for every event listner which mount on the window, it should be client- side component
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchBox() {
  const [searchInput, setSearchInput] = useState<string>('');
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (!searchInput) return;
    router.push(`/search?term=${searchInput}`)
  }

  return (
    <form className='flex max-w-6xl mx-auto justify-between item-center px-5' onSubmit={handleSearch}>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className='text-sm h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none
        flex-1 bg-transparent dark:text-orange-400 w-full'
        placeholder='Search Keyword ..'
      />
      <button type='submit'
        className='text-sm disabled:text-gray-400 text-orange-400 cursor-pointer'
        disabled={!searchInput}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox