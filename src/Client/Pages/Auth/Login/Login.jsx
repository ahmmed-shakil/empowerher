import React from "react";
import loginImg from "../../../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Layout } from "../../../../components/shared/Layout/Layout";
import Input from "../../../../components/shared/Input/Input";
import FullPrimaryButton from "../../../../components/Buttons/FullPrimaryButton";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" pt-32">
        <Layout>
          <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
            <div className=" flex justify-center">
              <img src={loginImg} alt="Login" className=" h-full" />
            </div>
            <div className=" px-3 py-5 shadow-lg rounded-m border-solid border-2 border-transparent space-y-5 rounded-md w-3/4">
              <h2 className=" text-2xl font-semibold text-primary">
                Welcome Back
              </h2>
              <Input type={"email"} placeholder="Email" />
              <Input type={"password"} placeholder="Password" />
              <div className=" flex justify-between items-center">
                <span className=" ml-2 flex items-center gap-4">
                  <input type="checkbox" className=" h-4 w-4" />
                  <p>Remember me</p>
                </span>
                <p className=" underline text-primary cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <FullPrimaryButton
                text={"Log in"}
                onClick={() => navigate("/dashboard")}
              />
              <p className=" text-center">
                Don't have an account?{" "}
                <NavLink className="text-primary underline">
                  Register now
                </NavLink>
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Login;
