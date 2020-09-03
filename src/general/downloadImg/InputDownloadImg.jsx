import React from "react";
import "../../components/PostForm/PostForm.css";

export default ({ title, onChange, successSelectFile }) => {
    return (
        <div className="file-field input-field">
            <div className="btn">
                <span>{title}</span>
                <input
                    id="ava"
                    alt="ava"
                    type="file"
                    onChange={onChange}
                    className="custom-file-input"
                />
            </div>
            <div className="file-path-wrapper">
                <input
                    className="file-path validate"
                    type="text"
                    value={successSelectFile}
                />
            </div>
        </div>
    );
};
