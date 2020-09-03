import React from "react";

export default ({ value, onChange }) => {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">keyboard</i>
                        <textarea
                            id="messagePost"
                            className="materialize-textarea"
                            name="messagePost"
                            onChange={onChange}
                            value={value}
                        ></textarea>
                        <label htmlFor="messagePost">Текст</label>
                    </div>
                </div>
            </form>
        </div>
    );
};
