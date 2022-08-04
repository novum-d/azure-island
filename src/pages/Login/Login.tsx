import { LockOutlined, Person, Password } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  CardContent,
  InputAdornment,
} from "@mui/material";
import cs from "../../components/common/commonStyles";
import styles from "./Login.styles";

export default function Login() {
  return (
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
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained">
              ログイン
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
