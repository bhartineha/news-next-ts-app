import { categories } from '../types/constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

async function Homepage() {
  //fetch News list 
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news.data);
  return (
    <>
      <NewsList news={news} />
    </>
  )
}

export default Homepage;