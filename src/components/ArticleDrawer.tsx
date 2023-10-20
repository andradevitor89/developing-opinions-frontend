import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArticleDrawer.css';
import IArticle from '../interfaces/IArticle';
import Api from '../api';
import { useArticleIdInUrl } from '../hooks';

export default function ArticlesDrawer() {
  const [state, setState] = React.useState(false);
  const [articles, setArticles] = React.useState(new Array<IArticle>());
  const navigate = useNavigate();
  const urlId = useArticleIdInUrl();

  React.useEffect(() => {
    new Api().getArticles().then((res) => {
      setArticles(
        res.data.map((a: IArticle) => ({
          ...a,
          date: new Date(a.date),
        }))
      );
    });
  }, []);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const list = () => {
    return (
      <Box sx={{ width: 250, padding: '1rem 2rem' }} role="presentation">
        <p className="DrawerTitle"> Recent Posts </p>
        <Divider></Divider>
        {articles
          .filter((a) => a.id !== urlId)
          .map((article) => (
            <p
              key={article.id}
              className="DrawerItem"
              onClick={() => navigate(`/${article.id}`)}
            >
              {article.title}
            </p>
          ))}
      </Box>
    );
  };

  return (
    <div className="ArticleDrawer" onClick={() => toggleDrawer(!state)}>
      <div className="ExpandButton">{'<<'}</div>
      <Drawer anchor={'right'} open={state}>
        {list()}
      </Drawer>
    </div>
  );
}
