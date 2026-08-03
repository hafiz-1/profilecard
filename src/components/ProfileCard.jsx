import "./ProfileCard.css";
import { useState } from "react";

function ProfileCard(props) {

    const [likes, setLikes] = useState(0);

    const [following, setFollowing] = useState(false);

    const [followers, setFollowers] = useState(props.followers);

    function handleFollow() {

        if (following) {

            setFollowing(false);

            setFollowers(followers - 1);

        }

        else {

            setFollowing(true);

            setFollowers(followers + 1);

        }

    }

    function handleLike() {

        setLikes(likes + 1);

    }

    return (

        <div className="card">

            <img
                src={props.image}
                alt="Profile"
                className="profile-image"
            />

            <h2 className="name">
                {props.name}
            </h2>

            <p className="role">
                {props.role}
            </p>

            <p className="bio">
                {props.bio}
            </p>

            <div className="stats">

                <p>

                    Followers :
                    <span>{followers}</span>

                </p>

                <p>

                    ❤️ Likes :
                    <span>{likes}</span>

                </p>

            </div>

            <div className="buttons">

                <button
                    className="follow-btn"
                    onClick={handleFollow}
                >

                    {following ? "Following" : "Follow"}

                </button>

                <button
                    className="like-btn"
                    onClick={handleLike}
                >

                    Like ❤️

                </button>

            </div>

        </div>

    );

}

export default ProfileCard;