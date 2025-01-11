import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.friendItem}>
      <img src={avatar} alt={name} width={48} className={css.avatar} />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, isOnline && css.online)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
