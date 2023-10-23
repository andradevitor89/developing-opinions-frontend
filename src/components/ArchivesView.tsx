import { TITLE } from '../helpers/styles';
import { useGetArticlesQuery } from '../hooks/useGetArticlesQuery';

export function ArchivesView() {
  const { data: articles } = useGetArticlesQuery();

  return (
    <div className="w-full text-left p-16">
      <span className={TITLE}>Blog Archives</span>
      <div className=" w-full flex flex-col pt-12">
        {articles?.map((article) => {
          return <div key={article.id}></div>;
        })}
      </div>
    </div>
  );
}
