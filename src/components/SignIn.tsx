import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400]">
      <div className="flex flex-col space-y-4 text-center">
        <div className="flex flex-col space-y-2">
          <Icons.logo className="mx-auto h-8 w-8 " />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back!
          </h1>
        </div>
        <p className="text-sm max-w-xs mx-auto">
          By continuing you are setting up your PhiMail account and agree to our
          Privacy Policy.
        </p>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-slate-700">
          New to PhiMail?{" "}
          <Link
            href="/sign-up"
            className="hover:text-slate-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
