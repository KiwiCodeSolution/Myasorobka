import { useForm } from 'react-hook-form';
import auth from '../store/auth';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (errors) return;
    console.log("data:", data);
    auth.loginAction(data);
  }
  console.log("errors:", errors);
  
  return (
    <form className="flex flex-col justify-center text-txt-main-white p-8" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Ім&apos;я користувача або Email адреса</label>
      <input
          type="text"
          className={`mb-8 p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"}`}
          {...register("username", { required: true, maxLength: 20 })} />
      <label htmlFor='password'>Пароль</label>
      <input
        type="text"
        className={`mb-8 p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"}`}
        {...register("password", { required: true, minLength: 6 })} />
      <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] mt-8 py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full" />
      {/* <input type="submit" /> */}
    </form>
  );
}