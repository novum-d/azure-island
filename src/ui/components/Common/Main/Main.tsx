import styled from "@emotion/styled";

type MainProps = {
  open: boolean;
  drawerWidth: number;
};

export const Main = styled.div<MainProps>`
  width: 100%;
  ${(props) => !props.open && `margin-left: -${props.drawerWidth}rem`};
  transition: margin-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;
