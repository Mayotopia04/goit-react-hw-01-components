import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
    // const onlineStatus = isOnline ? css.online : css.offline;
    
    return (
        <div>
        <li className={css.friendListItem}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar}  src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
        </div>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};