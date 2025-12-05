import React, { useEffect, useState } from 'react'

function Form({ fieldJson, pageName, fieldsPerRow = 1, prefilledData = {} }) {

  // Build initial empty values
  const initialValues = {};
  fieldJson.forEach(field => {
    initialValues[field.name] = "";
  });

  const [formData, setFormData] = useState(initialValues);

  // FIX: only update when prefilledData actually has content.
  useEffect(() => {
    if (prefilledData && Object.keys(prefilledData).length > 0) {
      setFormData(prev => ({
        ...prev,
        ...prefilledData
      }));
    }
  }, [prefilledData]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Split fields into rows
  const rows = [];
  for (let i = 0; i < fieldJson.length; i += fieldsPerRow) {
    rows.push(fieldJson.slice(i, i + fieldsPerRow));
  }

  const inputStyle = (editable) => ({
  pointerEvents: editable ? "auto" : "none",
  backgroundColor: editable ? "" : "lightgrey"
});

  return (
    <div>

      <center>

        <div className="common-form">
          {
            rows.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex", gap: "10px" }}>
                {row.map((field, index) => (
                  row.length === 2 ? (
                    <div className="form-input" key={index} style={{ flex: 1 }}>
                      <span><i className={field.icon}></i></span>
                      <input type={field.type} name={field.name} placeholder={field.placeholder} value={formData[field.name]} autoComplete={field.autoComplete} onChange={handleChange} style={inputStyle(field.isEditable)} required />
                    </div>
                  ) :

                    <div className="form-input" key={index} style={{ flex: 1 }}>
                      <span><i className={field.icon}></i></span>
                      <input className={["Create", "Update"].includes(pageName) ? "multi-row" : "single-row"} type={field.type} name={field.name} placeholder={field.placeholder} value={formData[field.name]} autoComplete={field.autoComplete} onChange={handleChange} style={inputStyle(field.isEditable)} required />
                    </div>
                ))}
              </div>
            ))}
        </div>

      </center>

    </div>
  )
}

export default Form