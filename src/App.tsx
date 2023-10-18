import React from 'react';
import './App.css';
import getArticles from './get-articles';
import ArticlesDrawer from './ArticleDrawer';
import { Divider } from '@mui/material';

function formatDateToCustomString(date: Date) {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${dayOfWeek} ${month} ${day} ${year}`;
}
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
          <div>
            <input className="Search" placeholder="Search"></input>
            <span>subs</span>
          </div>
        </div>
        <div className="WhiteBox">
          <div className="Article">
            <div className="ArticleDate">
              {formatDateToCustomString(articles[0].date)}
            </div>
            <div className="ArticleTitle">{articles[0].title}</div>
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
