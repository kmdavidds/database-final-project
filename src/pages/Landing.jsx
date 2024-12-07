import { useNavigate } from "react-router-dom";
import CustomerIcon from "../components/svg/CustomerIcon";
import StaffIcon from "../components/svg/StaffIcon";
import AdminIcon from "../components/svg/AdminIcon";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center">
        <div className="card lg:card-side bg-gradient-to-tl p-12">
          <figure className="w-full lg:max-w-[20vw]">
            <img src="/logo_1.png" alt="logo" width={200} height={200} />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title text-4xl md:text-6xl text-center md:text-left lg:ml-4">
              Sistem Informasi <br /> Warung Internet
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col">
          <a
            role="button"
            className={"btn btn-primary btn-md md:btn-lg mb-4"}
            onClick={() => navigate("/customer/login")}
          >
            <CustomerIcon />
            Customer Login
          </a>
          <a
            role="button"
            className={"btn btn-primary btn-md md:btn-lg mb-4"}
            onClick={() => navigate("/staff/login")}
          >
            <StaffIcon />
            Staff Login
          </a>
          <a
            role="button"
            className={"btn btn-primary btn-md md:btn-lg"}
            onClick={() => navigate("/admin/login")}
          >
            <AdminIcon />
            Admin Login
          </a>
        </div>
      </section>
    </div>
  );
}
