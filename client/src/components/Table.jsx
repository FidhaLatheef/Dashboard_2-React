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
    <div className="col-lg-7 col-md-12">
    <div className="card" style={{ minHeight: 485 }}>
      
      <div className="card-content table-responsive">
        <table className="table table-hover">
          <thead className="text-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bob Williams</td>
              <td>$23,566</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mike Tyson</td>
              <td>$10,200</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tim Sebastian</td>
              <td>$32,190</td>
              <td>Netherlands</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Philip Morris</td>
              <td>$31,123</td>
              <td>Korea, South</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Minerva Hooper</td>
              <td>$23,789</td>
              <td>South Africa</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hulk Hogan</td>
              <td>$43,120</td>
              <td>Netherlands</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Angelina Jolie </td>
              <td>$12,140</td>
              <td>Australia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


  );
};

export default TableComponent;
