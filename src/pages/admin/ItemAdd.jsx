import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiURL from "../../js/APIURL";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NameIcon from "../../components/svg/NameIcon";
import PhoneIcon from "../../components/svg/PhoneIcon";
import EmailIcon from "../../components/svg/EmailIcon";
import PasswordIcon from "../../components/svg/PasswordIcon";
import EnterIcon from "../../components/svg/EnterIcon";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";

export default function ItemAdd() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [isActiveError, setIsActiveError] = useState(false);
  const [isActiveSuccess, setIsActiveSuccess] = useState(false);

  const postLogin = async (loginDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/v1/items/register",
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
        navigate("/admin/dashboard/items");
      }, 1000);
    },
    onError: () => {
      setIsActiveError(true);
      setTimeout(() => {
        setIsActiveError(false);
      }, 3000);
    },
  });

  const onSubmit = (data) => mutation.mutate({
    name: data.name,
    category: data.category,
    price: parseFloat(data.price),
    stockLevel: parseInt(data.stockLevel),
  });
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-primary-content">
        {/* Left section (1/5 of the screen) */}
        <div className="flex flex-col justify-center items-center">
        <DashboardLogo title={"Admin SIWI"}/>
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            {/* Sidebar content here */}
            <SideBar />
          </ul>
        </div>
      </div>
      <div className="col-span-4 ">
        {/* Right section (4/5 of the screen) */}
        <div className=" h-full">
          <div className="flex justify-center items-center h-full">
            <section className="flex h-screen w-screen justify-center items-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-6xl mb-2">Tambah Produk</p>
                <div className="divider divider-primary" />
                <div className="mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <EnterIcon />
                    <input
                      {...register("itemName")}
                      type="text"
                      className="grow"
                      placeholder="Nama Produk"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <EnterIcon />
                    <input
                      {...register("category")}
                      type="text"
                      className="grow"
                      placeholder="Kategori"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <EnterIcon />
                    <input
                      {...register("price")}
                      type="number"
                      className="grow"
                      placeholder="Harga"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="input input-bordered flex items-center gap-2">
                    <EnterIcon />
                    <input
                      {...register("stockLevel")}
                      type="number"
                      className="grow"
                      placeholder="Stok"
                    />
                  </label>
                </div>
              
                <div className="mb-8">
                  <button
                    className={
                      mutation.isPending ? "hidden" : "btn btn-primary"
                    }
                  >
                    Tambahkan
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
                <span>Tambahan berhasil!</span>
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
                <span>Tambahan gagal!</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
