import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="input-field col s6">
            <i className="material-icons prefix">public</i>
            <input
                id="country"
                type="text"
                className="validate"
                name="country"
                value={value}
                onChange={onChange}
            />
            <label htmlFor="icon_prefix">Страна</label>
        </div>
    );
};
