import PropTypes from "prop-types";

import { List, ListItem } from "./FriendList.styled";

import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((item) => {
        return (
          <ListItem key={item.id}>
            <FriendListItem item={item} />
          </ListItem>
        );
      })}
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
