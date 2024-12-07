import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

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
              <a onClick={() => navigate("/admin/dashboard/staffs")}>Staff Manajemen</a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/customers")}>Customer Manajemen</a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/items")}>Konsumsi Manajemen</a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/computers")}>Komputer Manajemen</a>
            </li>
            <li>
              <a onClick={() => navigate("/admin/dashboard/report")}>Laporan Keuangan</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-4 ">
        {/* Right section (4/5 of the screen) */}
        <div className="p-4 h-full">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-6xl">Selamat Datang, Admin!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
