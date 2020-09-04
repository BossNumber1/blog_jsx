import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import s from "./profile.module.css";
import "materialize-css";
import PostMen from "../PostMen";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    let firstName, secondName, age, country, fileImg;
    let propsProfileData = props.profileData;

    if (propsProfileData.length > 0) {
        firstName = propsProfileData[0].firstName;
        secondName = propsProfileData[0].secondName;
        age = propsProfileData[0].age;
        country = propsProfileData[0].country;
        fileImg = propsProfileData[0].fileImg;
    } else {
        return (
            <div className="container pt-5">
                <div className="card text-center">
                    <div className="card-header">Внимание</div>
                    <div className="card-body">
                        <h5 className="card-title">Профиль пуст</h5>
                        <p className="card-text">
                            Лишь заполнив его, можно получить новые
                            возможности...
                        </p>

                        <NavLink to="/settings" className="btn btn-primary">
                            начать
                        </NavLink>
                    </div>
                    <div className="card-footer text-muted">Удачи!</div>
                </div>
            </div>
        );
    }

    let infoData = [
        { id: 0, icon: "account_circle", text: `${firstName} ${secondName}` },
        { id: 1, icon: "cake", text: `${age} лет` },
        { id: 2, icon: "public", text: `${country}` },
    ];

    let infoElements = infoData.map((i) => (
        <ProfileInfo key={i.id} icon={i.icon} text={i.text} />
    ));

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <img src={fileImg} className={s.ava} alt="аватарка" />

                <div className={s.posts}>
                    <PostMen />
                </div>

                <div className={s.info}>{infoElements}</div>
            </div>
            <div className={s.additional}>
                <h5>Сегодня 04.09</h5>
                <h6>Облачно</h6>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, null)(Profile);
