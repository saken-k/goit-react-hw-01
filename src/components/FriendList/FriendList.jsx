import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li className={css.friendsItem} key={friend.id}>
          <img src={friend.avatar} alt={friend.name} width={48} />
          <p className={css.friendName}>{friend.name}</p>
          <p className={clsx(css.friendStatus, friend.isOnline && css.online)}>
            {friend.isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
