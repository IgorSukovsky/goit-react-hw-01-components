import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.js";
import PropTypes from "prop-types";

function getStatusColor(status) {
  if (status) {
    return "#313834";
  } else {
    return "#E74C3C";
  }
}

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendlist}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            getStatusColor={getStatusColor}
            {...friend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
