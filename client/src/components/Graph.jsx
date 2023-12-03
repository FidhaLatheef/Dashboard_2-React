import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

function Graph() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiService.getGraphData().then((data) => {
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

export default Graph
