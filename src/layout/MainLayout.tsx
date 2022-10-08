import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { AppDrawer } from './AppDrawer';
import AppTopBar from './AppTopBar';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}


export default function MainLayout(props: Props) {
const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};
  return (
    <Box sx={{ display: 'flex' }}>
      <AppTopBar handleDrawerToggle={handleDrawerToggle} />
      <AppDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
