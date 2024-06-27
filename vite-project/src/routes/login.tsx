import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { TbMailFilled } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginFormSchema from "../schemas/loginFormSchema";
import { z } from "zod";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

type LoginFormInputs = z.infer<typeof loginFormSchema>;

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<LoginFormInputs> = (formData) => {
    console.log(formData);
    reset();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 max-md:h-screen">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-leaf bg-cover w-full h-fit my-8 max-w-[400px] py-6 px-8 my-4 flex flex-col font-tenor shadow-md shadow-offset-down rounded-md"
      >
        <div className="mb-4 flex flex-col gap-4 mt-12">
          <Link to="/signup">
            <FaCircleArrowLeft className="text-gray-400 text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold my-2">Login</h1>
          <div className="mb-2 text-sm text-gray-500">
            <p>Welcome back!</p>
            <p>Please login to continue</p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 border rounded-md py-3 pl-4">
            <TbMailFilled className="text-3xl text-gray-300" />
            <Input
              label="Email address"
              type="email"
              placeholder="Your email address"
              {...register("email")}
            />
          </div>
          {errors.email ? (
            <p className="text-sm">{errors.email.message}</p>
          ) : null}

          <div className="flex items-center justify-between gap-4 border rounded-md py-3 pl-4">
            <div className="flex items-center gap-4">
              <MdLock className="text-3xl text-gray-300" />
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                label="Password"
                {...register("password")}
              />
            </div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-500 text-2xl pr-4"
            >
              {passwordVisible ? <VscEye /> : <VscEyeClosed />}
            </button>
          </div>
          {errors.password ? (
            <p className="text-sm">{errors.password.message}</p>
          ) : null}
        </div>
        <div className="flex flex-col mt-2 gap-4">
          <Button type="submit">Login</Button>
          <p className="text-primary text-center text-sm">Forgot password</p>
        </div>
        <div className="flex flex-col gap-8 mt-16 items-center">
          <p className="text-sm text-gray-500">
            Or Continue With Social Accounts
          </p>
          <ul className="flex gap-2 text-3xl items-center justify-between">
            <li className="rounded-md shadow-md shadow-offset-down py-4 px-6">
              <FcGoogle />
            </li>
            <li className="rounded-md shadow-md shadow-offset-down py-4 px-6">
              <FaFacebook className="text-blue-500" />
            </li>
            <li className="rounded-md shadow-md shadow-offset-down py-4 px-6">
              <FaApple />
            </li>
            <li className="rounded-md shadow-md shadow-offset-down py-4 px-6">
              <FaTwitter className="text-blue-400" />
            </li>
          </ul>
          <p className="text-sm text-gray-500 mb-4">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-primary">
              Create now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
