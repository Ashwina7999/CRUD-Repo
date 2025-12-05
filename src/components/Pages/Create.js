import React from 'react';
import create from '../../assets/icons/create.png';
import wallpaper from '../../assets/background/create.jpeg';
import '../CSS/Style.css';
import Form from '../mapper/Form';
import Social from './Social';
import RestCall from '../mapper/RestCall';

function Create() {

  const isEditable = true;

  const fieldJson = [
    { type: 'text', name: 'name', placeholder: 'Full Name', icon: 'fa fa-user', isEditable: true },
    { type: 'email', name: 'email', placeholder: 'Email Address', icon: 'fa fa-envelope', isEditable: true },
    { type: 'password', name: 'password', autoComplete: 'new-password', placeholder: 'Password', icon: 'fa fa-lock', isEditable: true },
    { type: 'select', name: 'gender', placeholder: 'Gender', icon: 'fa fa-user', isEditable: true },
    { type: 'text', name: 'phone', placeholder: 'Phone Number', icon: 'fa fa-phone', isEditable: true },
    { type: 'text', name: 'city', placeholder: 'City', icon: 'fa fa-home', isEditable: true },
    { type: 'text', name: 'country', placeholder: 'Country', icon: 'fa fa-globe', isEditable: true },
  ];

  const backgroundStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${wallpaper})`,
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Extract form input values
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await RestCall(data, "POST", "createUser");

  };

  return (
    <div className="create-background" style={backgroundStyle}>
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">

            <center>
              <img src={create} alt="" className="crud-icons" />
              <p className='crud-heading'><b>Create an New Employee</b></p>
              <form onSubmit={handleFormSubmission} autoComplete="off">
                <Form fieldJson={fieldJson} pageName={"Create"} rows={4} fieldsPerRow={2} />
                <Social isEditable={isEditable} button={"CREATE"} />
              </form>
            </center>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Create