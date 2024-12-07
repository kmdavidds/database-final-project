import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiURL from "../../js/APIURL";
import axios from "axios";
import BackButton from "../../components/BackButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameIcon from "../../components/svg/NameIcon";
import PhoneIcon from "../../components/svg/PhoneIcon";
import EmailIcon from "../../components/svg/EmailIcon";
import PasswordIcon from "../../components/svg/PasswordIcon";
import EnterIcon from "../../components/svg/EnterIcon";

export default function CustomerRegister() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isActiveError, setIsActiveError] = useState(false);
  const [isActiveSuccess, setIsActiveSuccess] = useState(false);

  const postLogin = async (loginDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/v1/customers/register",
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
        navigate("/");
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
        
      <section className="flex h-screen w-screen justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-6xl mb-2">Register</p>
          <div className="divider divider-primary" />
          <div className="mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <NameIcon />
              <input
                {...register("name")}
                type="text"
                className="grow"
                placeholder="Nama Lengkap"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <PhoneIcon />
              <input
                {...register("phone")}
                type="text"
                className="grow"
                placeholder="Nomor Telepon"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <EmailIcon />
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
              <PasswordIcon />
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
              Register
              <EnterIcon />
            </button>
            <span
              className={
                mutation.isPending
                  ? "loading loading-infinity text-primary loading-lg"
                  : "hidden"
              }
            ></span>
          </div>
          <div>
            <p>
              Sudah punya akun?{" "}
              <a
                className="link text-secondary"
                onClick={() => navigate("/customer/login")}
              >
                Login
              </a>
            </p>
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
          <span>Register berhasil!</span>
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
          <span>Register gagal!</span>
        </div>
      </section>
    </>
  );
}
