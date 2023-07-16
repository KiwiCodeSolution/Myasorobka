import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (errors) return;
    console.log("data:", data)
  }
  console.log("errors:", errors);
  
  return (
    <form className="flex flex-col justify-center gap-8 p-8" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className={`text-txt-main-white ${errors.username ? "bg-bg-orange" : "bg-bg-main"}`}
        placeholder="User name" {...register("username", { required: true, maxLength: 20 })} />
      <input
        type="text"
        className={`text-txt-main-white ${errors.password ? "bg-bg-orange" : "bg-bg-main"}`}
        placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
      <input
        type="submit"
        className="bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto rounded-full" />

    </form>
  );
}