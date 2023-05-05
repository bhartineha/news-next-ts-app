type DataEntry = {
  author: string | null,
  title: string,
  description: string,
  url: string,
  source: string,
  image: string | null,
  category: string,
  language: string,
  country: sting,
  published_at: string
}

type Pagination = {
  limit: Int,
  count: Int,
  offset: Int,
  total: Int
}

type NewsResponse = {
  pagination: Pagination,
  data: DataEntry[]
}

type Category = 
| "general"
| "business"
| "entertainment"
| "health"
| "science"
| "sports"
| "technology"
