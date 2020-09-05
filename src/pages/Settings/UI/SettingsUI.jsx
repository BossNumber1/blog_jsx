import React from "react";
import s from "../settings.module.css";
import Anketa from "./Anketa";
import Result from "./Result";

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
    fileImg,
    firstName,
    secondName,
    age,
    country,
}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.anketa}>
                <Anketa
                    alert={alert}
                    submitHandler={submitHandler}
                    firstNameState={firstNameState}
                    secondNameState={secondNameState}
                    changeInputHandler={changeInputHandler}
                    ageState={ageState}
                    countryState={countryState}
                    functionDownloadImg={functionDownloadImg}
                    successSelectFile={successSelectFile}
                />
            </div>

            <div className={s.result}>
                <Result
                    fileImg={fileImg}
                    firstName={firstName}
                    secondName={secondName}
                    age={age}
                    country={country}
                />
            </div>
        </div>
    );
};
