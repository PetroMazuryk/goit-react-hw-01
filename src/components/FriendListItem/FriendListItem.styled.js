import styled from "styled-components";

export const Container = styled.section`
  max-width: 160px;
  height: 200px;

  border: 1px solid black;
  padding: 8px;
  border-radius: 6px;

  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    box-shadow: 0 2.8px 2px red, 0 6.7px 4px blue, 0 12.5px 6px green,
      0 8px 17.9px purple, 0 4px 3px orange, 0 10px 8px teal;
  }
`;

export const Image = styled.img`
height: 420px
  display: block;
`;

export const FriendsName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 6px;
  text-align: center;
`;

export const FriendsStatus = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${(props) => (props.value ? "green" : "red")};
`;
