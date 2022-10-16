import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationRules } from "./consts/velidationRules";
import { FormContent } from "./FormContent";

export type FormProps = {
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
