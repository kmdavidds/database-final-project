import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import formatRupiah from "../../js/formatRP";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";
import EnterIcon from "../../components/svg/EnterIcon";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import SideBarCustomer from "../../components/SideBarCustomer";

export default function Order() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isActiveError, setIsActiveError] = useState(false);
  const [isActiveSuccess, setIsActiveSuccess] = useState(false);

  const getItems = async () => {
    const response = await axios.get(`${apiURL}/api/v1/items`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
  const postOrder = async (orderDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/v1/orders",
      data: orderDetails,
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: postOrder,
    onSuccess: () => {
      setIsActiveSuccess(true);
      setTimeout(() => {
        setIsActiveSuccess(false);
        navigate("/customer/dashboard");
      }, 1000);
    },
    onError: () => {
      setIsActiveError(true);
      setTimeout(() => {
        setIsActiveError(false);
      }, 3000);
    },
  });

  const onSubmit = (data) =>
    mutation.mutate({
      itemID: items.find((item) => item.itemName === data.itemName).itemID,
      quantity: parseInt(data.quantity),
    });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const items = data.items;

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-primary-content">
        {/* Left section (1/5 of the screen) */}
        <div className="flex flex-col justify-center items-center">
          <DashboardLogo title={"Customer SIWI"} />
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            {/* Sidebar content here */}
            <SideBarCustomer />
          </ul>
        </div>
      </div>
      <div className="col-span-4 ">
        {/* Right section (4/5 of the screen) */}
        <div className="h-full">
          <div className="grid grid-rows-4 h-screen">
            {/* Top Section */}
            <div className="row-span-1 flex bg-base-200 shadow-md w-full">
              {/* Left Top: Title */}
              <div className="flex items-center justify-center p-4 w-full">
                <h1 className="text-5xl font-bold text-base-content ml-12 mr-12 -mt-2">
                  Pesanan:
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                  <select
                    className="select select-primary w-full max-w-xs"
                    {...register("itemName")}
                    defaultValue={"Pilih"}
                  >
                    <option disabled>Pilih</option>
                    {items.map((item) => (
                      <option key={item.itemID}>{item.itemName}</option>
                    ))}
                  </select>
                  <input
                    {...register("quantity")}
                    type="number"
                    placeholder="Jumlah"
                    className="input input-bordered input-primary w-24 ml-4"
                  />
                  <div className="flex justify-center items-center">
                    <button
                      className={
                        mutation.isPending ? "hidden" : "btn btn-primary ml-8"
                      }
                    >
                      Order
                      
                    </button>
                    <span
                      className={
                        mutation.isPending
                          ? "loading loading-infinity text-primary loading-lg ml-8"
                          : "hidden"
                      }
                    ></span>
                  </div>
                </form>
              </div>
            </div>
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
                <span>Order berhasil!</span>
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
                <span>Order gagal!</span>
              </div>
            </section>

            {/* Bottom Section: Staff Table */}
            <div className="row-span-3 p-6 bg-base-100 overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Kategori</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.itemID}>
                      <td>{item.category}</td>
                      <td>{item.itemName}</td>
                      <td>{formatRupiah(item.price)}</td>
                      <td>{item.stockLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
