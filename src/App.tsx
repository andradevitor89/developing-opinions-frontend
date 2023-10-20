import { Divider } from '@mui/material';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Main } from './Main';
import { getArticlesQuery, useArticleIdInUrl } from './hooks';
import RssIcon from './rss.svg';

function App() {
  const navigate = useNavigate();
  const { data } = useQuery('articles', getArticlesQuery);
  const urlId = useArticleIdInUrl();

  useEffect(() => {
    if (data?.length && urlId === undefined) {
      navigate(`/${data[0].id}`);
    }
  }, [data, navigate, urlId]);

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
        <Main />
      </div>
    </div>
  );
}

export default App;
