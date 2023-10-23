import { useMemo } from 'react';
import { useArticleIdInUrl } from '../hooks/useArticleIdInUrl';
import { useGetArticlesQuery } from '../hooks/useGetArticlesQuery';
import { formatDateToCustomString } from '../utils';
import { SUBTITLE, TITLE } from '../helpers/styles';
import clsx from 'clsx';

const applyStyleToHtml = (html: string) => {
  return html.replace(
    /<img/g,
    '<img class="mt-20 mb-20 w-[1000px]"'
  );
};

export function ArticleView() {
  const { data: articles } = useGetArticlesQuery();
  const urlId = useArticleIdInUrl();

  const displayedArticle = useMemo(() => {
    if (articles?.length && urlId !== undefined) {
      return articles.find((a) => a.id === urlId);
    }
  }, [articles, urlId]);

  if (!displayedArticle) return <div></div>;

  return (
    <div className="min-h-[100vh] text-black py-4 px-16 text-left flex flex-col">
      <div className="mt-8 text-[#aaa]">
        {formatDateToCustomString(displayedArticle.date)}
      </div>
      <div
        className={clsx(
          TITLE,
          'font-bold text-[#222] mt-8'
        )}
      >
        {displayedArticle.title}
      </div>

      <div className="border-t border-dashed border-opacity-30 mt-4"></div>
      <div
        className="text-[#333] text-lg mt-8"
        dangerouslySetInnerHTML={{
          __html: applyStyleToHtml(
            displayedArticle.content
          ),
        }}
      ></div>
    </div>
  );
}
