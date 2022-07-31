import { Box, Toolbar, Typography } from "@mui/material";
import React, { useReducer } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import styles from "./styles";

function App() {
  const [open, setOpen] = useReducer((expand) => !expand, false);
  const drawerWidth = 13; // rem
  return (
    <Box css={styles.layout}>
      <Header setExpand={setOpen} />
      <Navbar drawerRem={drawerWidth} expand={open} />
      <Main open={open} drawerWidth={drawerWidth}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac. Consequat mauris nunc congue nisi vitae
          suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
          dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed odio
          morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec
          nam aliquam sem et tortor. Habitant morbi tristique senectus et.
          Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
          euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
          ultrices sagittis orci abody
        </Typography>
      </Main>
    </Box>
  );
}

export default App;
