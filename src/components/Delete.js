import React, { useState } from 'react';
import remove from '../Assets/Icons/remove.png';
import './CSS/Delete.css';
import FieldConstruction from './FieldConstruction';
import Social from './Social';

function Delete() {

  const [fieldValue, setFieldValue] = useState({});

  const fieldJson = [
    { type: 'email', name: 'email', placeholder: 'Email Address', icon: 'fa fa-envelope' },
    { type: 'password', name: 'password', placeholder: 'Password', icon: 'fa fa-lock' },
  ];

  const handleSubmit = async (e) => {

    e.preventDefault();
    const operation = "delete";

    try {
      const response = await fetch(`http://localhost:8080/deleteEmployee/${operation}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fieldValue),
      });

      const data = await response.json();
      if (response.ok && !data.errorFlag) {
        setFieldValue({ email: '', password: '' });
        alert(data.Message);
      }
      else {
        alert(data.Message || 'Something Went Wrong in Backend');
      }
    } catch (error) {
      alert('Internal Server Error');
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFieldValue({ ...fieldValue, [name]: value })
  }

  return (
    <div className="delete-background">
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">
            <center>
              <img src={remove} alt='' className='crud-icons' />
            </center>
            <div className="delete-heading">
              <p className='crud-heading'><b>Delete Your Profile</b></p>
              <p className="text-white">Please enter your email address and password to verify it's you</p>
            </div>
            <form onSubmit={handleSubmit} method="post">
              <center>
                <FieldConstruction fieldJson={fieldJson} fieldValue={fieldValue} handleFieldChange={handleFieldChange} />
              </center>
              <Social button={"DELETE"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete