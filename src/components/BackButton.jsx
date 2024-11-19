import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <a
      role="button"
      className={"btn btn-primary btn-md hidden md:flex absolute top-2 m-8"}  
      onClick={() => navigate(-1)}
    >
      Kembali
    </a>
  );
}
