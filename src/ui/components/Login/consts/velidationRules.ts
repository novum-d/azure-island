import * as yup from "yup";

export const validationRules = yup.object({
  email: yup.string().required("メールアドレスを入力してください").email("メールアドレスが正しくありません"),
  password: yup.string().required("パスワードを入力してください"),
});