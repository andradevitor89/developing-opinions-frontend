import { useMemo } from 'react';
import { useGetArticlesQuery } from '../../hooks/useGetArticlesQuery';
import { useArticleIdInUrl } from '../../hooks/useArticleIdInUrl';
import ArticlesDrawer from '../ArticleDrawer';
import { ArticleClickcableCard } from './ArticleClickcableCard';
import { ArticleView } from './ArticleView';

export function Main() {
  const { data: articles } = useGetArticlesQuery();
  const urlId = useArticleIdInUrl();

  const displayedArticle = useMemo(() => {
    if (articles?.length && urlId !== undefined) {
      return articles.find((a) => a.id === urlId);
    }
  }, [articles, urlId]);

  return (
    <div className="WhiteBox min-h-[100dvh]">
      {displayedArticle && (
        <ArticleView
          displayedArticle={displayedArticle}
        ></ArticleView>
      )}
      {!displayedArticle && (
        <div className=" w-full flex flex-col pt-12">
          {articles?.map((article) => (
            <ArticleClickcableCard
              key={article.id}
              article={article}
            ></ArticleClickcableCard>
          ))}
        </div>
      )}
      <ArticlesDrawer />
    </div>
  );
}
