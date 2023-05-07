import { notFound } from "next/navigation";

type Props = {
  searchParams?: DataEntry
}

function ArticlePage({ searchParams }: Props) {

  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    return notFound();
  }

  const article: DataEntry = searchParams;

  return (
    <article>
      <section>
        {article.image && (
          <img src={article.image}
            alt={article.title}
            className="h-50 max-w-md max-auto md:max-w-lg lg:max-w-xl shadow-md object-cover rounded-lg"
          />
        )}

        <div className='px-10'>
          <h1 className='headerTitle'>{article.title}</h1>

          <div className='text-xs flex divide-x-2 space-x-4'>
            <h2 className="font-bold">{article.author} </h2>
            <h2 className="font-bold">{article.source} </h2>
          </div>

          <p className='text-sm line-clamp-2'>{article.description}</p>

        </div>
      </section>
    </article>
  )
}

export default ArticlePage