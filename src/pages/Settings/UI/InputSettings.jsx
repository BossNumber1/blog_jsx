import React from "react";

export default ({ icon, name, label, value, onChange }) => {
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">{icon}</i>
            <input
                className="validate"
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};
