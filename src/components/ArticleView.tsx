import clsx from 'clsx';
import { TITLE } from '../helpers/styles';
import { useGetArticleByIdQuery } from '../hooks/useGetArticlesQuery';

const applyStyleToHtml = (html: string) => {
  return html.replace(
    /<img/g,
    '<img class="mt-20 mb-20 w-[100%]"'
  );
};

export function ArticleView() {
  const { data: displayedArticle, isLoading } =
    useGetArticleByIdQuery();

  return (
    <div className="min-h-[100vh] w-full text-black py-4 px-16 text-left flex flex-col">
      {isLoading && (
        <div className="flex justify-center mt-32">
          ... Loading
        </div>
      )}
      {displayedArticle && (
        <>
          <div className="mt-8 text-[#aaa]">
            {displayedArticle.formattedDates.full}
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
        </>
      )}
    </div>
  );
}
