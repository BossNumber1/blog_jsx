import React from "react";
import { connect } from "react-redux";
import { upgradeProfile, showAlert } from "../redux/actions";
import { Alert } from "../components/Alert";
import ProfilePage from "../components/Profile/ProfilePage";

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
        // debugger;
        e.persist();

        this.setState((prev) => ({
            ...prev,
            ...{ [e.target.name]: e.target.value },
        }));

        console.log("aeee", e.target.value, " / a = ", e.target.name);
        console.log("fff", this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    {this.props.alert && <Alert text={this.props.alert} />}

                    <ProfilePage
                        value={this.state.name}
                        onChange={this.changeInputHandler}
                    />

                    <button className="btn btn-warning" type="submit">
                        Обновить
                    </button>
                </form>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
