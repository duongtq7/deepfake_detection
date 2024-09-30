import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/side_bar';
import DashboardPanel from '../components/dashboard_panel';
import VideoPanel from '../components/camera_panel';

export default function App() {
  // Function to handle camera click from Sidebar
  const handleCameraClick = () => {
    console.log("Camera icon clicked");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: '#121212',
      }}
    >
      {/* Sidebar */}
      <Sidebar onCameraClick={handleCameraClick} />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          padding: '20px',
        }}
      >
        {/* Video Panel */}
        <Box
          sx={{
            flex: 3,
            marginRight: '20px',
          }}
        >
          <VideoPanel/>
        </Box>

        {/* Dashboard Panel */}
        <Box
          sx={{
            flex: 2,
          }}
        >
          <DashboardPanel />
        </Box>
      </Box>
    </Box>
  );
}
