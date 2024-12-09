import { useNavigate } from "react-router-dom";
import PlusIcon from "../../components/svg/PlusIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../../js/APIURL";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import DashboardLogo from "../../components/DashboardLogo";
import SideBarCustomer from "../../components/SideBarCustomer";
import formatDate from "../../js/formatDate";
import formatRupiah from "../../js/formatRP";
import SideBarStaff from "../../components/SideBarStaff";

export default function ReservationStaff() {
  const navigate = useNavigate();

  const getReservations = async () => {
    const response = await axios.get(`${apiURL}/api/v1/reservations`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  });

  const handleDelete = (reservationID) => {
    // Placeholder for delete functionality
    console.log(`Deleting employee with reservationID: ${reservationID}`);
  };

  const handleEdit = (reservationID) => {
    // Placeholder for edit functionality
    console.log(`Editing employee with reservationID: ${reservationID}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const reservations = data.reservations;

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-primary-content">
        {/* Left section (1/5 of the screen) */}
        <div className="flex flex-col justify-center items-center">
        <DashboardLogo title={"Staff SIWI"}/>
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
            {/* Sidebar content here */}
            <SideBarStaff />
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
                  Reservasi Komputer
                </h1>
                <button
                  className="btn btn-primary ml-8"
                  onClick={() => navigate("/admin/dashboard/reservations/add")}
                >
                  <PlusIcon />
                  Tambahkan
                </button>
              </div>
            </div>

            {/* Bottom Section: Reservation Table */}
            <div className="row-span-3 p-6 bg-base-100 overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Reservation ID</th>
                    <th>Customer Email</th>
                    <th>Computer ID</th>
                    <th>Waktu Mulai</th>
                    <th>Waktu Akhir</th>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.reservationID}>
                      <td>{reservation.reservationID}</td>
                      <td>{reservation.customerEmail}</td>
                      <td>{reservation.computerID}</td>
                      <td>{formatDate(reservation.startTime)}</td>
                      <td>{formatDate(reservation.endTime)}</td>
                      <td>{formatRupiah(reservation.totalAmount)}</td>
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