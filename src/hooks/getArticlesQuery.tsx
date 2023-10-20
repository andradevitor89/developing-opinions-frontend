import Api from '../api';
import IArticle from '../interfaces/IArticle';

export const getArticlesQuery = () =>
  new Api().getArticles().then((res) =>
    res.data.map((a: IArticle) => ({
      ...a,
      date: new Date(a.date),
    }))
  );
