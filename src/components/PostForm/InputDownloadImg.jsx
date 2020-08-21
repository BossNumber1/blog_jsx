import React from "react";
import "./PostForm.css";

export default ({ onChange, successSelectFile }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="messagePost">Добавить изображение</label>

                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={onChange}
                        />
                        <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                        >
                            {successSelectFile
                                ? successSelectFile
                                : "Выберите файл"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
