import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirector(props: { url: string }): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(props.url);
  }, []);

  return <div className="row"> Lets go for Rainbow Color Page!</div>;
}
