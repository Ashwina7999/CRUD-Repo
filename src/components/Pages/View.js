import React, { useEffect, useState } from 'react';
import '../CSS/Style.css';
import RestCall from '../mapper/RestCall';

const Card = ({ card }) => {
    return (
        <div className="view-card">
            <div className="img-avatar"></div>
            <div className="card-text">
                <div className="portada"></div>
                <div className="title-total">
                    <div className="card-url"><b className="card-url-b"><u>{card?.userId}</u></b></div>
                    <h2 className="card-name">{card?.name}</h2>
                    <p className="card-company"><b>{card?.country} Based Technologies</b></p>
                    <p className="card-company-desc"><b>{card?.city} Product Based</b></p>
                    <div className="actions">
                        <p className="card-phone"><i className="fa fa-lock card-password-i"></i>&nbsp;&nbsp;&nbsp;&nbsp;Password : ********** || Gender : {card?.gender}</p>
                        <p className="card-email"><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{card?.email}</p>
                        <p className="card-phone"><i className="fa fa-phone card-phone-i"></i>&nbsp;&nbsp;&nbsp;{card?.phone} &nbsp;||&nbsp; {card?.city} &nbsp;||&nbsp; {card?.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

//In case API Call fails or Backend not connected, showing default hardcoded response Json
const defaultCards = [{"userId":"U2100613172","name":"Jenifer","email":"jenifer@gmail.com","password":"Jenifer@123","role":"User","gender":"Female","phone":"9754321856","city":"Paris","country":"France"},{"userId":"U1825450543","name":"Bella","email":"Bella@gmail.com","password":"Bella@123","role":"User","gender":"Female","phone":"8745936172","city":"Italy","country":"Europe"},{"userId":"U2100613174","name":"Jacob","email":"jacob@gmail.com","password":"Jacob@123","role":"User","gender":"Male","phone":"8578394810","city":"Rome","country":"Italy"},{"userId":"U2100613175","name":"Olivia","email":"olivia@gmail.com","password":"Olivia@123","role":"User","gender":"Female","phone":"7754321856","city":"Serbia","country":"Balkans"},{"userId":"U1825450546","name":"Luna","email":"luna@gmail.com","password":"Luna@123","role":"User","gender":"Female","phone":"9745936172","city":"New York","country":"US"},{"userId":"U1825450549","name":"Sophia","email":"sophia@gmail.com","password":"Sophia@123","role":"User","gender":"Female","phone":"8539281580","city":"Madrid","country":"Spain"}];

function View() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await RestCall(null, "GET", "viewAllUser");

            if (response && response.users) {
                setCards(response.users);
            } else {
                setCards(defaultCards);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='view-bg'>
            {
                cards.length === 0 && <p style={{ color: "#fff", textAlign: "center", paddingTop: "250px" }}>No users found - Please Create a new User</p>
            }
            <div className="view-container">
                <div className="card-grid" style={{ width: "95%" }}>
                    {
                        cards && cards.map(card => (
                            <Card key={card.userId} card={card} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default View