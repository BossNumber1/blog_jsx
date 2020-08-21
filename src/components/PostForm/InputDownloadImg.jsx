import React from "react";

export default () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="messagePost">Добавить изображение</label>

                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile02"
                        />
                        <label
                            className="custom-file-label"
                            for="inputGroupFile02"
                            aria-describedby="inputGroupFileAddon02"
                        >
                            Выбери файл
                        </label>
                    </div>
                    <div className="input-group-append">
                        <span
                            className="input-group-text"
                            id="inputGroupFileAddon02"
                        >
                            Загрузить
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
