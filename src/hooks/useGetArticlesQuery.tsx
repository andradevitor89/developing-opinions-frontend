import { useQuery } from 'react-query';
import Api from '../api';

export const useGetArticlesQuery = () =>
  useQuery({
    queryKey: 'articles',
    queryFn: new Api().getArticles,
  });
