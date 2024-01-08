import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ListItem = styled.li`
  width: 140px;
  &:not(:last-child) {
    margin-bottom: 17px;
  }
`;
