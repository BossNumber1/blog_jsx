import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
    render() {
        let firstName, secondName, fileImg;
        let propsProfileData = this.props.profileData;

        if (propsProfileData.length > 0) {
            firstName = propsProfileData[0].firstName;
            secondName = propsProfileData[0].secondName;
            fileImg = propsProfileData[0].fileImg;
        }

        return (
            <div className="container pt-4">
                <h4>Профиль</h4>

                {firstName && secondName && fileImg && (
                    <div className="jumbotron jumbotron-fluid pt-3">
                        <div className="container">
                            <h1 className="display-4">Твои данные</h1>
                            <p className="lead">
                                {firstName} {secondName}
                            </p>
                            <img
                                src={fileImg}
                                className="card-img-top"
                                alt="аватарка"
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profileData: state.profile.profile,
});

export default connect(mapStateToProps, null)(Profile);
