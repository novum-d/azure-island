import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type FormProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const validationRules = yup.object({
  email: yup
    .string()
    .required("メールアドレスを入力してください")
    .email("メールアドレスが正しくありません"),
  password: yup.string().required("パスワードを入力してください"),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(validationRules),
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    // リクエスト処理
  };

  return (
    <Box component="form">
      <TextField
        margin="normal"
        fullWidth
        label="メールアドレス"
        type="email"
        autoComplete="email"
        autoFocus
        error={"email" in errors}
        helperText={
          errors.email?.message || "学校指定のメールアドレスを入力してください"
        }
        {...register("email")}
      />
      <TextField
        margin="normal"
        fullWidth
        label="パスワード"
        type="password"
        autoComplete="current-password"
        error={"password" in errors}
        helperText={errors.password?.message || "パスワードを入力してください"}
        {...register("password")}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="ログインを保持する"
      />
      <SubmitButton onClick={handleSubmit(onSubmit)}>ログイン</SubmitButton>
    </Box>
  );
};

type SubmitButtonProps = {
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const SubmitButton = styled(
  ({ className, onClick, children }: SubmitButtonProps) => (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
)`
  letter-spacing: 0.5rem;
  font-weight: bold;
  margin-top: 3ch;
`;