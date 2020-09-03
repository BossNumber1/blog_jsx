import React from "react";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../../redux/actions";
import { successDownloadImgHandler } from "../../general/downloadImg/successDownloadImgHandler";
import SettingsUI from "./SettingsUI";

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
            <SettingsUI
                alert={this.props.alert}
                submitHandler={this.submitHandler}
                firstNameState={this.state.firstName}
                secondNameState={this.state.secondName}
                changeInputHandler={this.changeInputHandler}
                ageState={this.state.age}
                countryState={this.state.country}
                functionDownloadImg={this.functionDownloadImg}
                successSelectFile={this.state.successSelectFile}
                fileImg={fileImg}
                firstName={firstName}
                secondName={secondName}
                age={age}
                country={country}
            />
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
