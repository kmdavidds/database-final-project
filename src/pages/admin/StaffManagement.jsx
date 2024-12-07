import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";

export default function StaffManagement() {
  const navigate = useNavigate();

  const getStaffs = async () => {
    const response = await axios.get(`${apiURL}/api/v1/staffs`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["staffs"],
    queryFn: getStaffs,
  });

  const handleDelete = (staffID) => {
    // Placeholder for delete functionality
    console.log(`Deleting employee with staffID: ${staffID}`);
  };

  const handleEdit = (staffID) => {
    // Placeholder for edit functionality
    console.log(`Editing employee with staffID: ${staffID}`);
  };

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    console.log(error);
  }

  const staffs = data.staffs;

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-primary-content">
        {/* Left section (1/5 of the screen) */}
        <div className="flex flex-col justify-center items-center">
          <div className="card lg:card-side my-4">
            <figure className="w-full lg:max-w-[3vw]">
              <img src="/logo_1.png" alt="logo" width={200} height={200} />
            </figure>
            <div className="card-body justify-center">
              <h2 className="card-title text-2xl text-center md:text-left">
                Admin SIWI
              </h2>
            </div>
          </div>
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            {/* Sidebar content here */}
            <li>
              <a onClick={() => navigate("/admin/dashboard/staffs")}>
                Staff Manajemen
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/customers")}>
                Customer Manajemen
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/items")}>
                Konsumsi Manajemen
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/computers")}>
                Komputer Manajemen
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/report")}>
                Laporan Keuangan
              </a>
            </li>
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
                  Staff Manajemen
                </h1>
                <button
                  className="btn btn-primary ml-8"
                  onClick={() => navigate("/admin/dashboard/staffs/add")}
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
                    <th>Staff ID</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Nomor Telepon</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staff) => (
                    <tr key={staff.staffID}>
                      <td>{staff.staffID}</td>
                      <td>{staff.name}</td>
                      <td>{staff.email}</td>
                      <td>{staff.phone}</td>
                      <td>
                        <div className="flex space-x-2">
                          <button
                            className="btn btn-sm btn-outline btn-info"
                            onClick={() => handleEdit(staff.staffID)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline btn-error"
                            onClick={() => handleDelete(staff.staffID)}
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
