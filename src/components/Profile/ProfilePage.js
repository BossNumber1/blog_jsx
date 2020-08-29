import React from "react";
import Profile from "./Profile";

const ProfilePage = (props) => {
    return <Profile value={props.value} onChange={props.onChange} />;
};

export default ProfilePage;
