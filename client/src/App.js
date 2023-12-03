import React from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Graph from './components/Graph';

import SideBar from './components/sideBar';

const App = () => {
  return (
    <div>
      <div >
        <div className="body-overlay" />
        <SideBar/>      

      </div>
    </div>
  );
};

export default App;
