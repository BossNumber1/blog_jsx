import React from "react";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../redux/actions";
import { Alert } from "../components/Alert";
import InputName from "../components/Profile/InputName";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { name } = this.state;

        if (!name.trim()) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newDataUser = {
            name,
        };

        this.props.upgradeProfile(newDataUser);
        this.setState({ name: "" });
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
        let firstname;
        let propsFirstname = this.props.firstname;

        if (propsFirstname.length !== 0) {
            firstname = this.props.firstname[0].name;
        }

        return (
            <div className="container pt-4">
                <form onSubmit={this.submitHandler}>
                    {this.props.alert && <Alert text={this.props.alert} />}

                    <InputName
                        value={this.state.name}
                        onChange={this.changeInputHandler}
                    />

                    <button className="btn btn-warning" type="submit">
                        Обновить
                    </button>
                </form>

                {firstname && (
                    <div className="jumbotron jumbotron-fluid pt-3">
                        <div className="container">
                            <h1 className="display-4">Твои данные</h1>
                            <p className="lead">Имя - {firstname}</p>
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
    firstname: state.profile.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
