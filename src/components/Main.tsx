import { Outlet } from 'react-router-dom';
import ArticlesDrawer from './ArticleDrawer';

export function Main() {
  return (
    <div className="min-h-[100dvh] flex bg-white">
      <Outlet />
      <ArticlesDrawer />
    </div>
  );
}
