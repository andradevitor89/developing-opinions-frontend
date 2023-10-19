import { Divider } from '@mui/material';
import './App.css';
import ArticlesDrawer from './ArticleDrawer';
import RssIcon from './rss.svg';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IArticle from './IArticle';
import Api from './api';
import { formatDateToCustomString } from './utils';

function App() {
  const [articles, setArticles] = useState(new Array<IArticle>());
  const navigate = useNavigate();
  const params = useParams();

  /**
   * Maps the articles to the state
   */
  useEffect(() => {
    new Api().getArticles().then((res) => {
      setArticles(
        res.data.map((a: IArticle) => ({
          ...a,
          date: new Date(a.date),
        }))
      );
    });
  }, []);

  const urlId = useMemo(() => {
    return params.id;
  }, [params]);

  useEffect(() => {
    if (articles.length) {
      navigate(`/${articles[0].id}`);
    }
  }, [articles, navigate]);

  const displayedArticle = useMemo(() => {
    if (articles.length && urlId !== undefined) {
      return articles.find((a) => a.id === Number(urlId));
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
