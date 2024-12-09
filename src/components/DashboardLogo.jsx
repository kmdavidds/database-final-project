import { useNavigate } from "react-router-dom";

export default function DashboardLogo({ title }) {
  const navigate = useNavigate();
  return (
    <a onClick={() => navigate("/")}>
      <div className="card lg:card-side mb-8 mt-8">
        <figure className="w-full lg:max-w-[3vw]">
          <img src="/logo_1.png" alt="logo" width={200} height={200} />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title text-2xl text-left -m-4">
            {title}
          </h2>
        </div>
      </div>
    </a>
  );
}
