import React from 'react';
// import { useEffect, useState } from 'react';
import './CSS/View.css';

const Card = ({ title }) => {
    return (
        <div className="view-card">
            <div className="img-avatar"></div>
            <div className="card-text">
                <div className="portada"></div>
                <div className="title-total">
                    <div className="card-url"><b className="card-url-b"><u>{title.empid}</u></b></div>
                    <h2 className="card-name">{title.name}</h2>
                    <p className="card-company"><b>American Based Technologies</b></p>
                    <p className="card-company-desc"><b>Telecommunication Product Based</b></p>
                    <div className="actions">
                        <p className="card-phone"><i className="fa fa-lock card-password-i"></i>&nbsp;&nbsp;&nbsp;&nbsp;Password : ********** || Gender : {title.gender}</p>
                        <p className="card-email"><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{title.email}</p>
                        <p className="card-phone"><i className="fa fa-phone card-phone-i"></i>&nbsp;&nbsp;&nbsp;{title.phone} &nbsp;||&nbsp; {title.city} &nbsp;||&nbsp; {title.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const cards = [{ "empid": "E8659", "name": "Jacob", "gender": "Male", "email": "jacob@gmail.com", "password": "Jacob@123", "phone": "1224567890", "city": "Rome", "country": "Italy" }, { "empid": "E1749", "name": "Olivia", "gender": "Female", "email": "olivia@gmail.com", "password": "Olivia@123", "phone": "1234567890", "city": "New York", "country": "United States" }, { "empid": "E1758", "name": "Luna", "gender": "Female", "email": "luna@gmail.com", "password": "Luna@2023", "phone": "8765434309", "city": "Tokyo", "country": "Japan" }, { "empid": "E1748", "name": "Noah", "gender": "Female", "email": "noah@gmail.com", "password": "Noah@123", "phone": "9876543210", "city": "London", "country": "United Kingdom" }, { "empid": "E1750", "name": "James", "gender": "Male", "email": "james@gmail.com", "password": "James@123", "phone": "8429410940", "city": "Paris", "country": "France" }, { "empid": "E1760", "name": "Sophia", "gender": "Female", "email": "sophia@gmail.com", "password": "Sophia@123", "phone": "9521064290", "city": "Madrid", "country": "Spain" }];

function View() {

    // const [cards, setCards] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/view');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const result = await response.json();
    //             setCards(result);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []); // Empty dependency array means this runs once when the component mounts

    // if (loading) return (<div></div>);
    // if (error) return (<div>Error: {error.message}</div>);

    return (
        <div className='view-bg' style={{ backgroundColor: "blueviolet" }}>
            <br></br>
            <div className="view-container">
                <div className="card-grid" style={{ width: "95%" }}>
                    {cards.map((title, index) => (
                        <Card key={index} title={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default View