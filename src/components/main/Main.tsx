import { useMemo } from 'react';
import { useQuery } from 'react-query';
import ArticlesDrawer from '../ArticleDrawer';
import { getArticlesQuery } from '../../hooks/getArticlesQuery';
import { useArticleIdInUrl } from '../../hooks/useArticleIdInUrl';
import IArticle from '../../interfaces/IArticle';
import { ArticleClickcableCard } from './ArticleClickcableCard';
import { ArticleView } from './ArticleView';

export function Main() {
  const { data } = useQuery('articles', getArticlesQuery);
  const articles = data as IArticle[] | null;
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
              article={article}
            ></ArticleClickcableCard>
          ))}
        </div>
      )}
      <ArticlesDrawer />
    </div>
  );
}
