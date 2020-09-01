import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import s from "./profile.module.css";
import "materialize-css";
import PostMen from "../PostMen";

const Profile = (props) => {
    let firstName, secondName, age, fileImg;
    let propsProfileData = props.profileData;

    if (propsProfileData.length > 0) {
        firstName = propsProfileData[0].firstName;
        secondName = propsProfileData[0].secondName;
        age = propsProfileData[0].age;
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

    return (
        <div className="container pt-4">
            {firstName && secondName && age && fileImg && (
                <>
                    <img src={fileImg} className={s.ava} alt="аватарка" />
                    <div className={s.nameIcon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <i className="material-icons brown-text">
                                    face
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className={s.name}>
                        {firstName} {secondName}
                    </div>
                    <div className={s.posts}>
                        <PostMen />
                    </div>

                    <div className={s.ageIcon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <i className="material-icons brown-text">
                                    hourglass_empty
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className={s.age}>{age} лет</div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, null)(Profile);
