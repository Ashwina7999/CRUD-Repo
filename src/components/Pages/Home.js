import React, { useEffect, useState } from 'react';
import '../CSS/Style.css';
import wallpaper from '../../assets/background/home.jpg';
import DistributedChart from '../charts/DistributedChart';
import Chart from '../charts/Chart';
import RestCall from '../mapper/RestCall';

const CardGrid = ({ card }) => {
  return (
    <div className="card">
      <img src={require(`../../assets/icons/${card.image}.png`)} alt="" className="card-image" />
      <p className="card-p">{card.name}<br></br><b className="card-p-b">{card.value}</b></p>
    </div>
  );
};

const backgroundStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${wallpaper})`,
  minHeight: '100vh'
};

//In case API Call fails or Backend not connected, showing default hardcoded response Json
const defaultHomeResponse = [{ "image": "employee", "name": "Total", "value": "00" }, { "image": "men", "name": "Men", "value": "00" }, { "image": "women", "name": "Women", "value": "00" }, { "image": "role", "name": "Developer", "value": "00" }, { "image": "success", "name": "Tester", "value": "00" }, { "image": "outcome", "name": "Outcome", "value": "00" }];

function Home({ page }) {

  const [homeResponse, setHomeResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestCall(null, "GET", "");

      if (response && response.cardList) {
        setHomeResponse(response.cardList);
      } else {
        setHomeResponse(defaultHomeResponse);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="background" style={backgroundStyle}>
        <br></br><br></br>
        <h1 className="title">Welcome to Employee Dashboard</h1>
        <br></br>

        <div className="container">
          {homeResponse.map(card => <CardGrid key={card.image} card={card} />)}
        </div>

        <br></br><br></br>
        <Chart />
        <br></br><br></br>
      </div>
      <br></br>
      <DistributedChart />
    </div>
  )
}

export default Home
