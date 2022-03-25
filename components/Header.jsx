import React from 'react';
import { Pie } from 'react-chartjs-2';

const chartData = {
  labels: [
    'Boston',
    'Worcester',
    'Springfield',
    'Lowell',
    'Cambridge',
    'New Bedford',
  ],
  datasets: [
    {
      data: [617594, 181045, 153060, 106519, 105162, 95072],
      //backgroundColor:'green',
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const Header = () => {
  return (
    <div>
      <Pie
        data={chartData}
        options={{
          title: {
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            labels: {
              fontColor: '#000',
            },
          },
        }}
      />
    </div>
  );
};

export default Header;
