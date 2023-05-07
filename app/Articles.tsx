import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: DataEntry
}

function Articles({ article }: Props) {
  const d = new Date(article.published_at);
  let hour = d.getHours();

  return (
    <article className='bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm
    hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out'>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className='w-full h-56 object-cover rounded-t-lg shadow-md'
        />
      )}
      <div className='flex flex-1 flex-col'>
        <div className='p-5 flex flex-1 flex-col'>
          <h1 className='font-serif font-bold'>{article.title}</h1>

          <section className='mt-2 flex-1'>
            <p className='text-sm line-clamp-2'>{article.description}</p>
          </section>

          <footer className='text-xs flex text-right ml-auto space-x-1 pt-5 italic text-gray-400'>
            <p>{article.source} - </p>
            <p>{article.category} - </p>
            <p>{hour} hours ago</p>
          </footer>
        </div>

      </div>

      <ReadMoreButton article={article} />

    </article>
  )
}

export default Articles