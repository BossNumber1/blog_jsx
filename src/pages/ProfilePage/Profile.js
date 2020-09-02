import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import s from "./profile.module.css";
import "materialize-css";
import PostMen from "../PostMen";

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

    return (
        <div className="container pt-4">
            <img src={fileImg} className={s.ava} alt="аватарка" />

            <div className={s.posts}>
                <PostMen />
            </div>

            <div className={s.info}>
                <div className={s.block}>
                    <div className={s.icon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <i className="material-icons brown-text">
                                    account_circle
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className={s.text}>
                        {firstName} {secondName}
                    </div>
                </div>
                {/* ---------------------------- */}
                <div className={s.block}>
                    <div className={s.icon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <i className="material-icons brown-text">
                                    cake
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className={s.text}>{age} лет</div>
                </div>
                {/* ---------------------------- */}
                <div className={s.block}>
                    <div className={s.icon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <i className="material-icons brown-text">
                                    public
                                </i>
                            </li>
                        </ul>
                    </div>
                    <div className={s.text}>{country}</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, null)(Profile);
