import React from "react";

export default () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="messagePost">Добавить изображение</label>

                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile02"
                        />
                        <label
                            class="custom-file-label"
                            for="inputGroupFile02"
                            aria-describedby="inputGroupFileAddon02"
                        >
                            Choose file
                        </label>
                    </div>
                    <div class="input-group-append">
                        <span
                            class="input-group-text"
                            id="inputGroupFileAddon02"
                        >
                            Upload
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
