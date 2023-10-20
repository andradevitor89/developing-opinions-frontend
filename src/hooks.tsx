import { useParams } from 'react-router-dom';

export function useArticleIdInUrl() {
  const params = useParams();
  return params.id !== undefined ? Number(params.id) : undefined;
}
