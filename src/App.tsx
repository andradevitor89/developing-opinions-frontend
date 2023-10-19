import { Divider } from '@mui/material';
import './App.css';
import RssIcon from './rss.svg';
import ArticlesDrawer from './ArticleDrawer';
import getArticles from './get-articles';
import { formatDateToCustomString } from './utils';

function App() {
  const articles = getArticles();
  return (
    <div className="App">
      <div className="CenterContainer">
        <div className="Header">
          <p className="Title">Jimmy Brek-McKye</p>
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
        <div className="WhiteBox">
          <div className="Article">
            <div className="ArticleDate">
              {formatDateToCustomString(articles[0].date)}
            </div>
            <div className="ArticleTitle">{articles[0].title}</div>
            <div className="Divider"></div>
            <div
              className="ArticleText"
              dangerouslySetInnerHTML={{ __html: articles[0].content }}
            ></div>
          </div>
          <ArticlesDrawer />
        </div>
      </div>
    </div>
  );
}

export default App;
