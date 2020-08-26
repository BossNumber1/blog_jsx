import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

// class ProfilePage extends React.Component {
//     componentDidUpdate() {
//         const mapStateToProps = (state) => {
//             return {
//                 profileData: state.profile.profile,
//             };
//         };
//     }

//     render() {
//         return (
//             <Profile
//                 value={this.props.value}
//                 onChange={this.props.onChange}
//                 profileData={this.props.profileData}
//             />
//         );
//     }
// }

const ProfilePage = (props) => {
    return (
        <Profile
            value={props.value}
            onChange={props.onChange}
            profileData={props.profileData}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profileData: state.profile.profile,
    };
};

export default connect(mapStateToProps, null)(ProfilePage);
