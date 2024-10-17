import { useState } from "react";
import TextInput from "../components/input";
import PasswordInput from "../components/password-input";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <TextInput
                id="email"
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
              />
              <PasswordInput
                label="Your password"
                name="password"
                id="password"
                placeholder="••••••••"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
