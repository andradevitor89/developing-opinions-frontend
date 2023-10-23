import clsx from 'clsx';
import { SUBTITLE, TITLE } from '../helpers/styles';
import { useGetArticlesQuery } from '../hooks/useGetArticlesQuery';
import IArticle from '../interfaces/IArticle';
import { DashedDivider } from './DashedDivider';
import { isNotLastElement } from './isLastElement';
import { Link } from 'react-router-dom';

export function ArchivesView() {
  const { data } = useGetArticlesQuery();
  const articlesGroupedByYear = data?.reduce(
    (acc, article) => {
      const year = article.date.toISOString().split('-')[0];
      if (acc[year]) {
        acc[year].push(article);
      } else {
        acc[year] = [article];
      }
      return acc;
    },
    {} as Record<string, IArticle[]>
  );

  return (
    <div className="w-full text-left p-16">
      <span className={clsx(TITLE)}>Blog Archives</span>
      <div className="w-full flex flex-col pt-12">
        {articlesGroupedByYear &&
          Object.entries(articlesGroupedByYear)?.map(
            ([year, articles], indexYear) => {
              return (
                <div>
                  <div
                    className="mb-8 flex gap-8 lg:gap-16  "
                    key={year}
                  >
                    <div
                      className={clsx(
                        SUBTITLE,
                        'text-[#aaa] '
                      )}
                    >
                      <span>{year}</span>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      {articles.map(
                        (article, indexArticle) => {
                          return (
                            <>
                              <div
                                className="flex items-center gap-4"
                                key={article.id}
                              >
                                <div className="w-1/6 text-[#aaa] font-bold">
                                  <span className="text-center">
                                    {
                                      article.formattedDates
                                        .short
                                    }
                                  </span>
                                </div>
                                <div className="flex flex-col w-fit">
                                  <span
                                    className={clsx(
                                      SUBTITLE
                                    )}
                                  >
                                    <Link
                                      className="transition-text duration-300 hover:text-[#0181eb]"
                                      to={`/article/${article.id}`}
                                    >
                                      {article.title}
                                    </Link>
                                  </span>
                                  <span>
                                    Posted in videogames,
                                    technology etc
                                  </span>
                                </div>
                              </div>
                              {isNotLastElement(
                                indexArticle,
                                articles
                              ) && <DashedDivider />}
                            </>
                          );
                        }
                      )}
                    </div>
                  </div>
                  {isNotLastElement(
                    indexYear,
                    Object.entries(articlesGroupedByYear)
                  ) && <DashedDivider />}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}
