import React from 'react';
// import { useEffect, useState } from 'react';
import './CSS/Home.css';
import BarChart from './Charts/BarChart';
import DistributedChart from './Charts/DistributedChart';
import ColumnChart from './Charts/ColumnChart';

const CardGrid = (props) => {
  let data = props.props;
  return (
    <div className="card">
      <img src={require(`../Assets/Icons/${data.image}.png`)} alt="" className="card-image" />
      <p className="card-p">{data.name}<br></br><b className="card-p-b">{data.value}</b></p>
    </div>
  );
};

const homeResponse = [{ "image": "employee", "name": "Total", "value": "06" }, { "image": "men", "name": "Men", "value": "02" }, { "image": "women", "name": "Women", "value": "04" }, { "image": "role", "name": "Developer", "value": "04" }, { "image": "success", "name": "Tester", "value": "02" }, { "image": "outcome", "name": "Outcome", "value": "100" }];

function Home() {

  // const [homeResponse, setHomeResponse] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/home'); // Replace with your API URL
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setHomeResponse(result);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []); // Empty dependency array means this runs once when the component mounts

  // if (loading) return (<div></div>);
  // if (error) return (<div>Error: {error.message}</div>);

  return (
    <div>
      <div className="background">
        <br></br><br></br><br></br>
        <h1 className="title">Welcome to Employee Dashboard</h1>
        <br></br><br></br>

        <div className="container">
          {homeResponse.map((data, index) => <CardGrid key={index} props={data} />)}
        </div>
        <br></br><br></br><br></br>

        <div className="chart-container">
          <div className='chart-card'>
            <center className='chart-center'>
              <BarChart />
            </center>
          </div>
          <div className='chart-card'>
            <center className='chart-center'>
              <ColumnChart />
            </center>
          </div>
        </div>
        <br></br><br></br>
      </div>
      <br></br>
      <DistributedChart />
    </div>

  )
}

export default Home