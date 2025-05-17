import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { height, width } from '@mui/system';

const data = [
  { month: 'Jan', temp: 10 },
  { month: 'Feb', temp: 25 },
  { month: 'Mar', temp: 12 },
  { month: 'Apr', temp: 38 },
  { month: 'May', temp: 25 },
  { month: 'Jun', temp: 30 },
  { month: 'Jul', temp: 28 },
  { month: 'Aug', temp: 32 },
  { month: 'Sep', temp: 30 },
  { month: 'Oct', temp: 28 },
  { month: 'Nov', temp: 25 },
  { month: 'Dec', temp: 30 },
];

const TemperatureChart: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E1E9EE',
        padding: 2,
        borderRadius: 8,
        boxShadow: 1,
        // width: '100%',
        
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Average Monthly Temperature
      </Typography>
      <LineChart width={630} height={170}

       data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="month" stroke="#666" />
        <YAxis
          label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', offset: -5 }}
          stroke="#666"
          domain={[0, 40]}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#4CDFE8"
          strokeWidth={2}
          dot={false}
        />
        <Area
          type="monotone"
          dataKey="temp"
          fill="#8884d8"
          fillOpacity={0.2}
        />
      </LineChart>
      
    </Box>
  );
};

export default TemperatureChart;