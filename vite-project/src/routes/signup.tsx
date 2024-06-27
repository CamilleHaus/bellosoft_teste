import Button from "../components/Button";
import Input from "../components/Input";
import { TbMailFilled } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";





const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-[400px] border-2 py-6 px-8 flex flex-col">
        <div className="mb-4 flex flex-col gap-4">
          <Link to="/"><FaCircleArrowLeft className="text-gray-400 text-2xl"/></Link>
          <h1 className="text-xl font-bold mb-2">Create an account</h1>
          <div className="mb-2 text-sm text-gray-500">
            <p>Enter your information below or continue with social media account</p>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 border rounded-md py-3 pl-4">
            <TbMailFilled className="text-3xl text-gray-300" />
            <Input
              label="Email address"
              type="email"
              name="email"
              placeholder="Your email address"
            />
          </div>
          <div className="flex items-center gap-4 border rounded-md py-3 pl-4">
            <BsFillPhoneFill className="text-3xl text-gray-300" />
            <Input
              type="text"
              name="number"
              placeholder="Your mobile number"
              label="Mobile Number"
            />
          </div>
          <div className="flex items-center gap-4 border rounded-md py-3 pl-4">
            <MdLock className="text-3xl text-gray-300" />
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              label="Password"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-4">
          <Button type="submit">Create account</Button>
          <p className="text-primary text-center text-sm">Forgot password</p>
        </div>
      <div className="flex flex-col gap-8 mt-12 items-center">
        <p className="text-sm text-gray-500">Or Register With Social Accounts</p>
        <ul className="flex gap-2 text-3xl items-center justify-between w-full">
          <li className="rounded-md shadow-md shadow-offset-down py-4 px-5"><FcGoogle /></li>
          <li className="rounded-md shadow-md shadow-offset-down py-4 px-5"><FaFacebook className="text-blue-500"/></li>
          <li className="rounded-md shadow-md shadow-offset-down py-4 px-5"><FaApple /></li>
          <li className="rounded-md shadow-md shadow-offset-down py-4 px-5"><FaTwitter className="text-blue-400"/></li>
        </ul>
        <Link to="/" className="text-sm text-gray-500">Already have an account? <span className="text-primary">Login now</span></Link>
      </div>
      </form>
    </div>
  );
};

export default Signup;