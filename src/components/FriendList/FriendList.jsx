import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
