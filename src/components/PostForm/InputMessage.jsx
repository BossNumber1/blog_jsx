import React from "react";

export default ({ value, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="messagePost">Текст</label>
                <input
                    type="text"
                    className="form-control"
                    id="messagePost"
                    value={value}
                    name="messagePost"
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
