import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../../redux/actions";
import { Alert } from "../Alert";
import { timer } from "../time";
// import InputTitle from "./InputTitle";
// import InputDownloadImg from "./InputDownloadImg";
// import InputMessage from "./InputMessage";

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

                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                />

                <label htmlFor="messagePost">Сообщение поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="messagePost"
                    value={this.state.messagePost}
                    name="messagePost"
                    onChange={this.changeMessagePostHandler}
                />

                {/* <InputTitle />
                <InputMessage />
                <InputDownloadImg /> */}

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
