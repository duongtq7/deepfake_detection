import React from 'react';
import { Avatar, Box, IconButton, List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactsIcon from '@mui/icons-material/Contacts';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Sidebar({ onCameraClick }) {
  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
        bgcolor: '#1e1e2f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
      }}
    >
      {/* Logo */}
      <Box sx={{ marginBottom: '20px' }}>
        <img src="../../public/logo192.png" alt="Logo" width="40" height="40" />
      </Box>

      {/* Button List */}
      <List sx={{ width: '100%', padding: 0 }}>
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton>
            <ContactsIcon />
          </IconButton>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton onClick={onCameraClick}>
            <CameraAltIcon />
          </IconButton>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center' }}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </ListItem>
      </List>

      {/* Avatar */}
      <Box sx={{ marginTop: '20px' }}>
        <Avatar alt="User Avatar" src="../../public/logo192.png" />
      </Box>
    </Box>
  );
}
