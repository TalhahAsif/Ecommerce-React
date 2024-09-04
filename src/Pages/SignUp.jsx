import React from "react";
import InputCmp from "../Component/InputCmp";

const SignUp = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <form className="max-w-md mx-auto">
          <p className="text-3xl mb-8">Sign Up</p>
          <InputCmp type={"email"} name={"floating_email"} label={"Email"} />
          <InputCmp
            type={"password"}
            name={"floating_password"}
            label={"Password"}
          />
          <InputCmp
            type={"password"}
            name={"floating_repeat_password"}
            label={"Confirm password"}
          />

          <div className="grid md:grid-cols-2 md:gap-6">
            <InputCmp
              type={"text"}
              name={"floating_first_name"}
              label={"First name"}
            />
            <InputCmp
              type={"text"}
              name={"floating_last_name"}
              label={"Last name"}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-80 mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{4}-[0-9]{7}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (03xx-xxxxxxx)
              </label>
            </div>

            <InputCmp
              type={"text"}
              name={"floating_company"}
              label={"Company (Ex. Google)"}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
