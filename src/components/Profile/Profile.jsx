import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img
          className={css.image}
          src={image}
          alt={name}
          width={140}
          height={140}
        />
        <p className={css.infoName}>{name}</p>
        <p className={css.infoTag}>@{tag}</p>
        <p className={css.infoLocation}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
