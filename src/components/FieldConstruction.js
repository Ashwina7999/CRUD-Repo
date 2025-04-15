import React from 'react'

function FieldConstruction({ fieldJson, fieldValue, handleFieldChange }) {
    return (
        <div>
            {fieldJson.map(({ type, name, placeholder, icon }, index) => (

                <div className="form-input" key={index}>
                    <span><i className={icon}></i></span>
                    <input type={type} name={name} placeholder={placeholder} value={fieldValue[name]} onChange={handleFieldChange} style={fieldJson.style} required />
                </div>

            ))}
        </div>
    )
}

export default FieldConstruction
