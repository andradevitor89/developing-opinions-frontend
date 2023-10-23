import { Divider } from '@mui/material';
import RssIcon from '../rss.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { openNewTab } from '../helpers/openNewTab';

const navigateToSearch = (search: string) => {
  const BASE_URL = 'https://www.breck-mckye.com';
  return openNewTab(
    `https://www.google.com/search?q=site%3A${encodeURIComponent(
      BASE_URL
    )}&q=${search}`
  );
};

export function Menubar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  return (
    <div className="Menubar">
      <div className="Tabs">
        <span
          className="Item cursor-pointer"
          onClick={() => navigate('/')}
        >
          Blog
        </span>
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
        <input
          className="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              navigateToSearch(search);
            }
          }}
          placeholder="Search"
        ></input>
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
  );
}
