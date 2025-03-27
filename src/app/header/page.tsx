"use client";

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Skill', path: '/components/skill' },
  { name: 'Projects', path: '/components/project' },
  { name: 'Contact', path: '/components/contact' },
];

const Header: React.FC = () => {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MyApp
      </Typography>
      <List>
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            {/* <ListItemButton component={Link} href={item.path} sx={{ textAlign: 'center' }}> */}
              {/* <ListItemText primary={item.name} /> */}
            {/* </ListItemButton> */}
            {item.name}
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{background: "linear-gradient(135deg, #ff512f, #dd2476)"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Portfolio</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.path} component={Link} href={item.path} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
export default Header;