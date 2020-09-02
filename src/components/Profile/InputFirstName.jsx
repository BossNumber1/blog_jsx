import React from "react";

export default (props) => {
    return (
        // <div className="form-group pb-1">
        //     <label htmlFor="title">Имя</label>
        //     <input
        //         type="text"
        //         className="form-control"
        //         id="firstName"
        //         value={props.value}
        //         name="firstName"
        //         onChange={props.onChange}
        //     />
        // </div>

        <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
                id="firstName"
                type="text"
                className="validate"
                name="firstName"
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor="icon_prefix">Имя</label>
        </div>
    );
};
