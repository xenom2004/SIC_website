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
    order: [],
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("form values", formValues);
      const data = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const res = await data.json();

      // setFormValues({ username: "", password: "" });
      setLoading(false);

      // console.log(res);
      if (res.status == "error") {
        alert("Username already taken");
      } else {
        alert("Successfully registered");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
          Register
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
          {loading ? "loading..." : "Register"}
        </button>

        <div className="flex flex-row justify-center text-sm font-light text-gray-500 dark:text-gray-400 ">
          Have an account?{" "}
          <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            <Link href="/login">Log In</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
