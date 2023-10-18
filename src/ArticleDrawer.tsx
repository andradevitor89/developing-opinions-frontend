import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './ArticleDrawer.css';

export default function ArticlesDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    console.log('toggleDrawer', open);

    setState(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <span> Recent Posts </span>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <span> Github Repos </span>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="ArticleDrawer" onClick={() => toggleDrawer(!state)}>
      {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => ( */}
      <React.Fragment key="right">
        <div className="ExpandButton">{'<<'}</div>
        <Drawer anchor={'right'} open={state}>
          {list()}
        </Drawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
}
