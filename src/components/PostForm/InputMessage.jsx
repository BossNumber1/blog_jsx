import React from "react";

export default () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="messagePost">Сообщение поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="messagePost"
                    value={this.state.messagePost}
                    name="messagePost"
                    onChange={this.changeMessagePostHandler}
                />
            </div>
        </div>
    );
};
