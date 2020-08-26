import React from "react";

export default (props) => {
    // export default ({ value, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Ваше имя</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={props.value}
                    name="name"
                    // onChange={(e) => console.log(e)}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};
