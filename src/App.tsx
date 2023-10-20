import { Divider } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ArticlesDrawer from './components/ArticleDrawer';
import { getArticlesQuery, useArticleIdInUrl } from './hooks';
import IArticle from './interfaces/IArticle';
import RssIcon from './rss.svg';
import { formatDateToCustomString } from './utils';

function App() {
  const [articles, setArticles] = useState(new Array<IArticle>());
  const navigate = useNavigate();

  const { data } = useQuery('articles', getArticlesQuery);

  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data]);

  const urlId = useArticleIdInUrl();

  useEffect(() => {
    if (articles.length && urlId === undefined) {
      navigate(`/${articles[0].id}`);
    }
  }, [articles, navigate, urlId]);

  const displayedArticle = useMemo(() => {
    if (articles.length && urlId !== undefined) {
      return articles.find((a) => a.id === urlId);
    }
  }, [articles, urlId]);

  return (
    <div className="App">
      <div className="CenterContainer">
        <div className="Header">
          <p className="Title">Jimmy Breck-McKye</p>
          <p className="Subtitle">Developing opinions</p>
        </div>
        <div className="Menubar">
          <div className="Tabs">
            <span className="Item">Blog</span>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: '2rem',
                marginRight: '1rem',
              }}
            />
            <span className="Item">Archives</span>
          </div>
          <div className="RowCenter">
            <input className="Search" placeholder="Search"></input>
            <div>
              <img
                width={20}
                src={RssIcon}
                alt="rss subscribe"
                className="RssIcon"
              />
            </div>
          </div>
        </div>
        {displayedArticle && (
          <div className="WhiteBox">
            <div className="Article">
              <div className="ArticleDate">
                {formatDateToCustomString(displayedArticle.date)}
              </div>
              <div className="ArticleTitle">{displayedArticle.title}</div>
              <div className="Divider"></div>
              <div
                className="ArticleText"
                dangerouslySetInnerHTML={{ __html: displayedArticle.content }}
              ></div>
            </div>
            <ArticlesDrawer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
