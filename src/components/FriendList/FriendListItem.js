import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendListItem = (props) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ color: props.getStatusColor(props.isOnline) }}
      >
        {" "}
      </span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  getStatusColor: PropTypes.func.isRequired,
};
