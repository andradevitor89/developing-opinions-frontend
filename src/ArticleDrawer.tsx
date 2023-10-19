import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import './ArticleDrawer.css';
import getArticles from './get-articles';

export default function ArticlesDrawer() {
  const articles = getArticles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    console.log('toggleDrawer', open);

    setState(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <p className="DrawerTitle"> Recent Posts </p>
        {articles.slice(1).map((article) => (
          <ListItem key={article.title} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={article.title}
                sx={{ textDecoration: 'underline' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="ArticleDrawer" onClick={() => toggleDrawer(!state)}>
      <React.Fragment key="right">
        <div className="ExpandButton">{'<<'}</div>
        <Drawer anchor={'right'} open={state}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
