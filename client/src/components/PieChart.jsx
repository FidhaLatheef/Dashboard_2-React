import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

function PieChart() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiService.getPieChartData().then((data) => {
        console.log(data)
      setTableData(data);
    });
  }, []);

  return (
    <div>
      {/* Render your table using tableData */}
    </div>
  );
}

export default PieChart
