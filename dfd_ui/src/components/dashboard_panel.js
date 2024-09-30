import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, LinearProgress } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function DashboardPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: '#1e1e2f',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '20px',
        padding: '20px'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="dashboard tabs"
        sx={{
          bgcolor: '#2e2e3f',
          '& .MuiTab-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
              color: '#fff',
            },
          },
        }}
      >
        <Tab label="Dashboard" />
        <Tab label="Participants" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>
          Generative Content / Deepfake Prediction
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            Fake
          </Typography>
          <Typography variant="body2">25%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={25} />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            Real
          </Typography>
          <Typography variant="body2">75%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={75} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body2">
          Participant list or details can go here.
        </Typography>
      </TabPanel>
    </Box>
  );
}
