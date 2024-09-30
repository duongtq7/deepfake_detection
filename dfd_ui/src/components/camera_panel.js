import React, { useEffect, useRef } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import CallEndIcon from '@mui/icons-material/CallEnd';
import SettingsIcon from '@mui/icons-material/Settings';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function VideoPanel() {
  const videoRef = useRef(null);


  useEffect(() => {

    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam: ", error);
      }
    };

    getUserMedia();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        bgcolor: '#1e1e2f',
        padding: '20px',
      }}
    >
      <Box sx={{ position: 'relative', width: '80%', height: '100%', marginBottom: '30px' }}>
        {/* Webcam feed */}
        <video
          ref={videoRef}
          autoPlay
          muted
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
        {/* Video Call Buttons */}
        <Box sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
          <IconButton>
            <CameraAltIcon />
          </IconButton>
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <CallEndIcon sx={{ color: 'red' }} />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Button variant="contained" color="primary" fullWidth>
          Add User to the Call
        </Button>
      </Box>
    </Box>
  );
}
