import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="ms-textAlignCenter">
                <div className="profile-image">
                    <img src="https://via.placeholder.com/150"></img>
                </div>
                <h2 className="ms-font-m-plus ms-fontSize-xl">Sharae Alexis Greer</h2>
                <hr/>
                <p className="ms-font-m-plus ms-fontSize-mPlus">Software Engineer. Healthcare. Futurist. New Yorker.</p>
                <hr/>
            </div>
        )
    }
}

export default Profile;