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

function MenubarItem({
  label,
  path,
}: {
  label: string;
  path: string;
}) {
  const navigate = useNavigate();
  return (
    <span
      className="cursor-pointer mr-4 text-[#6b6b6b]"
      onClick={() => navigate(`/${path}`)}
    >
      {label}
    </span>
  );
}
export function Menubar() {
  const [search, setSearch] = useState('');
  const items = [
    { label: 'Blog', path: 'blog' },
    { label: 'Archives', path: 'archives' },
  ];
  return (
    <div className="bg-gradient-to-b from-[#cdcdcd] via-gray-300 to-[#bfbebe] flex py-2 px-16 border-b border-gray-400 justify-between">
      <div className="flex items-center">
        {items?.map((item, index) => (
          <>
            <MenubarItem {...item} />
            {isLastElement(index, items) && (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  height: '2rem',
                  marginRight: '1rem',
                }}
              />
            )}
          </>
        ))}
      </div>
      <div className="RowCenter flex items-center justify-center">
        <input
          className="mr-8 rounded-lg border border-gray-300 p-1"
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
function isLastElement(
  index: number,
  items: { label: string; path: string }[]
) {
  return index !== items.length - 1;
}
