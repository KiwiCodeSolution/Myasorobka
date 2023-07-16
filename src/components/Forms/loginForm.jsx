import { useForm } from 'react-hook-form';
import auth from '../../store/auth';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
console.log(data)
    auth.loginAction(data);
  }
  
  return (
    <form className="flex flex-col justify-center text-txt-main-white p-8" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Ім&apos;я користувача або Email адреса</label>
      <input
          type="text"
          className={`p-1 ${errors.username ? "bg-bg-orange" : "bg-bg-main"}`}
        {...register("username", { required: true })} />
      <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.username?.message}</p>

      <label htmlFor='password'>Пароль</label>
      <input
        type="password"
        className={`p-1 ${errors.password ? "bg-bg-orange" : "bg-bg-main"}`}
        {...register("password", { required: true })} />
      <p className='text-bg-orange txt-lg font-semibold mb-8'>{errors.password?.message}</p>

      <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full" />
    </form>
  );
}