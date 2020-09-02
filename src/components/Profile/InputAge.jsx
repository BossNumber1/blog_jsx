import React from "react";

export default (props) => {
    return (
        // <div className="form-group pb-1">
        //     <label htmlFor="title">Возраст</label>
        //     <input
        //         type="text"
        //         className="form-control"
        //         id="age"
        //         value={props.value}
        //         name="age"
        //         onChange={props.onChange}
        //     />
        // </div>

        <div className="input-field col s6">
            <i className="material-icons prefix">cake</i>
            <input
                id="age"
                type="text"
                className="validate"
                name="age"
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor="icon_prefix">Возраст</label>
        </div>
    );
};
