import React from "react";

export default () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                />
            </div>
        </div>
    );
};
