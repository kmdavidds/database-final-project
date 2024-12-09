import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";
import formatRupiah from "../../js/formatRP";

export default function Report() {
  const navigate = useNavigate();

  const getReport = async () => {
    const response = await axios.get(`${apiURL}/api/v1/report`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["report"],
    queryFn: getReport,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const report = data.report;

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-primary-content">
        {/* Left section (1/5 of the screen) */}
        <div className="flex flex-col justify-center items-center">
          <DashboardLogo title={"Admin SIWI"} />
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            {/* Sidebar content here */}
            <SideBar />
          </ul>
        </div>
      </div>
      <div className="col-span-4 ">
        {/* Right section (4/5 of the screen) */}
        <div className="h-full">
          <div className="grid grid-rows-8 h-screen">
            {/* Top Section */}
            <div className="row-span-1 flex bg-base-200 shadow-md">
              {/* Left Top: Title */}
              <div className="flex items-center justify-center p-4 w-full">
                <h1 className="text-5xl font-bold text-base-content ml-12 text-center w-full">
                  Laporan Keuangan
                </h1>
              </div>
            </div>

            {/* Bottom Section: Customer Table */}
            <div className="row-span-7 p-6 overflow-x-auto bg-base-300">
              <h1 className="pb-4 pl-24 text-xl text-white mt-24">
                Jumlah Order: {report.numOrder}
              </h1>
              <h1 className="pb-4 pl-24 text-xl text-white">
                Total Keuntungan Order: {formatRupiah(report.sumOrder)}
              </h1>

              <h1 className="pb-4 pl-24 text-xl text-white">
                Jumlah Reservasi: {report.numReservation}
              </h1>
              <h1 className="pb-4 pl-24 text-xl text-white">
                Total Keuntungan Reservasi: {formatRupiah(report.sumReservation)}
              </h1>

              <h1 className="pb-4 pl-24 text-xl text-white">
                Total Sesi: {report.numSession}
              </h1>
              <h1 className="pb-16 pl-24 text-xl text-white">
                Total Keuntungan Sesi: {formatRupiah(report.sumSession)}
              </h1>
              <h1 className="pb-16 pl-24 text-5xl text-white">
                Total Keuntungan Hari Ini: {formatRupiah(report.totalProfit)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
