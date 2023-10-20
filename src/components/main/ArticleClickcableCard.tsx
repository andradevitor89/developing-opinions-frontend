import IArticle from '../../interfaces/IArticle';
import { formatDateToCustomString } from '../../utils';
import { useNavigate } from 'react-router-dom';

export function ArticleClickcableCard({
  article,
}: {
  article: IArticle;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start text-left mx-16">
      <div className="text-[#aaa] mb-4">
        {formatDateToCustomString(article.date)}
      </div>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
        {article.title}
      </div>
      <div>
        <button
          onClick={() => navigate(`/${article.id}`)}
          className="text-[#666] bg-[#ebebeb] py-2 px-4 transition-bg transition-text duration-300 hover:bg-[#0181eb] hover:text-white"
        >
          Read on →
        </button>
      </div>
      <div className="border-t border-dashed border-opacity-30 my-8"></div>
    </div>
  );
}
