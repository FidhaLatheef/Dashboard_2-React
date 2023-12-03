import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';


const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiService.getTableData().then((data) => {
        console.log(data)
      setTableData(data);
    });
  }, []);

  return (
    <div>
 
</div>


  );
};

export default TableComponent;
