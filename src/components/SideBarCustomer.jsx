import { useNavigate } from "react-router-dom";

export default function SideBarCustomer() {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <a
          onClick={() => navigate("/customer/dashboard")}
          className="text-primary"
        >
          Homepage
        </a>
      </li>
      <li>
        <a
          onClick={() => navigate("/customer/order")}
          className="text-secondary ml-8"
        >
          Order Makanan/Minuman
        </a>
      </li>
      <li>
        <a
          onClick={() => navigate("/customer/membership")}
          className="text-secondary ml-8"
        >
          Beli Membership
        </a>
      </li>
    </>
  );
}
