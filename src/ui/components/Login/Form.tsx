import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { SubmitHandler, useForm, FieldErrors, UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import { validationRules } from "./consts/velidationRules";
import { SytledProps } from "../../../utils/StyledProps";

type FormProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Form = ({ setAuth }: { setAuth: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(validationRules),
  });

  const submit: SubmitHandler<FormProps> = (data) => {
    // request
    setAuth();
  };
  return <FormContent onSubmit={handleSubmit(submit)} register={register} errors={errors} />;
};

type FormContentProps = {
  onSubmit: () => void;
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
};

const FormContent = ({ register, errors, onSubmit }: FormContentProps) => {
  const SubmitButton = styled(({ className, children }: SytledProps) => (
    <Button type="submit" fullWidth variant="contained" className={className} onClick={onSubmit}>
      {children}
    </Button>
  ))`
    letter-spacing: 0.5rem;
    font-weight: bold;
    margin-top: 3ch;
  `;
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
        helperText={errors.email?.message || "学校指定のメールアドレスを入力してください"}
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
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="ログインを保持する" />
      <SubmitButton>ログイン</SubmitButton>
    </Box>
  );
};
