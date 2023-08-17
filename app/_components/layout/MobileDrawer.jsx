import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Drawer = ({ handleDrawerToggle, navItems }) => {
  // auth status
  const { status } = useSession();

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Nextjs+MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          status === "authenticated" ? (
            item.id != 4 ?
            <ListItem key={item.id}>
              <Link href={item.link} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem> :
            ''
          ) : (
            item.id != 5 ?
            <ListItem key={item.id}>
              <Link href={item.link} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem> :
            ''
          )
        ))}
      </List>
    </Box>
  )
}

export default Drawer;