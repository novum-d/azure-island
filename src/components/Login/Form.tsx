import { Box, Button, TextField } from "@mui/material";

function Form() {
  return (
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
  );
}

export default Form;
