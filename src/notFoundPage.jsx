import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page 404</h1>
      <p>Hey! You try to find something that does not exist!</p>
      <button onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}