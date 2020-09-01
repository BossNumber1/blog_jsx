import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../redux/actions";
import { Alert } from "../components/Alert";
import InputFirstName from "../components/Profile/InputFirstName";
import InputSecondName from "../components/Profile/InputSecondName";
import InputDownloadImg from "../general/downloadImg/InputDownloadImg";
import { successDownloadImgHandler } from "../general/downloadImg/successDownloadImgHandler";
import InputAge from "../components/Profile/InputAge";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            age: "",
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
            successSelectFile,
            fileImg,
        } = this.state;

        if (
            !firstName.trim() ||
            !secondName.trim() ||
            !successSelectFile.trim() ||
            !age.trim()
        ) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newDataUser = {
            firstName,
            secondName,
            age,
            successSelectFile,
            fileImg,
        };

        this.props.upgradeProfile(newDataUser);
        this.setState({
            firstName: "",
            secondName: "",
            age: "",
            successSelectFile: "",
        });
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
        let firstName, secondName, age, fileImg;
        let propsProfileData = this.props.profileData;

        if (propsProfileData.length > 0) {
            firstName = propsProfileData[0].firstName;
            secondName = propsProfileData[0].secondName;
            age = propsProfileData[0].age;
            fileImg = propsProfileData[0].fileImg;
        }

        return (
            <div className="container pt-4">
                <form onSubmit={this.submitHandler} className="pb-5">
                    {this.props.alert && <Alert text={this.props.alert} />}

                    <InputFirstName
                        value={this.state.firstName}
                        onChange={this.changeInputHandler}
                    />

                    <InputSecondName
                        value={this.state.secondName}
                        onChange={this.changeInputHandler}
                    />

                    <InputAge
                        value={this.state.age}
                        onChange={this.changeInputHandler}
                    />

                    <InputDownloadImg
                        title="Аватарка"
                        onChange={this.functionDownloadImg}
                        successSelectFile={this.state.successSelectFile}
                    />

                    <button className="btn btn-warning" type="submit">
                        Обновить
                    </button>
                </form>

                {firstName && secondName && age && fileImg && (
                    <div className="jumbotron jumbotron-fluid pt-3">
                        <div className="container">
                            <NavLink to="/profile">Перейти в профиль</NavLink>

                            <h1 className="display-4">Твои данные</h1>
                            <p className="lead">
                                {firstName} {secondName}, {age} лет
                            </p>
                            <img
                                src={fileImg}
                                className="card-img-top"
                                alt="аватарка"
                            />
                        </div>
                    </div>
                )}
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
