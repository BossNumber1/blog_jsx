import React from "react";

export default ({ icon, name, label, value, onChange }) => {
    return (
        <div className="row mb-n5">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">{icon}</i>
                        <textarea
                            id={name}
                            className="materialize-textarea"
                            name={name}
                            onChange={onChange}
                            value={value}
                        ></textarea>
                        <label htmlFor={name}>{label}</label>
                    </div>
                </div>
            </form>
        </div>
    );
};
