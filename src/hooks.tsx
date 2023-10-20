import { useParams } from 'react-router-dom';
import Api from './api';
import IArticle from './interfaces/IArticle';

export function useArticleIdInUrl() {
  const params = useParams();
  return params.id !== undefined ? Number(params.id) : undefined;
}

export const getArticlesQuery = () =>
  new Api().getArticles().then((res) =>
    res.data.map((a: IArticle) => ({
      ...a,
      date: new Date(a.date),
    }))
  );
