import React from "react";

export default (props) => {
    return (
        // <div className="form-group pb-1">
        //     <label htmlFor="title">Фамилия</label>
        //     <input
        //         type="text"
        //         className="form-control"
        //         id="secondName"
        //         value={props.value}
        //         name="secondName"
        //         onChange={props.onChange}
        //     />
        // </div>

        <div className="input-field col s6">
            <i className="material-icons prefix">account_box</i>
            <input
                className="validate"
                id="secondName"
                type="text"
                name="secondName"
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor="icon_telephone">Фамилия</label>
        </div>
    );
};
