import clsx from "clsx";
import PropTypes from 'prop-types';

import css from "components/Profile.module.css";

export default function Profile(props) {
    const { username, tag, location, avatar, stats } = props;
    return <div className={clsx(css["profile"])}>
        <div className={clsx(css["description"])}>
            <img
                src={avatar}
                alt="User avatar"
                className={clsx(css["avatar"])}
            />
            <p className={clsx(css["name"])}>{username}</p>
            <p className={clsx(css["tag"])}>@{tag}</p>
            <p className={clsx(css["location"])}>{location}</p>
        </div>

        <ul className={clsx(css["stats"])}>
            <li>
                <span className={clsx(css["label"])}>Followers</span>
                <span className={clsx(css["quantity"])}
                >{stats.followers}</span>
            </li>
            <li>
                <span className={clsx(css["label"])}>Views</span>
                <span className={clsx(css["quantity"])}
                >{stats.views}</span>
            </li>
            <li>
                <span className={clsx(css["label"])}>Likes</span>
                <span className={clsx(css["quantity"])}
                >{stats.likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
}