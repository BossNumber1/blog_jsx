import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../../redux/actions";
import { Alert } from "../Alert";
import { timer } from "../time";
import InputDownloadImg from "../../general/downloadImg/InputDownloadImg";
import { successDownloadImgHandler } from "../../general/downloadImg/successDownloadImgHandler";
import s from "./postform.module.css";
import InputPost from "./InputPost";

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

    functionDownloadImg = (e) => {
        successDownloadImgHandler(e, (res) =>
            this.setState((prev) => ({
                ...prev,
                ...res,
            }))
        );
    };

    render() {
        let inputData = [
            {
                id: 0,
                icon: "mode_edit",
                name: "title",
                label: "Заголовок",
                value: this.state.title,
            },
            {
                id: 1,
                icon: "keyboard",
                name: "messagePost",
                label: "Текст",
                value: this.state.messagePost,
            },
        ];

        let inputElements = inputData.map((i) => (
            <InputPost
                icon={i.icon}
                name={i.name}
                label={i.label}
                value={i.value}
                onChange={this.changeInputHandler}
            />
        ));

        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}

                {inputElements}

                <div className="pt-3">
                    <InputDownloadImg
                        title="Картинка"
                        onChange={this.functionDownloadImg}
                        successSelectFile={this.state.successSelectFile}
                    />
                </div>

                <div className={s.button}>
                    <button className="btn btn-success" type="submit">
                        Создать
                    </button>
                </div>
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
