import React from "react";
import { NavLink } from "react-router-dom";
import s from "./settings.module.css";
import { Alert } from "../../components/Alert";
import InputFirstName from "../../components/Profile/InputFirstName";
import InputSecondName from "../../components/Profile/InputSecondName";
import InputDownloadImg from "../../general/downloadImg/InputDownloadImg";
import InputAge from "../../components/Profile/InputAge";
import InputCountry from "../../components/Profile/InputCountry";

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
                <form onSubmit={submitHandler} className="pb-5">
                    {alert && <Alert text={alert} />}

                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <InputFirstName
                                    value={firstNameState}
                                    onChange={changeInputHandler}
                                />
                                <InputSecondName
                                    value={secondNameState}
                                    onChange={changeInputHandler}
                                />
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <InputAge
                                    value={ageState}
                                    onChange={changeInputHandler}
                                />
                                <InputCountry
                                    value={countryState}
                                    onChange={changeInputHandler}
                                />
                            </div>
                        </form>
                    </div>

                    <InputDownloadImg
                        title="Аватарка"
                        onChange={functionDownloadImg}
                        successSelectFile={successSelectFile}
                    />

                    <div className={s.button}>
                        <button className="btn btn-warning mr-4" type="submit">
                            Обновить
                        </button>
                    </div>
                </form>
            </div>

            <div className={s.result}>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image mx-auto d-block pt-3">
                                {fileImg ? (
                                    <div className={s.ava}>
                                        <img src={fileImg} alt="аватарка" />
                                    </div>
                                ) : (
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMyJn14ZEFjpLLMuEXcoz-YmbrtUyTvS7kFw&usqp=CAU"
                                        alt="аватарка"
                                    />
                                )}
                            </div>
                            <div className="card-content">
                                {firstName && secondName && age && country ? (
                                    <p>
                                        {firstName} {secondName}, {age} лет,{" "}
                                        {country}
                                    </p>
                                ) : (
                                    <p>Иван Иванов, 120 лет, London</p>
                                )}
                            </div>
                            <div className="card-action">
                                <NavLink to="/profile">
                                    Перейти в профиль
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
