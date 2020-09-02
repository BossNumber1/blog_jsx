import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">cake</i>
            <input
                id="age"
                type="text"
                className="validate"
                name="age"
                value={value}
                onChange={onChange}
            />
            <label htmlFor="icon_prefix">Возраст</label>
        </div>
    );
};
