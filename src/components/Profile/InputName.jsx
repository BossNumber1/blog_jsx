import React from "react";

export default (props) => {
    return (
        <div className="form-group pb-1">
            <label htmlFor="title">Ваше имя</label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={props.value}
                name="name"
                onChange={props.onChange}
            />
        </div>
    );
};
