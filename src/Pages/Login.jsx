import React from "react";
import InputCmp from "../Component/InputCmp";

const Login = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <form className="max-w-md mx-auto w-full">
          <p className="text-3xl mb-8 font-bold text-blue-700">Log In</p>
          <InputCmp type={"email"} name={"floating_email"} label={"Email"} />
          <InputCmp
            type={"password"}
            name={"floating_password"}
            label={"Password"}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
