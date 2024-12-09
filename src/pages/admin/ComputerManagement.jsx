import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";

export default function ComputerManagement() {
  const navigate = useNavigate();

  const getComputers = async () => {
    const response = await axios.get(`${apiURL}/api/v1/computers`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["computers"],
    queryFn: getComputers,
  });

  const handleDelete = (computerID) => {
    // Placeholder for delete functionality
    console.log(`Deleting employee with computerID: ${computerID}`);
  };

  const handleEdit = (computerID) => {
    // Placeholder for edit functionality
    console.log(`Editing employee with computerID: ${computerID}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const computers = data.computers;

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
                  Komputer Manajemen
                </h1>
                <button
                  className="btn btn-primary ml-8"
                  onClick={() => navigate("/admin/dashboard/computers/add")}
                >
                  <PlusIcon />
                  Tambahkan
                </button>
              </div>
            </div>

            {/* Bottom Section: Computer Table */}
            <div className="row-span-3 p-6 bg-base-100 overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Komputer ID</th>
                    <th>Nama Komputer</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {computers.map((computer) => (
                    <tr key={computer.computerID}>
                      <td>{computer.computerID}</td>
                      <td>{computer.computerName}</td>
                      <td>{computer.status}</td>
                      <td>
                        <div className="flex space-x-2">
                          <button
                            className="btn btn-sm btn-outline btn-info"
                            onClick={() => handleEdit(computer.computerID)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline btn-error"
                            onClick={() => handleDelete(computer.computerID)}
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
