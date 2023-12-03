import axios from 'axios';

const apiService = {
  getTableData: () => axios.get('http://localhost:3001/api/table').then((response) => response.data),
  getPieChartData: () => axios.get('http://localhost:3001/api/pie-chart').then((response) => response.data),
  getGraphData: () => axios.get('http://localhost:3001/api/graph').then((response) => response.data),
};


export default apiService;
