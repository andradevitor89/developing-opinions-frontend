import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { SUBTITLE } from '../helpers/styles';
import IArticle from '../interfaces/IArticle';
import { DashedDivider } from './DashedDivider';

export function ArticleClickableCard({
  article,
}: {
  article: IArticle;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start text-left mx-16">
      <div className="text-[#aaa] mb-4">
        {article.formattedDates.full}
      </div>
      <div className={clsx(SUBTITLE, 'mb-4')}>
        {article.title}
      </div>
      <div>
        <button
          onClick={() => navigate(`/article/${article.id}`)}
          className="text-[#666] bg-[#ebebeb] py-2 px-4 transition-bg transition-text duration-300 hover:bg-[#0181eb] hover:text-white"
        >
          Read on →
        </button>
      </div>
      <DashedDivider></DashedDivider>
    </div>
  );
}
