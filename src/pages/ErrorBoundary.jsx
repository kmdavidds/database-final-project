import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <div>aaa</div>
    </>
  );
}
