import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../../redux/actions";
import { Alert } from "../Alert";
import { timer } from "../time";
import InputTitle from "./InputTitle";
import InputMessage from "./InputMessage";
import InputDownloadImg from "./InputDownloadImg";
// import "./PostForm.css";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            messagePost: "",
            successSelectFile: "",
            fileImg: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { title, messagePost, successSelectFile, fileImg } = this.state;

        if (!title.trim() || !messagePost.trim() || !successSelectFile.trim()) {
            return this.props.showAlert("Все поля должны быть заполнены");
        }

        const newPost = {
            title,
            messagePost,
            time: timer(),
            successSelectFile,
            fileImg,
            id: Date.now().toString(),
        };

        this.props.createPost(newPost);
        this.setState({ title: "", messagePost: "", successSelectFile: "" });
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

    successDownloadImgHandler = (e) => {
        e.persist();

        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        async function Main() {
            const file = e.target.files[0];
            return await toBase64(file);
        }

        Main()
            .then((result) => {
                this.setState((prev) => ({
                    ...prev,
                    ...{
                        successSelectFile: e.target.files[0].name,
                        fileImg: result,
                    },
                }));
            })
            .catch(console.log);
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

                <InputDownloadImg
                    onChange={this.successDownloadImgHandler}
                    successSelectFile={this.state.successSelectFile}
                />

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
