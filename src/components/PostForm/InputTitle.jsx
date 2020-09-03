import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea
                            id="title"
                            className="materialize-textarea"
                            name="title"
                            onChange={onChange}
                            value={value}
                        ></textarea>
                        <label htmlFor="title">Заголовок</label>
                    </div>
                </div>
            </form>
        </div>
    );
};
