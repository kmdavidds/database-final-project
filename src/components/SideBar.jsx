import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <a onClick={() => navigate("/admin/dashboard/staffs")} className="text-primary">
          Staff Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/customers")} className="text-primary">
          Customer Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/items")} className="text-primary">
          Konsumsi Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/orders")} className="text-secondary ml-8">
          Orderan
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/computers")} className="text-primary">
          Komputer Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/reservations")} className="text-secondary ml-8">
          Reservasi Komputer
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/sessions")} className="text-secondary ml-8">
          Sesi Komputer
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/admin/dashboard/report")} className="text-primary text-2xl mt-64 btn btn-outline">
          Laporan Keuangan
        </a>
      </li>
    </>
  );
}
