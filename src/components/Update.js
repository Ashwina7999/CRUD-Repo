import React, { useState } from 'react';
import men from '../Assets/Icons/men.png';
import './CSS/Update.css';
import Social from './Social';

function Update() {
  const [empid, setEmpid] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', gender: '', phone: '', city: '', country: '' });
  const [isEditable, setIsEditable] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmployeeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/verifyEmployee/${empid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ empid }),
      });

      const data = await response.json();
      if (response.ok && !data.errorFlag) {
        setFormData(data.employee);
        setIsEditable(true);
      } else {
        alert(data.Message || 'Something went wrong.');
        resetForm();
      }
    } catch (error) {
      alert('Internal Server Error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/updateEmployee/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.Message);
      if (!data.errorFlag) resetForm();
    } catch (error) {
      alert('Internal Server Error');
    }
  };

  const resetForm = () => {
    setEmpid('');
    setFormData({ name: '', email: '', password: '', gender: '', phone: '', city: '', country: '' });
    setIsEditable(false);
  };

  return (
    <div className="update-background">
      <div className="create-container">
        <div className="form-container">
          <div className="form-box">
            <br></br><br></br>
            <center>
              <img src={men} alt="Employee Icon" className="crud-icons" />
              <p className="text-white">Enter Employee ID to Update</p>
              <form onSubmit={validateEmployeeSubmit}>
                <div className="form-input">
                  <span><i className="fa fa-user"></i></span>
                  <input
                    type="text"
                    name="empid"
                    placeholder="Employee ID"
                    value={empid}
                    onChange={(e) => setEmpid(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: "crimson" }}>
                  SEARCH
                </button>
              </form>
            </center>
            {(
              <form onSubmit={handleSubmit}>
                <center>
                  <p className="crud-heading"><b>Employee Details</b></p>
                  {['name', 'email', 'password', 'gender', 'phone', 'city', 'country'].map((field, index) => (
                    <div className="form-input" key={index}>
                      <span><i className={`fa fa-${field === 'email' ? 'envelope' : field === 'password' ? 'lock' : field === 'phone' ? 'phone' : field === 'city' ? 'home' : field === 'country' ? 'globe' : 'user'}`}></i></span>
                      <input
                        type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required
                        style={{ pointerEvents: isEditable ? 'auto' : 'none', backgroundColor: isEditable ? '' : 'lightGrey' }}
                      />
                    </div>
                  ))}
                </center>
                {isEditable && <Social button={"UPDATE"} />}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
