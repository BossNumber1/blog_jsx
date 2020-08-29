import React from "react";

export default (props) => {
    return (
        <div className="form-group pb-1">
            <label htmlFor="title">Фамилия</label>
            <input
                type="text"
                className="form-control"
                id="secondName"
                value={props.value}
                name="secondName"
                onChange={props.onChange}
            />
        </div>
    );
};
