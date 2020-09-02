import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
                id="firstName"
                type="text"
                className="validate"
                name="firstName"
                value={value}
                onChange={onChange}
            />
            <label htmlFor="icon_prefix">Имя</label>
        </div>
    );
};
