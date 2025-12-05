import React, { useState } from 'react'
import '../CSS/Style.css';
import men from '../../assets/icons/men.png';
import Form from '../mapper/Form';
import Social from './Social';
import wallpaper from '../../assets/background/update.jpg';
import RestCall from '../mapper/RestCall';


function Update() {

  // eslint-disable-next-line no-unused-vars
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({});

  const fieldJson1 = [
    { type: 'text', name: 'userId', placeholder: 'User ID', icon: 'fa fa-user', isEditable: true },
  ];

  const fieldJson2 = [
    { type: 'text', name: 'name', placeholder: 'Full Name', icon: 'fa fa-user', isEditable: isEditable },
    { type: 'email', name: 'email', placeholder: 'Email Address', icon: 'fa fa-envelope', isEditable: isEditable },
    { type: 'password', name: 'password', autoComplete: 'current-password', placeholder: 'Password', icon: 'fa fa-lock', isEditable: isEditable },
    { type: 'text', name: 'gender', placeholder: 'Gender', icon: 'fa fa-user', isEditable: isEditable },
    { type: 'text', name: 'phone', placeholder: 'Phone Number', icon: 'fa fa-phone', isEditable: isEditable },
    { type: 'text', name: 'city', placeholder: 'City', icon: 'fa fa-home', isEditable: isEditable },
    { type: 'text', name: 'country', placeholder: 'Country', icon: 'fa fa-globe', isEditable: isEditable },
  ];

  const backgroundStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${wallpaper})`,
  };

  const handleFormSubmissionGet = async (e) => {
    e.preventDefault();

    // Extract form input values
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await RestCall(data, "GET", "checkUser");

    if (response.users && response.users.length > 0) {
      const user = response.users[0];

      setUserData(user);          // <-- store result
      setIsEditable(true);        // <-- enable editing
    }
  };

  const handleFormSubmissionPut = async (e) => {
    e.preventDefault();

    // Extract form input values
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await RestCall(data, "PUT", "updateUser");

  };

  return (
    <div className="update-background" style={backgroundStyle}>
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">

            <center>
              <br></br>
              <img src={men} alt="" className="crud-icons" />
              <p className="text-white">Enter Employee ID to Update</p>

              <form onSubmit={handleFormSubmissionGet}>
                <Form fieldJson={fieldJson1} pageName={"Update"} rows={1} fieldsPerRow={1} />
                <div className='crud-button-position'>
                  <button type="submit" className="btn" style={{ background: 'crimson' }}>SEARCH</button>
                </div>
              </form>
              <br></br>

              <p className='crud-heading'><b>Employee Details</b></p>

              <form onSubmit={handleFormSubmissionPut} autoComplete="off">
                <Form fieldJson={fieldJson2} pageName={"Update"} rows={4} fieldsPerRow={2} prefilledData={userData} />
                <Social isEditable={isEditable} button={"UPDATE"} />
              </form>

            </center>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
