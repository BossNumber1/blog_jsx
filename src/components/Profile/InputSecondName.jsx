import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">account_box</i>
            <input
                className="validate"
                id="secondName"
                type="text"
                name="secondName"
                value={value}
                onChange={onChange}
            />
            <label htmlFor="icon_telephone">Фамилия</label>
        </div>
    );
};
