"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";
export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/help";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ username: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl text-gray-100">
          Log In to your account
        </h1>
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 py-2 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          <input
            required
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          disabled={loading}
        >
          {loading ? "loading..." : "Log In"}
        </button>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 font-medium rounded-lg">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>

        <a
          className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          style={{ backgroundColor: "#E04622" }}
          onClick={() => signIn("google", { callbackUrl })}
          role="button"
        >
          <i className="fab fa-google mr-2"></i>
          Continue with Google
        </a>
        <div className="flex flex-row justify-center text-sm font-light text-gray-500 dark:text-gray-400 ">
          Don't have an account?{" "}
          <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            <Link href="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
