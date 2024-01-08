import PropTypes from "prop-types";

import { List, ListItem } from "./FriendList.styled";

import { FriendListItem } from "../FriendlistItem/FriendlistItem";

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map((item) => {
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
