import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white max-w-sm py-5 mx-auto p-5 w-full">
          <div className="w-20 h-20  mx-auto">
            <img src="https://i.ibb.co/H2Mbg8y/signin.gif" alt="icon" />
          </div>

          <form className="pt-6">
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={()=> setShowPassword((preve)=> !preve)}>
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={'/forgot-password'} className="block w-fit ml-auto hover:underline hover:text-red-600"> Forget Password?</Link>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Login</button>
          </form>
          <p className="my-4">Don't have account ? <Link to={"/signup"} className="text-red-600 hover:underline hover:text-red-700">Sign up</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
