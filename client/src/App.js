import React from 'react';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Graph from './components/Graph';
import ProfileCard from './components/ProfileCard';
import SideBar from './components/sideBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div >
        <div className="body-overlay" />
        <SideBar />
        {/* Page Content  */}
        <div id="content">
          <div className="top-navbar" >
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="d-xl-block d-lg-block d-md-mone d-none">
                  <span className="material-icons">arrow_back_ios</span>
                </button>
                <a className="navbar-brand" href="#"> Dashboard </a>
                <button className="d-inline-block d-lg-none ml-auto more-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="material-icons">more_vert</span>
                </button>
                <div className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
                </div>
              </div>
            </nav>
          </div>
          <div className="main-content">
            <div className="row">
              
            </div>
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
