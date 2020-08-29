import React from "react";

export default (props) => {
    return (
        <div className="form-group pb-1">
            <label htmlFor="title">Имя</label>
            <input
                type="text"
                className="form-control"
                id="firstName"
                value={props.value}
                name="firstName"
                onChange={props.onChange}
            />
        </div>
    );
};
