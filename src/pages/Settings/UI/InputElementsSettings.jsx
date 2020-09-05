import React from "react";

export default ({ inputElementsSettings }) => {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">{inputElementsSettings}</div>
            </form>
        </div>
    );
};
