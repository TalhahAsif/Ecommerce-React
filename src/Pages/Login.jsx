import React, { useState } from "react";
import InputCmp from "../Component/InputCmp";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Button } from "@nextui-org/react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loading, Setloading] = useState(false);

  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    Setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Sign In successfull");
        navigate("/");
        Setloading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        Setloading(false);
      });
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <form className="max-w-md mx-auto w-full" onSubmit={formHandle}>
          <p className="text-3xl mb-8 font-bold text-blue-700">Log In</p>
          <InputCmp
            type={"email"}
            name={"floating_email"}
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputCmp
            type={"password"}
            name={"floating_password"}
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            isLoading={loading ? true : undefined}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </Button>
          <p className="mt-5">
            Doesn't have Account? <Link to={"/signUp"}>Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
