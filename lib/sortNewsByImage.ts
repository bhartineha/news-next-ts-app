export default function sortNewsByImage(news: NewsResponse){
  const newsWithImage = news.data.filter((item)=> item !== null);
  const newsWithoutImage = news.data.filter((item) => item === null);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data:[...newsWithImage, ...newsWithoutImage],
  }

  return sortedNewsResponse;

} 