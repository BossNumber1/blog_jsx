import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../../redux/actions";
import { Alert } from "../Alert";
import { timer } from "../time";
import InputTitle from "./InputTitle";
import InputMessage from "./InputMessage";
import InputDownloadImg from "./InputDownloadImg";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", messagePost: "" };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { title, messagePost } = this.state;

        if (!title.trim() || !messagePost.trim()) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newPost = {
            title,
            messagePost,
            id: Date.now().toString(),
            time: timer(),
        };

        this.props.createPost(newPost);
        this.setState({ title: "", messagePost: "" });
    };

    changeInputHandler = (e) => {
        e.persist();
        this.setState((prev) => ({
            ...prev,
            ...{ [e.target.name]: e.target.value },
        }));
    };

    changeMessagePostHandler = (e) => {
        e.persist();
        this.setState((prev) => ({
            ...prev,
            ...{ [e.target.name]: e.target.value },
        }));
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}

                <InputTitle
                    value={this.state.title}
                    onChange={this.changeInputHandler}
                />

                <InputMessage
                    value={this.state.messagePost}
                    onChange={this.changeMessagePostHandler}
                />

                <InputDownloadImg />

                <button className="btn btn-success" type="submit">
                    Создать
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert,
};

const mapStateToProps = (state) => ({
    alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
