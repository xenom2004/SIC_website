import { LoginForm } from "./form";
import { Suspense } from "react";
export default function LoginPage() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 lg:py-0">
        <div className="container mx-auto md:h-screen px-6 py-12 h-full flex justify-center items-center">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
