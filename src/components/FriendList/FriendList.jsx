import PropTypes from "prop-types";

import { Container, Image, FriendsName } from "./FriendList.styled";

export const FriendsList = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Container status={isOnline}>
      <Image src={avatar} alt={name} />

      <FriendsName>{name}</FriendsName>
      
    </Container>
  );
};

FriendsList.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
