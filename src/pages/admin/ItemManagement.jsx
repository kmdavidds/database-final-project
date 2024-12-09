import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import formatRupiah from "../../js/formatRP";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";

export default function ItemManagement() {
  const navigate = useNavigate();

  const getItems = async () => {
    const response = await axios.get(`${apiURL}/api/v1/items`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const handleDelete = (itemID) => {
    // Placeholder for delete functionality
    console.log(`Deleting employee with itemID: ${itemID}`);
  };

  const handleEdit = (itemID) => {
    // Placeholder for edit functionality
    console.log(`Editing employee with itemID: ${itemID}`);
  };

  if (isLoading) {
    return <Loading />
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
                  Konsumsi Manajemen
                </h1>
                <button
                  className="btn btn-primary ml-8"
                  onClick={() => navigate("/admin/dashboard/items/add")}
                >
                  <PlusIcon />
                  Tambahkan
                </button>
              </div>
            </div>

            {/* Bottom Section: Staff Table */}
            <div className="row-span-3 p-6 bg-base-100 overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Konsumsi ID</th>
                    <th>Nama</th>
                    <th>Kategori</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.itemID}>
                      <td>{item.itemID}</td>
                      <td>{item.itemName}</td>
                      <td>{item.category}</td>
                      <td>{formatRupiah(item.price)}</td>
                      <td>{item.stockLevel}</td>
                      <td>
                        <div className="flex space-x-2">
                          <button
                            className="btn btn-sm btn-outline btn-info"
                            onClick={() => handleEdit(item.itemID)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline btn-error"
                            onClick={() => handleDelete(item.itemID)}
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
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
