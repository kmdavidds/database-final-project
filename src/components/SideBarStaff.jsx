import { useNavigate } from "react-router-dom";

export default function SideBarStaff() {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <a onClick={() => navigate("/staff/dashboard/items")} className="text-primary">
          Konsumsi Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/staff/dashboard/orders")} className="text-secondary ml-8">
          Orderan
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/staff/dashboard/computers")} className="text-primary">
          Komputer Manajemen
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/staff/dashboard/reservations")} className="text-secondary ml-8">
          Reservasi Komputer
        </a>
      </li>
      <li>
        <a onClick={() => navigate("/staff/dashboard/sessions")} className="text-secondary ml-8">
          Sesi Komputer
        </a>
      </li>
    </>
  );
}
