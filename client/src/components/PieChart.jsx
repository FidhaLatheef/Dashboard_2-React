import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    apiService.getPieChartData().then((data) => {
      console.log(data);
      setPieChartData(data);
    });
  }, []);

  const chartData = {
    labels: pieChartData.map(entry => entry.label),
    datasets: [{
      data: pieChartData.map(entry => entry.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    }],
  };

  return (
    <div className='card col-md-4'>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
