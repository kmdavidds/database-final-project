import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";
import formatRupiah from "../../js/formatRP";
import formatDate from "../../js/formatDate";

export default function OrderManagement() {
  const navigate = useNavigate();

  const getOrders = async () => {
    const response = await axios.get(`${apiURL}/api/v1/orders`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const handleDelete = (orderID) => {
    // Placeholder for delete functionality
    console.log(`Deleting employee with orderID: ${orderID}`);
  };

  const handleEdit = (orderID) => {
    // Placeholder for edit functionality
    console.log(`Editing employee with orderID: ${orderID}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const orders = data.orders;

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
        <div className="h-full">
          <div className="grid grid-rows-4 h-screen">
            {/* Top Section */}
            <div className="row-span-1 flex bg-base-200 shadow-md">
              {/* Left Top: Title */}
              <div className="flex items-center justify-start p-4">
                <h1 className="text-5xl font-bold text-base-content ml-12">
                  Order Manajemen
                </h1>
              </div>
            </div>

            {/* Bottom Section: Order Table */}
            <div className="row-span-3 p-6 bg-base-100 overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Email</th>
                    <th>Item ID</th>
                    <th>Jumlah</th>
                    <th>Waktu Order</th>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.orderID}>
                      <td>{order.orderID}</td>
                      <td>{order.customerEmail}</td>
                      <td>{order.itemID}</td>
                      <td>{order.quantity}</td>
                      <td>{formatDate(order.orderTime)}</td>
                      <td>{formatRupiah(order.totalAmount)}</td>
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
