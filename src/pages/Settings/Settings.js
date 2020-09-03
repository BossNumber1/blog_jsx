import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../../redux/actions";
import { Alert } from "../../components/Alert";
import InputFirstName from "../../components/Profile/InputFirstName";
import InputSecondName from "../../components/Profile/InputSecondName";
import InputDownloadImg from "../../general/downloadImg/InputDownloadImg";
import { successDownloadImgHandler } from "../../general/downloadImg/successDownloadImgHandler";
import InputAge from "../../components/Profile/InputAge";
import s from "./settings.module.css";
import InputCountry from "../../components/Profile/InputCountry";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            age: "",
            country: "",
            successSelectFile: "",
            fileImg: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {
            firstName,
            secondName,
            age,
            country,
            successSelectFile,
            fileImg,
        } = this.state;

        if (
            !firstName.trim() ||
            !secondName.trim() ||
            !successSelectFile.trim() ||
            !age.trim() ||
            !country.trim()
        ) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newDataUser = {
            firstName,
            secondName,
            age,
            country,
            successSelectFile,
            fileImg,
        };

        this.props.upgradeProfile(newDataUser);
    };

    changeInputHandler = (e) => {
        e.persist();

        this.setState((prev) => ({
            ...prev,
            ...{ [e.target.name]: e.target.value },
        }));
    };

    functionDownloadImg = (e) => {
        successDownloadImgHandler(e, (res) =>
            this.setState((prev) => ({
                ...prev,
                ...res,
            }))
        );
    };

    render() {
        let firstName, secondName, age, country, fileImg;
        let propsProfileData = this.props.profileData;

        if (propsProfileData.length > 0) {
            firstName = propsProfileData[0].firstName;
            secondName = propsProfileData[0].secondName;
            age = propsProfileData[0].age;
            country = propsProfileData[0].country;
            fileImg = propsProfileData[0].fileImg;
        }

        return (
            <div className={s.wrapper}>
                <div className={s.anketa}>
                    <form onSubmit={this.submitHandler} className="pb-5">
                        {this.props.alert && <Alert text={this.props.alert} />}

                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <InputFirstName
                                        value={this.state.firstName}
                                        onChange={this.changeInputHandler}
                                    />
                                    <InputSecondName
                                        value={this.state.secondName}
                                        onChange={this.changeInputHandler}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <InputAge
                                        value={this.state.age}
                                        onChange={this.changeInputHandler}
                                    />
                                    <InputCountry
                                        value={this.state.country}
                                        onChange={this.changeInputHandler}
                                    />
                                </div>
                            </form>
                        </div>

                        <InputDownloadImg
                            title="Аватарка"
                            onChange={this.functionDownloadImg}
                            successSelectFile={this.state.successSelectFile}
                        />

                        <div className={s.button}>
                            <button
                                className="btn btn-warning mr-4"
                                type="submit"
                            >
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
                                        <img src={fileImg} alt="аватарка" />
                                    ) : (
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMyJn14ZEFjpLLMuEXcoz-YmbrtUyTvS7kFw&usqp=CAU"
                                            alt="аватарка"
                                        />
                                    )}
                                </div>
                                <div className="card-content">
                                    {firstName &&
                                    secondName &&
                                    age &&
                                    country ? (
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
    }
}

const mapDispatchToProps = {
    upgradeProfile,
    showAlert,
};

const mapStateToProps = (state) => ({
    alert: state.app.alert,
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
