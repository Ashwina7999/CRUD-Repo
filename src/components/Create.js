import { React, useState } from 'react';
import './CSS/Create.css';
import './CSS/Common.css';
import create from '../Assets/Icons/create.png';
import FieldConstruction from './FieldConstruction';
import Social from './Social';

function Create() {

  const [fieldValue, setFieldValue] = useState({});

  const fieldJson = [
    { type: 'text', name: 'name', placeholder: 'Full Name', icon: 'fa fa-user' },
    { type: 'email', name: 'email', placeholder: 'Email Address', icon: 'fa fa-envelope' },
    { type: 'password', name: 'password', placeholder: 'Password', icon: 'fa fa-lock' },
    { type: 'text', name: 'gender', placeholder: 'Gender', icon: 'fa fa-user' },
    { type: 'text', name: 'phone', placeholder: 'Phone Number', icon: 'fa fa-phone' },
    { type: 'text', name: 'city', placeholder: 'City', icon: 'fa fa-home' },
    { type: 'text', name: 'country', placeholder: 'Country', icon: 'fa fa-globe' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const operation = "insert";
    try {
      const response = await fetch(`http://localhost:8080/createEmployee/${operation}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fieldValue),
      });

      const data = await response.json();
      if (response.ok && !data.errorFlag) {
        setFieldValue({ name: '', email: '', password: '', gender: '', phone: '', city: '', country: '' });
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
    <div className="create-background">
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">
            <br></br><br></br>
            <center>
              <img src={create} alt="" className="crud-icons" />
              <p className='crud-heading'><b>Create an New Employee</b></p>
            </center>
            <form onSubmit={handleSubmit} method="post">
              <center>
                <FieldConstruction fieldJson={fieldJson} fieldValue={fieldValue} handleFieldChange={handleFieldChange} />
              </center>
              <Social button={"CREATE"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create