import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";

export default function AdminDashboard() {
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
        <div className="p-4 h-full">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-6xl">Selamat Datang, Admin!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
