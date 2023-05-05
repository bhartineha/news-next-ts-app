import { categories } from '../types/constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './components/NewsList';

async function Homepage() {
  //fetch News list 
  console.log(categories);
  const news: NewsResponse = await fetchNews(categories.join(','));

  console.log(news.data);
  return (
    <>
      <NewsList news={news} />
    </>
  )
}

export default Homepage;