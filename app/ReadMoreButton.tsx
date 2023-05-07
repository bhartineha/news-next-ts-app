'use client'
import { useRouter } from 'next/navigation';

type Props = {
  article: DataEntry
}

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleReadMore = () => {
    const queryString = Object.entries(article).map(([key, value]) => `${key} = ${value}`).join("&");
    const url = `/article?${queryString}`;
    return router.push(url);
  }

  return (
    <div>
      <button
        className='text-center w-full bg-orange-400 text-white rounded-b-lg py-2'
        onClick={handleReadMore}
      >Read More</button>
    </div>
  )
}

export default ReadMoreButton