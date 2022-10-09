import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Card, Typography, CardContent } from "@mui/material";
import { cs } from "../../components/common/commonStyles";
import { Form } from "../../components/Login/Form";
import { styles } from "./Login.styles";

const Login = () => (
  <Box>
    <Card variant="outlined" css={[styles.container]}>
      <CardContent>
        <Avatar css={styles.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" css={[styles.title, cs.inlineCenter]}>
          Azure Island へのログイン
        </Typography>
        <Typography component="p" variant="inherit" css={[styles.description, cs.inlineCenter]}>
          <span css={cs.br}>学校で指定されたアカウントでログインして、 </span>
          Azure Islandのサービスを利用しましょう。
        </Typography>
        <Form />
      </CardContent>
    </Card>
  </Box>
);
export default Login;
