import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  DEFAULT,
  LARGE,
  MEDIUM,
  SUBTITLE,
} from '../helpers/styles';
import { useArticleIdInUrl } from '../hooks/useArticleIdInUrl';
import { useGetArticlesQuery } from '../hooks/useGetArticlesQuery';

export default function ArticlesDrawer() {
  const [state, setState] = React.useState(false);
  const urlId = useArticleIdInUrl();
  const { data: articles } = useGetArticlesQuery();

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const list = () => {
    return (
      <div
        className={clsx(
          'flex flex-col items-start min-w-[265px]'
        )}
      >
        <p
          className={clsx(
            LARGE,
            'font-bold text-[#222] text-left mb-2'
          )}
        >
          Recent Posts
        </p>
        <Divider></Divider>
        {articles
          ?.filter((a) => a.id !== urlId)
          .map((article) => (
            <Link
              key={article.id}
              className="text-left cursor-pointer mt-4 underline transition-text duration-300 hover:text-[#0181eb]"
              to={`/article/${article.id}`}
            >
              {article.title}
            </Link>
          ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'bg-[#e0e0e0] ',
        !state &&
          'transition-bg duration-300 hover:bg-[#ccc] cursor-pointer',
        state && 'text-left'
      )}
      onClick={handleClick({ wasClickOnButton: false })}
    >
      <div
        className={clsx(
          'text-[#aaa]  w-[40px] text-center cursor-pointer ',
          state ? 'rounded-r-lg bg-white' : ''
        )}
        onClick={handleClick({ wasClickOnButton: true })}
      >
        {state ? '>>' : '<<'}
      </div>
      {state && <div className="py-4 px-8">{list()}</div>}
    </div>
  );

  function handleClick({
    wasClickOnButton = false,
  }): React.MouseEventHandler<HTMLDivElement> | undefined {
    return () => {
      if (wasClickOnButton || state === false)
        toggleDrawer(!state);
    };
  }
}
