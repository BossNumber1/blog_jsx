import React from "react";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../redux/actions";
import { Alert } from "../components/Alert";
import InputFirstName from "../components/Profile/InputFirstName";
import InputSecondName from "../components/Profile/InputSecondName";
import InputDownloadImg from "../general/downloadImg/InputDownloadImg";
import { successDownloadImgHandler } from "../general/downloadImg/successDownloadImgHandler";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            successSelectFile: "",
            fileImg: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {
            firstName,
            secondName,
            successSelectFile,
            fileImg,
        } = this.state;

        if (
            !firstName.trim() ||
            !secondName.trim() ||
            !successSelectFile.trim()
        ) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newDataUser = {
            firstName,
            secondName,
            successSelectFile,
            fileImg,
        };

        this.props.upgradeProfile(newDataUser);
        this.setState({ firstName: "", secondName: "", successSelectFile: "" });
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
        let firstName, secondName, fileImg;

        let propsProfileData = this.props.profileData;

        if (propsProfileData.length > 0) {
            firstName = propsProfileData[0].firstName;
            secondName = propsProfileData[0].secondName;
            fileImg = propsProfileData[0].fileImg;
        }

        return (
            <div className="container pt-4">
                <h4>Настройки</h4>

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

                    <InputDownloadImg
                        onChange={this.functionDownloadImg}
                        successSelectFile={this.state.successSelectFile}
                    />

                    <button className="btn btn-warning" type="submit">
                        Обновить
                    </button>
                </form>
                {firstName && secondName && (
                    <div className="jumbotron jumbotron-fluid pt-3">
                        <div className="container">
                            <h1 className="display-4">Твои данные</h1>
                            <p className="lead">Имя - {firstName}</p>
                            <p className="lead">Фамилия - {secondName}</p>
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
