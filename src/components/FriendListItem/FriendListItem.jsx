import PropTypes from "prop-types";

import {
  Container,
  Image,
  FriendsName,
  FriendsStatus,
} from "./FriendlistItem.styled";

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Container>
      <Image src={avatar} alt={name} />

      <FriendsName>{name}</FriendsName>

      <FriendsStatus value={isOnline}>
        {isOnline ? "Online" : "Offline"}
      </FriendsStatus>
    </Container>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
