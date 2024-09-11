import React, { useState } from "react";
import InputCmp from "../Component/InputCmp";
import { Button, DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [DOB, setDOB] = useState();

  const [userDetial, setUserDetail] = useState({});

  const [loading, SetLoading] = useState(false);

  const navigate = useNavigate();

  const handleDetail = (e) => {
    e.preventDefault();
    setUserDetail({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      DOB,
    });

    SetLoading(true);
    createUserWithEmailAndPassword(auth, userDetial.email, userDetial.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success("Account Create Succesfully");
        console.log(user);
        navigate("/");
        SetLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        SetLoading(false);
      });
  };

  console.log(loading);
  // console.log(DOB);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <form className="max-w-md mx-auto w-full" onSubmit={handleDetail}>
          <p className="text-3xl mb-8">Sign Up</p>
          <InputCmp
            type={"email"}
            name={"floating_email"}
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputCmp
            type={"password"}
            name={"floating_password"}
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="grid md:grid-cols-2 md:gap-6">
            <InputCmp
              type={"text"}
              name={"floating_first_name"}
              label={"First name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputCmp
              type={"text"}
              name={"floating_last_name"}
              label={"Last name"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="items-center my-3">
            <div className="relative z-0 mb-3 group">
              <input
                type="tel"
                pattern="[0-9]{4}-[0-9]{7}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-White bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required=""
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                onChange={(e) => setEmail(e.target.value)}
              >
                Phone number (03xx-xxxxxxx)
              </label>
            </div>
            <DateInput
              variant={"underlined"}
              label={"Birth date"}
              className="text-white"
              placeholderValue={new CalendarDate(1995, 11, 6)}
              onChange={(e) => setDOB(e)}
              value={DOB}
            />
          </div>
          <Button
            isLoading={loading ? true : undefined}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </Button>
          <p className="mt-5">
            Already have Account? <Link to={"/login"}>Sign In here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
