import { useForm } from "react-hook-form";
import Button, { EdesignColor } from "../../components/Button";
import Input from "../../components/Input";
import { Emaster, useInitMaster } from "./init";
import { LoginState } from "./type";

const Login = (): JSX.Element => {
  const initMaster = useInitMaster();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      master: initMaster,
      firstName: "",
    },
  });
  const onSubmit = (data: LoginState) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        variant="standard"
        label="帳號"
        control={control}
        error={errors?.master?.name?.message !== undefined}
        helperText={errors?.master?.name?.message}
        {...register(`master.${Emaster.name}`, {
          required: "請填寫這個欄位。",
        })}
      />
      {/* <Input
        variant="standard"
        label="帳號"
        control={control}
        error={errors?.firstName?.message !== undefined}
        helperText={errors?.firstName?.message}
        {...register("firstName", { required: "請填寫這個欄位。" })}
      /> */}

      <Input
        variant="standard"
        label="密碼"
        type="password"
        control={control}
        error={errors?.master?.password?.message !== undefined}
        helperText={errors?.master?.password?.message}
        {...register(`master.${Emaster.password}`, {
          required: "請填寫這個欄位。",
        })}
      />

      <Button type="submit" designColor={EdesignColor.yellow}>
        登入
      </Button>
    </form>
  );
};

export default Login;
