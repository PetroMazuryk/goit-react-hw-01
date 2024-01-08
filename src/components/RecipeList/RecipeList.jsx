import PropTypes from "prop-types";

import { List, ListItem } from "./RecipeList.styled";

import { FriendsList } from "../FriendList/FriendList";

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItem key={item.id}>
            <FriendsList item={item} />
          </ListItem>
        );
      })}
    </List>
  );
};
RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
