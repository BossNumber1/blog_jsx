import React from "react";
import InputsMap from "./InputsMap";
import s from "../settings.module.css";
import { Alert } from "../../../components/Alert";
import InputDownloadImg from "../../../general/downloadImg/InputDownloadImg";

export default ({
    alert,
    submitHandler,
    firstNameState,
    secondNameState,
    changeInputHandler,
    ageState,
    countryState,
    functionDownloadImg,
    successSelectFile,
}) => {
    return (
        <div className="pb-5">
            {alert && <Alert text={alert} />}

            <InputsMap
                firstNameState={firstNameState}
                secondNameState={secondNameState}
                ageState={ageState}
                countryState={countryState}
                changeInputHandler={changeInputHandler}
            />

            <InputDownloadImg
                title="Аватарка"
                onChange={functionDownloadImg}
                successSelectFile={successSelectFile}
            />

            <div className={s.button}>
                <button
                    className="btn btn-warning mr-4"
                    type="submit"
                    onClick={submitHandler}
                >
                    Обновить
                </button>
            </div>
        </div>
    );
};
