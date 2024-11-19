import { useNavigate } from "react-router-dom";

export default function BackButton({to}) {
  const navigate = useNavigate();
  return (
    <a
      role="button"
      className={"btn btn-primary btn-md hidden md:flex absolute top-2 m-8"}  
      onClick={() => navigate(to)}
    >
      Kembali
    </a>
  );
}
