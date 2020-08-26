import React from "react";
import InputName from "./InputName";
import "materialize-css";

const Profile = (props) => {
    const profileData = props.profileData;

    return (
        <div className="container">
            hey, {profileData.name}
            <InputName value={props.value} onChange={props.onChange} />
        </div>
    );
};

export default Profile;
