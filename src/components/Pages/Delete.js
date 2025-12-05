import React from 'react';
import remove from '../../assets/icons/remove.png';
import wallpaper from '../../assets/background/delete.jpeg';
import '../CSS/Style.css';
import Form from '../mapper/Form';
import Social from './Social';
import RestCall from '../mapper/RestCall';

function Delete() {

  const isEditable = true;

  const fieldJson = [
    { type: 'email', name: 'email', placeholder: 'Email Address', icon: 'fa fa-envelope', isEditable: true },
    { type: 'password', name: 'password', autoComplete: 'new-password', placeholder: 'Password', icon: 'fa fa-lock', isEditable: true },
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

    await RestCall(data, "DELETE", "deleteUser");

  };

  return (
    <div className="delete-background" style={backgroundStyle}>
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">

            <center>
              <img src={remove} alt="" className="crud-icons" />
              <p className='crud-heading'><b>Delete Your Profile</b></p>
              <p className="text-white">Please enter your email address and password to verify it's you</p>

              <form onSubmit={handleFormSubmission} autoComplete="off">
                <Form fieldJson={fieldJson} pageName={"Delete"} rows={2} fieldsPerRow={1} />
                <Social isEditable={isEditable} button={"DELETE"} />
              </form>
            </center>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
