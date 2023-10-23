import { useGetArticlesQuery } from '../hooks/useGetArticlesQuery';
import { ArticleClickableCard } from './ArticleClickableCard';

export function BlogView() {
  const { data: articles } = useGetArticlesQuery();

  return (
    <div className=" w-full flex flex-col pt-12">
      {articles?.map((article) => (
        <ArticleClickableCard
          key={article.id}
          article={article}
        ></ArticleClickableCard>
      ))}
    </div>
  );
}
