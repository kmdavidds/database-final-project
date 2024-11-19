import { useNavigate } from "react-router-dom";

export default function MainButton({ to, text }) {
  const navigate = useNavigate();
  return (
    <a
      role="button"
      className={"btn btn-primary btn-md md:btn-lg"}  
      onClick={() => navigate(to)}
    >
      {text}
    </a>
  );
}
