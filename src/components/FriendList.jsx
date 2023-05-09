import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from 'components/FriendList.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={clsx(css["friend-list"])}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <li className={clsx(css["item"])} key={id}>
                        <span className={clsx(css["status"])}
                            style={{backgroundColor:getStatusColor(isOnline)}}
                        >{isOnline}</span>
                        <img className={clsx(css["avatar"])} src={avatar} alt="User avatar" width="48" />
                        <p className={clsx(css["name"])}>{name}</p>
                    </li>
                )
            }
            )}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}


function getStatusColor (isOnline) {
    if (isOnline) {
        return "green";
    } else return "red"; 
};
