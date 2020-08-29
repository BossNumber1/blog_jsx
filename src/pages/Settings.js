import React from "react";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../redux/actions";
import { Alert } from "../components/Alert";
import InputFirstName from "../components/Profile/InputFirstName";
import InputSecondName from "../components/Profile/InputSecondName";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { firstName, secondName } = this.state;

        if (!firstName.trim() || !secondName.trim()) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newDataUser = {
            firstName,
            secondName,
        };

        this.props.upgradeProfile(newDataUser);
        this.setState({ firstName: "", secondName: "" });
    };

    changeInputHandler = (e) => {
        e.persist();

        this.setState((prev) => ({
            ...prev,
            ...{ [e.target.name]: e.target.value },
        }));
    };

    render() {
        console.log("prop =", this.props);
        let firstName, secondName;
        let propsFirstName = this.props.firstName;
        let propsSecondName = this.props.secondName;

        if (propsFirstName.length !== 0) {
            firstName = this.props.firstName[0].firstName;
        }

        if (propsSecondName.length !== 0) {
            secondName = this.props.secondName[0].secondName;
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
    firstName: state.profile.profile,
    secondName: state.profile.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
