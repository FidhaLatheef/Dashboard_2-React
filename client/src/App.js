import React from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Graph from './components/Graph';
import ProfileCard from './components/ProfileCard';
import SideBar from './components/sideBar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <div >
        <div className="body-overlay" />
        <SideBar />
        <div id="content">
         <Navbar/>
          <div className="main-content">
            <div className="row ">            
              <Table />
              <ProfileCard />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
