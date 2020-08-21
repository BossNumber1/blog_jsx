import React from "react";

export default ({ value, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={value}
                    name="title"
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
