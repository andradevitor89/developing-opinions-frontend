import IArticle from '../../interfaces/IArticle';
import { formatDateToCustomString } from '../../utils';

export function ArticleView({
  displayedArticle,
}: {
  displayedArticle: IArticle;
}) {
  return (
    <div className="Article">
      <div className="ArticleDate">
        {formatDateToCustomString(displayedArticle.date)}
      </div>
      <div className="ArticleTitle">
        {displayedArticle.title}
      </div>
      <div className="Divider"></div>
      <div
        className="ArticleText"
        dangerouslySetInnerHTML={{
          __html: displayedArticle.content,
        }}
      ></div>
    </div>
  );
}
