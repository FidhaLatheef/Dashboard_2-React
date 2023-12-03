import React from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Graph from './components/Graph';

const App = () => {
  return (
    <div>
      <h1>React Dashboard</h1>
      <Table />
      <PieChart />
      <Graph />
    </div>
  );
};

export default App;
