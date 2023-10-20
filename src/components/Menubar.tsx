import { Divider } from '@mui/material';
import RssIcon from '../rss.svg';

export function Menubar() {
  return (
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
  );
}
