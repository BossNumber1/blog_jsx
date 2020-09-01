import React from "react";

export default (props) => {
    return (
        <div className="form-group pb-1">
            <label htmlFor="title">Возраст</label>
            <input
                type="text"
                className="form-control"
                id="age"
                value={props.value}
                name="age"
                onChange={props.onChange}
            />
        </div>
    );
};
