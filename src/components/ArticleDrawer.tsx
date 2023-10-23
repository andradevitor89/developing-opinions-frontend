import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SUBTITLE } from '../helpers/styles';
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
      <Box
        sx={{ width: 250, padding: '1rem 2rem' }}
        role="presentation"
      >
        <div className="flex flex-col items-start">
          <p
            className={clsx(
              SUBTITLE,
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
      </Box>
    );
  };

  return (
    <div
      className=" bg-[#eee] cursor-pointer transition-bg duration-300 hover:bg-[#ddd]"
      onClick={() => toggleDrawer(!state)}
    >
      <div className="m-2 text-[#aaa]">{'<<'}</div>
      <Drawer anchor={'right'} open={state}>
        {list()}
      </Drawer>
    </div>
  );
}
