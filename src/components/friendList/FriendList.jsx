import clsx from 'clsx';

import css from 'components/friendList/FriendList.module.css';
import FriendsItem from 'components/friendList/FriendsItem';

export default function FriendList({friends}) {
    return (
        <ul className={clsx(css["friend-list"])}>
            {friends.map(({ avatar, name, isOnline, id}) => 
                <FriendsItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            )}
        </ul>
    )
}

