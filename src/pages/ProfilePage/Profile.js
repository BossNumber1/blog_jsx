import React from "react";
import { connect } from "react-redux";
import s from "./profile.module.css";
import "materialize-css";

const Profile = (props) => {
    let firstName, secondName, fileImg;
    let propsProfileData = props.profileData;

    if (propsProfileData.length > 0) {
        firstName = propsProfileData[0].firstName;
        secondName = propsProfileData[0].secondName;
        fileImg = propsProfileData[0].fileImg;
    } else {
        return (
            <div className="container pt-4">
                <h4>Профиль</h4>
                Нужно перейти <a href="/settings">в настройки</a> и заполнить
                его
            </div>
        );
    }

    return (
        <div className="container pt-4">
            <h4>Профиль</h4>

            {firstName && secondName && fileImg && (
                <>
                    <img src={fileImg} className={s.ava} alt="аватарка" />

                    <div className={s.infoIcon}>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <a href="/#">
                                    <i className="material-icons">face</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.info}>
                        {firstName} {secondName}
                    </div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, null)(Profile);
