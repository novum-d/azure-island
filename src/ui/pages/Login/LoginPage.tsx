import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Card, Typography, CardContent } from "@mui/material";
import { cs } from "../../../utils/styles/commonStyles";
import { Form } from "../../components/Login/Form";
import styled from "@emotion/styled";
import { SytledProps } from "../../../utils/types/StyledProps";

export const LoginPage = ({ setAuth }: { setAuth: () => void }) => {
  const LoginCard = styled(({ className, children }: SytledProps) => (
    <Card className={className} variant="outlined">
      {children}
    </Card>
  ))`
    width: clamp(46ch, 50%, 54ch);
    margin-top: 6ch;
    padding: 2ch;
    margin-inline: auto;
  `;

  const LoginAvatar = styled(({ className, children }: SytledProps) => <Avatar className={className}>{children}</Avatar>)`
    margin-bottom: 2ch;
    margin-inline: auto;
  `;

  const Titile = styled(({ className, children }: SytledProps) => (
    <Typography className={className} component="h1" variant="h5">
      {children}
    </Typography>
  ))`
    margin-bottom: 1ch;
  `;

  const Description = styled(({ className, children }: SytledProps) => (
    <Typography className={className} component="p" variant="inherit">
      {children}
    </Typography>
  ))`
    opacity: 0.8;
    text-align: center;
  `;

  return (
    <Box>
      <LoginCard>
        <CardContent>
          <LoginAvatar>
            <LockOutlined />
          </LoginAvatar>
          <Titile>Azure Island へのログイン</Titile>
          <Description>
            <span css={cs.br}>学校で指定されたアカウントでログインして、</span>Azure Islandのサービスを利用しましょう。
          </Description>
          <Form setAuth={setAuth} />
        </CardContent>
      </LoginCard>
    </Box>
  );
};
