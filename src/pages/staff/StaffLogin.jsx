import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiURL from "../../js/APIURL";
import axios from "axios";
import BackButton from "../../components/BackButton";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function StaffLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isActiveError, setIsActiveError] = useState(false);
  const [isActiveSuccess, setIsActiveSuccess] = useState(false);

  const postLogin = async (loginDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/v1/staffs/login",
      data: loginDetails,
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      setIsActiveSuccess(true);
      setTimeout(() => {
        setIsActiveSuccess(false);
        navigate("/staff/dashboard");
      }, 1000);
    },
    onError: () => {
      setIsActiveError(true);
      setTimeout(() => {
        setIsActiveError(false);
      }, 3000);
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <>
      <BackButton to={"/"} />
      <section className="flex h-screen w-screen justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-6xl mb-2">Staff</p>
          <div className="divider divider-primary" />
          <div className="mb-4 mt-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                {...register("email")}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="mb-8">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                {...register("password")}
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="mb-8">
            <button
              className={mutation.isPending ? "hidden" : "btn btn-primary"}
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </button>
            <span
              className={
                mutation.isPending
                  ? "loading loading-infinity text-primary loading-lg"
                  : "hidden"
              }
            ></span>
          </div>
        </form>
      </section>

      <section className="absolute bottom-4 left-4">
        <div
          role="alert"
          className={isActiveSuccess ? "alert alert-success" : "hidden"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Login berhasil!</span>
        </div>
        <div
          role="alert"
          className={isActiveError ? "alert alert-error" : "hidden"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Email atau password salah. Login gagal!</span>
        </div>
      </section>
    </>
  );
}
