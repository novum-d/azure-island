import styled from "@emotion/styled";

type MainProps = {
  open: boolean;
  drawerWidth: number;
};

const Main = styled.div<MainProps>`
  ${(props) => !props.open && `margin-left: -${props.drawerWidth}rem`};
  transition: margin-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

export default Main;
