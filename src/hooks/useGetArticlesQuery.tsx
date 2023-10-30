import { useQuery } from 'react-query';
import Api from '../api';
import { useArticleIdInUrl } from './useArticleIdInUrl';

export const useGetArticlesQuery = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: new Api().getArticles,
  });

export const useGetArticleByIdQuery = () => {
  const id = useArticleIdInUrl();
  return useQuery({
    enabled: id != null,
    queryKey: ['articles', id],
    queryFn: () => new Api().getArticleById(id ?? 1),
  });
};
