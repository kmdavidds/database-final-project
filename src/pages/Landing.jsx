import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center mb-12">
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
            className={"btn btn-primary btn-md md:btn-lg"}
            onClick={() => navigate("/customer/login")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            Customer Login
          </a>
        </div>
      </section>
    </div>
  );
}
