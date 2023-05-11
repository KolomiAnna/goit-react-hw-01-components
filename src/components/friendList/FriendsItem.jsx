import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from 'components/friendList/FriendList.module.css';


export default function FriendsItem({ avatar, name, isOnline, id}) {
    
    console.log(id);
    return <li key={id} className={clsx(css["item"])}>
        <span className={clsx(css["status"])}
            style={{ backgroundColor: getStatusColor(isOnline) }}
        >{isOnline}</span>
        <img className={clsx(css["avatar"])} src={avatar} alt="User avatar" width="48" />
        <p className={clsx(css["name"])}>{name}</p>
    </li>;
}

function getStatusColor(isOnline) {
    if (isOnline) {
        return "green";
    } else return "red";
};


FriendsItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

