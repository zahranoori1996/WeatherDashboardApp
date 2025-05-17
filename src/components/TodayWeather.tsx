import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TodayWeather: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        height: "218px",
        backgroundColor: '#e0f2ff',
        borderRadius: 8,
        boxShadow: 1,
        padding: 2,
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOnIcon sx={{ color: '#1976d2', mr: 1 }} />
          <Typography variant="subtitle1" color="text.secondary">
            San Francisco
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" color="text.primary">
              Monday
            </Typography>
            <Typography variant="body2" color="text.secondary">
              24 Dec, 2023 11:45 AM
            </Typography>
            <Typography variant="h4" color="#1976d2" sx={{ mt: 1 }}>
              26°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              High: 27 Low: 10
            </Typography>
          </Box>
          <Box textAlign="right">
            <Box
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#fff3e0',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  background: `radial-gradient(circle at 30% 30%, #fff 0%, #fff 50%, #90caf9 50%, #90caf9 100%)`,
                  borderRadius: '50%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '20px solid transparent',
                    borderRight: '20px solid transparent',
                    borderBottom: '30px solid #ffca28',
                  }}
                />
              </Box>
            </Box>
            <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
              Cloudy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feels Like 26
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodayWeather;
