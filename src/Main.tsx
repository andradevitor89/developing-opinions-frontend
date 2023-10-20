import { useMemo } from 'react';
import { useQuery } from 'react-query';
import ArticlesDrawer from './components/ArticleDrawer';
import { getArticlesQuery, useArticleIdInUrl } from './hooks';
import IArticle from './interfaces/IArticle';
import { formatDateToCustomString } from './utils';

export function Main() {
  const { data } = useQuery('articles', getArticlesQuery);
  const articles = data as IArticle[] | null;
  const urlId = useArticleIdInUrl();

  const displayedArticle = useMemo(() => {
    if (articles?.length && urlId !== undefined) {
      return articles.find((a) => a.id === urlId);
    }
  }, [articles, urlId]);

  if (!displayedArticle) return <div></div>;

  return (
    <div className="WhiteBox">
      <div className="Article">
        <div className="ArticleDate">
          {formatDateToCustomString(displayedArticle.date)}
        </div>
        <div className="ArticleTitle">{displayedArticle.title}</div>
        <div className="Divider"></div>
        <div
          className="ArticleText"
          dangerouslySetInnerHTML={{
            __html: displayedArticle.content,
          }}
        ></div>
      </div>
      <ArticlesDrawer />
    </div>
  );
}
