import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Card, Typography, CardContent } from "@mui/material";
import cs from "../../components/common/commonStyles";
import Form from "../../components/Login/Form";
import styles from "./Login.styles";

const Login = () => (
  <Box>
    <Card variant="outlined" css={[styles.container]}>
      <CardContent>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" css={cs.inlineCenter}>
          Azure Island へのログイン
        </Typography>
        <Typography component="p" variant="inherit" css={[cs.inlineCenter]}>
          学校で指定されたアカウントでログインして、
          <br />
          Azure Islandのサービスを利用しましょう。
        </Typography>
      </CardContent>
      <Form />
    </Card>
  </Box>
);
export default Login;
